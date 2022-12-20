<template>
    <section class="video-list-container">
        <h1>video list</h1>
        <ul class="video-list clean-list">
            <li v-for="video in videos">
                <video-preview :video="video" :key="video.id"/>
            </li>
        </ul>
    </section>
</template>
<script>
import videoPreview from './video-preview.vue'
export default {
    name: 'videos-list',
    props: {
        videos: Array
    },
    data() {
        return {
           
        }
    },
    components: {
        videoPreview
    }
    
}
</script>
<style>
    
</style>