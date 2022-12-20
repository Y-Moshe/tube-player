import axios from 'axios'

import { utilService } from './util.service'

const API_KEY = process.env.GOOGLE_TY_API_KEY
const YOUTUBE_RES_STORAGE_KEY = 'ytCache'

const ytCache = utilService.loadFromStorage(YOUTUBE_RES_STORAGE_KEY) || {}

function getYouTubeVideos(txt) {

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
                    const { title, description } = item.snippet
                    return { id, thumbnailUrl, title, description }
                }
            )
        }).then((res) => {
            // console.log('shorter results from YT:', res)
            ytCache[txt] = res
            utilService.saveToStorage(YOUTUBE_RES_STORAGE_KEY, ytCache)
            return res
        }
        )
}

function _getYTUrl(searchTerm) {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet%20&videoEmbeddable=true&type=video&key=${API_KEY}&q=${searchTerm}`
}

export const ytService = {
    getYouTubeVideos
}