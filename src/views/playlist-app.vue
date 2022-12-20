<template>
  <main>
    PLAYLIST
    <videos-list :videos="videos"/>
  </main>
</template>

<script>
import videosList from '../components/videos-list.vue';
export default {
  name: 'playlist-app',
  data() {
    return {

    }
  },

  components: {
    videosList
  }
}
</script>


