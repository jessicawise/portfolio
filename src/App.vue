<template>
  <div id="app" class="full-height">
    <div class="container-fluid full-height">
      <div class="row full-height">
        <div id="no-padding" class="col-md-12 full-height">
          <div class="parallax full-height">
            <span v-if='showDown' :class="downClass" class="glyphicon glyphicon-chevron-down animated infinite bounce" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>

       <div class="container-fluid">
        <div class="row">
          <div id="no-padding" class="col-md-12">
            <div id="nav">
              <router-link to="/">Works</router-link> |
              <router-link to="/fun">For Fun</router-link> |
              <router-link to="/about">About</router-link>
            </div>
          </div>
        </div>
      </div>

    <router-view/>

    <div id="footer" class="container-fluid">
        <div class="row">
          <div id="no-padding" class="col-md-12">
            © Jessica Wise 2018
          </div>
        </div>
      </div>
  </div>
</template>

<script>

const MIN_SCROLL_HEIGHT = 100;

export default {
  name: 'app',
  created() {
    let lastScrollPosition = 0;
    let firstLoad = false;
    window.onscroll = () => {
      if (window.scrollY > MIN_SCROLL_HEIGHT && !firstLoad) {
        this.showDown = false;
      }

      let newScrollPosition = window.scrollY;
      if (newScrollPosition > lastScrollPosition){
        this.downClass = 'disappear';
      }
      lastScrollPosition = newScrollPosition;

      firstLoad = true;
    }

  },
  data() {
    return {
      downClass: null,
      showDown: true
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #611b52;
    }
  }
}
</style>
