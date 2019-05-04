<template>
  <div id="fidelity">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <router-link class='logo-icon' to='/works/streetsmarts'><img class="border-radius" src="/img/StreetSmartsLogo.svg" width="100%"/></router-link>
        </div>
      </div>
      <div class="row"  style='margin-top: 15px;'>
        <div class="col-md-6 col-md-offset-1 project-row">
          <div class='project'>
            <router-link to='/works/streetsmarts/fleet-tracker' class='project-box' style="background: url('/img/StreetSmartsProject1Image.png')"></router-link>
            <div>Fleet Tracker</div>
          </div>

          <div class='project'>
            <router-link to='/works/streetsmarts/tolls' class='project-box' style="background: url('/img/StreetSmartsProject2Image.png')"></router-link>
            <div>Tolls Page Redesign</div>
          </div>

          <div class='project'>
            <router-link to='/works/streetsmarts/messaging' class='project-box' style="background: url('/img/StreetSmartsProject3Image.png')"></router-link>
            <div>Automated Messaging</div>
          </div>
        </div>
        <div class="col-md-4 col-xs-10 col-xs-offset-1 col-md-offset-0" style="text-align:left; padding: 0px 0 20px;">
          I worked at StreetSmarts part time and was the only UX Designer on the team. I worked closely with the Founders who were also the Developers and Customer Support individuals for the platform. My primary focus while working with StreetSmarts was to help improve the foundation of the platform by conducting user research on current features and redesigning them to be more user friendly. I also ensured that new features being worked on also followed the user friendly path.
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
