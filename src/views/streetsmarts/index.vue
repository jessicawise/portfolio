<template>
  <div id="fidelity">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <router-link class='logo-icon' to='/works/streetsmarts'><img class="border-radius" src="/img/StreetSmartsLogo.svg" width="100%"/></router-link>
        </div>
      </div>
      <div class="row"  style='margin-top: 15px;'>
        <div class="col-md-6 col-md-offset-2">
          <div class='project'>
            <router-link to='/works/streetsmarts/fleet-tracker' class='project-box' style="background: url('/img/StreetSmartsProject1Image.png')"></router-link>
            <span>Fleet Tracker</span>
          </div>

          <div class='project'>
            <router-link to='/works/streetsmarts/tolls' class='project-box' style="background: url('/img/StreetSmartsProject2Image.png')"></router-link>
            <span>Tolls Page Redesign</span>
          </div>

          <div class='project'>
            <router-link to='/works/streetsmarts/messaging' class='project-box' style="background: url('/img/StreetSmartsProject3Image.png')"></router-link>
            <span>Automated Messaging</span>
          </div>
        </div>
        <div class="col-md-3" style="text-align:left; padding: 10px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
