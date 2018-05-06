<template>
  <div id="drawings">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 align-left">
          <p>These are samples of the drawings I've done in the past several months. Traditional drawings are done with pencil, pen and copic markers.
            Digital drawings are done in Photoshop.</p>

            <h3><strong>Traditional Drawings</strong></h3>
            <br />
            <h4>Cafe Sketching</h4>
            <img class="drawing-size" src="/img/drawings/drawing1.png" />

            <h4>Characters</h4>
            <img class="drawing-size" src="/img/drawings/drawing2.png" />
            <img class="drawing-size" src="/img/drawings/punch.png" />
            <br />
            <h3><strong>Digital Drawings</strong></h3>
            <br />
            <h4>Characters</h4>
            <img class="drawing-size" src="/img/drawings/punch2.jpg" />
            <img class="digital-size" src="/img/drawings/pitch.jpg" /> <br />
            <img class="digital-size" src="/img/drawings/gina.jpg" />

          </div>
        </div>
      </div>
  </div>
</template>

<script>
    import ScrollToNav from "@/mixins/ScrollToNav.vue"
    export default {
        name: "drawings",
        mixins: [
            ScrollToNav
        ]
    }
</script>

