'use strict'

const API_KEY = 'AIzaSyB2GiAeNACMpam858AZjuI-tmLiXfg6EsE'

const YOUTUBE_RES_STORAGE_KEY = 'ytCache'

const ytCache = loadFromStorage(YOUTUBE_RES_STORAGE_KEY) || {}

var gYTRes = ytCache || {}

function getYouTubeRes(txt) {

    if (ytCache[txt]) {
        console.log('fetching from YT cache');
        return Promise.resolve(ytCache[txt])
    }

    return axios.get(_getYTUrl(txt))
        .then(({ data }) => {
            return data.items.map(
                (item) => {
                    const id = item.id.videoId
                    const thumbnailUrl = item.snippet.thumbnails.default.url
                    const title = item.snippet.title
                    return { id, thumbnailUrl, title }
                }
            )
        }).then((res) => {
            // console.log('shorter results from YT:', res)
            ytCache[txt] = res
            saveToStorage(YOUTUBE_RES_STORAGE_KEY, ytCache)
            return res
        }
        )
}

function _getYTUrl(searchTerm) {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet%20&videoEmbeddable=true&type=video&key=${API_KEY}&q=${searchTerm}`
}