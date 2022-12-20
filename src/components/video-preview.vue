<template>
    <section class="video-preview-container">
        <h1>video preview</h1>
        <div class="thumbnail">
            <img :src="video.thumbnailUrl">
        </div>
        <div class="info">
            <h2>{{video.title}}</h2>
            <h2>{{video.description}}</h2>
        </div>
        <div>
            <button @click="$emit('onPlay', video)" class="primary-btn">Play</button>
        </div>
        
    </section>
</template>

<script>
export default {
    name: 'video-preview',
    props: {
        video: Object
    },
    methods: {
        
    }

}
</script>



