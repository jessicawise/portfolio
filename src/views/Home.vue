<template>
  <div class="home">
    <h2><strong>Works</strong></h2>

    <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-md-offset-3 col-xs-6">
        <router-link to='/works/streetsmarts'><img class="border-radius" src="/img/StreetSmarts.png" width="100%"/></router-link>
      </div>
      <div class="col-md-3 col-xs-6">
        <router-link to='/works/venture'><img class="border-radius" src="/img/ventureng.png" width="100%"/></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-md-offset-4 col-xs-6 col-xs-offset-2" id="reemploy"><router-link to='/works/reemploy'><img class="border-radius" src="/img/reemploy.png" width="100%"/></router-link>
      </div>
    </div>
  </div>

  <h2><strong>For Fun</strong></h2>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-md-offset-3 col-xs-6"><router-link to='/fun/animations'><img class="border-radius" src="/img/animations.png" width="100%"/></router-link>
      </div>
        <div class="col-md-3 col-xs-6">
          <router-link to='/fun/drawings'><img class="border-radius" src="/img/drawings.png" width="100%"/></router-link>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>
