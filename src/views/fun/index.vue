<template>
    <div id="fun">
      <div class="container-fluid">
        <div class="row"  style='margin-top: 15px;'>
          <div class="col-md-12">
            <router-link to='/fun/animations' class='project'>
              <div class='project-box' style="background-image: url('/img/AnimationsIcon.svg')"></div>
              <div class='label'>Animations</div>
            </router-link>

            <router-link to='/fun/drawings' class='project'>
              <div class='project-box' style="background-image: url('/img/DrawingsIcon.svg')"></div>
              <div class='label'>Drawings</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import ScrollToNav from "@/mixins/ScrollToNav.vue"
    export default {
        name: "fun",
        mixins: [
            ScrollToNav
        ]
    }
</script>

<style lang="scss" scoped>
  #fun {
    .logo-icon {
      display: inline-block;
      max-width: 300px;
    }

    .project {
      display: inline-block;
      padding: 0;
      margin-right: 10px;
      border-radius: 10px;
      height: 133px;

      -webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);
      box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.4);

      .label {
        vertical-align: top;
        font-size: 27px;
        color: #611a52;
        font-weight: 600;
        width: 213px;
        display: inline-block;
        position: relative;
        top: 34%;
        padding-right: 14px;
      }
    }

    .project-box {
      display: inline-block;
      width: 150px;
      height: 141px;
      margin: 0 10px 0 0;
      padding: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background-repeat: no-repeat;
      position: relative;
      left: -4px;
      top: -2px;
      background-size: cover;
    }
  }
</style>
