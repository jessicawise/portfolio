<template>
    <div id="animations">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 align-left">
                    <p>This page is dedicated to showcasing some of the animations I completed in college as well as what I've worked on since completing college. These animations were created using either Adobe Flash or Toon Boom Harmony</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-md-offset-3 align-left">
                    <h2><strong>Logo Animation</strong></h2>
                    <div class="Logo"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-md-offset-3 align-left">
                    <h2><strong>Cat World Problems</strong></h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/IZKVgf7XVfI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-md-offset-3 align-left">
                    <h2><strong>College Days</strong></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-md-offset-3 align-left">
                    <iframe src="https://player.vimeo.com/video/41380169" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <div class="col-md-6 col-md-offset-3 align-left">
                    <iframe src="https://player.vimeo.com/video/57906669" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import ScrollToNav from "@/mixins/ScrollToNav.vue"
    export default {
        name: "animations",
        mixins: [
            ScrollToNav
        ],
        mounted() {
            var $ = $
            $(".Logo").animateSprite({
                fps: 24,
                animations: {
                    main: Array.apply(null, {
                        length: 132
                    }).map(Number.call, Number)
                },
                loop: false
            })
        }
    }
</script>