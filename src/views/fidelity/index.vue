<template>
  <div id="fidelity">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <router-link class='logo-icon' to='/works/fidelity'><img class="border-radius" src="/img/FidelityLogo.svg" width="100%"/></router-link>
        </div>
      </div>
      <div class="row"  style='margin-top: 15px;'>
        <div class="col-md-3 col-md-offset-3">
          <div class='project-box'>

          </div>

          <div class='project-box'>

          </div>
        </div>
        <div class="col-md-3" style="text-align:left">
          I started at Fidelity in 2017 and worked on a wide variety of projects ranging from internal compliance applications to external client facing financial applications. My roles also varied widely from UX Designer to Design Lead. I did exploration, concepting, wireframing, prototyping and usability testing.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ScrollToNav from "@/mixins/ScrollToNav.vue"
    export default {
        name: "street_smarts",
        mixins: [
            ScrollToNav
        ]
    }
</script>

<style lang="scss" scoped>
  #fidelity {
    .logo-icon {
      display: inline-block;
      max-width: 300px;
    }

    .project-box {
      width: 150px;
      background: grey;
      border: 1px solid black;
      height: 150px;
      margin: 0 10px 0 0;
      display: inline-block;
    }
  }
</style>
