<template>
  <div class="home">
    <h2>Works</h2>

    <div class="container-fluid">
    <div class="row">
      <router-link to='/works/streetsmarts'>
        <div class="col-md-3 col-md-offset-3"><img class="border-radius" src="/img/StreetSmarts.png" /></div>
      </router-link>
      <router-link to='/works/venture'>
        <div class="col-md-3"><img class="border-radius" src="/img/ventureng.png" /></div>
      </router-link>
    </div>
    <div class="row">
      <router-link to='/works/reemploy'>
        <div class="col-md-3 col-md-offset-4" id="reemploy"><img class="border-radius" src="/img/reemploy.png" /></div>
      </router-link>
    </div>
  </div>

  <h2>For Fun</h2>
  <div class="container-fluid">
    <div class="row">
      <router-link to='/fun/animations'>
        <div class="col-md-3 col-md-offset-3"><img class="border-radius" src="/img/animations.png" /></div>
      </router-link>
      <router-link to='/fun/drawings'>
        <div class="col-md-3"><img class="border-radius" src="/img/drawings.png" /></div>
      </router-link>
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
