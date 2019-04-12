<template>
  <div class="home">

    <div class="banner">
      <router-link to='/works/fidelity'><img class="border-radius" src="/img/FidelityIcon.svg" width="100%"/></router-link>
    </div>

    <div class="banner">
      <router-link to='/works/streetsmarts'><img class="border-radius" src="/img/StreetSmartsIcon.svg" width="100%"/></router-link>
    </div>

     <div class="banner">
      <router-link to='/works/venture'><img class="border-radius" src="/img/VentureIcon.svg" width="100%"/></router-link>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style lang="scss">
  .home {
    text-align: center;
    padding: 30px;

    .banner {
      max-width: 400px;
      display: inline-block;
    }
  }
</style>

