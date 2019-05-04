<template>
  <div id="fidelity">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <router-link class='logo-icon' to='/works/fidelity'><img class="border-radius" src="/img/FidelityLogo.svg" width="100%"/></router-link>
        </div>
      </div>
      <div class="row"  style='margin-top: 15px;'>
        <div class="col-md-6 col-md-offset-1 project-row">
          <div class='project'>
            <router-link to='/works/fidelity/redesign' class='project-box' style="background-image: url('/img/FidelityProject1.png')"></router-link>
            <div>Compliance ReDesign</div>
          </div>

          <div class='project'>
            <router-link to='/works/fidelity/17a6' class='project-box' style="background-image: url('/img/FidelityProject2.png')"></router-link>
            <div>17a6 Account Review</div>
          </div>
        </div>
        <div class="col-md-4 col-xs-10 col-xs-offset-1 col-md-offset-0" style="text-align:left; padding: 0px 0 20px;">
          I started at Fidelity in 2017 and worked on a wide variety of projects ranging from internal compliance applications to external client facing financial applications. My roles also varied widely from UX Designer to Design Lead. I did exploration, concepting, wireframing, prototyping and usability testing.
        </div>
      </div>
      <hr />
      <router-view />
    </div>
  </div>
</template>

<script>
    import ScrollToNav from "@/mixins/ScrollToNav.vue"
    export default {
        name: "fidelity",
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

    .project-row {
      text-align: right;
      div {
        text-align: center;
      }
    }

    @media (max-width: 992px) {
      .project-row {
        text-align: center;
        padding-bottom: 10px;
        div {
          text-align: center;
        }
      }
    }

    .project-box {
      display: block;
      width: 150px;
      border: 3px solid transparent;
      height: 150px;
      margin: 0 10px 0 0;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: cover;

      -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
      box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);

      &.router-link-active {
        border: 3px solid rgba(97, 26, 82, .5);
      }

      &:hover {
        border: 3px solid rgba(97, 26, 82, .5);
      }
    }
  }
</style>
