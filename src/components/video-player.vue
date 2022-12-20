<script>
export default {
  props: {
    video: Object
  },
  computed: {
    playUrl() {
      return 'https://www.youtube.com/embed/' + this.video.id
    }
  }
}
</script>

<template>
  <section class="video-player">
    <div class="text-center" v-if="video">
      <iframe width="420" height="315" :src="playUrl" class="border-0">
      </iframe>
      <p>Current playing: {{ video.title }}</p>
    </div>
    <div class="text-center" v-else>
      Nothing to play, click video to play
    </div>
  </section>
</template>
