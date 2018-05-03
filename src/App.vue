<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div id="no-padding" class="col-md-12">
          <div class="parallax">
            <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
      

       <div class="container-fluid">
        <div class="row">
          <div id="no-padding" class="col-md-12">
            <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link>
            </div>
          </div>
        </div>
      </div>

  
    <router-view/>

    <div class="container-fluid">
        <div class="row">
          <div id="no-padding" class="col-md-12">
            Footer
          </div>
        </div>
      </div>
  </div>
</template>



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
