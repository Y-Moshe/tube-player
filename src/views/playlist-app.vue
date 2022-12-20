<template>
  <main class="playlist-app">
    <search-bar v-model="querySearch" @change="handleSearch" />

    <div class="videos-container">
      <videos-list :videos="videos" @play="handleVideoPlay" />
      <video-player :video="currentPlay" />
    </div>
  </main>
</template>

<script>
import { ytService} from '../services/youtube.service'

import videosList from '../components/videos-list.vue'
import searchBar from '../components/search-bar.vue'
import videoPlayer from '../components/video-player.vue'

export default {
  name: 'playlist-app',
  components: {
    videosList,
    searchBar,
    videoPlayer
  },
  data() {
    return {
      querySearch: '',
      videos: [],
      currentPlay: null
    }
  },
  methods: {
    async handleSearch({ target }) {
      const query = target.value
      console.log('query', query)
      const videos = await ytService.getYouTubeVideos(query)
      console.log('videos', videos)
      this.videos = videos
    },
    handleVideoPlay(video) {
      this.currentPlay = video
    }
  }
}
</script>


