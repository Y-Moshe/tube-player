<template>
  <main class="playlist-app">
    <search-bar v-model="querySearch" @change="handleSearch" />

    <div class="videos-container">
      <videos-list :videos="videos"/>
    </div>
  </main>
</template>

<script>
import videosList from '../components/videos-list.vue';
import searchBar from '../components/search-bar.vue'
import { ytService} from '../services/youtube.service'

export default {
  name: 'playlist-app',
  components: {
    videosList,
    searchBar
  },
  data() {
    return {
      querySearch: '',
      videos: []
    }
  },
  methods: {
    async handleSearch({ target }) {
      const query = target.value
      console.log('query', query)
      const videos = await ytService.getYouTubeVideos(query)
      console.log('videos', videos)
      this.videos = videos
    }
  }
}
</script>


