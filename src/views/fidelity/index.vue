<template>
  <div id="fidelity">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <router-link class='logo-icon' to='/works/fidelity'><img class="border-radius" src="/img/FidelityLogo.svg" width="100%"/></router-link>
        </div>
      </div>
      <div class="row"  style='margin-top: 15px;'>
        <div class="col-md-6 col-md-offset-2">
          <div class='project'>
            <router-link to='/works/fidelity/project-1' class='project-box' style="background: url('/img/IMAGE_NAME.png')"></router-link>
            <span>Project 1</span>
          </div>

          <div class='project'>
            <router-link to='/works/fidelity/project-2' class='project-box' style="background: url('/img/IMAGE_NAME.png')"></router-link>
            <span>Project 2</span>
          </div>
        </div>
        <div class="col-md-3" style="text-align:left; padding: 10px;">
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

    .project {
      display: inline-block;
    }

    .project-box {
      display: block;
      width: 150px;
      border: 3px solid transparent;
      height: 150px;
      margin: 0 10px 0 0;
      box-sizing: border-box;

      -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
      box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);

      &:hover {
        border: 3px solid rgba(97, 26, 82, .5);
      }
    }
  }
</style>
