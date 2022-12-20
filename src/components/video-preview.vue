<template>
    <section class="video-preview-container flex">
        <div class="thumbnail">
            <img :src="video.thumbnailUrl">
        </div>
        <div>
            <div class="info">
                <h4 class="title">{{video.title}}</h4>
                <h4 class="desc">{{video.description}}</h4>
            </div>
            <div>
                <button @click="$emit('onPlay', video)" class="play-btn">Play</button>
            </div>
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



