<template>
  <div id="app">
    <side-menu></side-menu>
  </div>
</template>

<script>

  import SideMenu from "./SideMenu";

  export default {
    name: 'app',
    components: {
      'side-menu' : SideMenu,
    },
    data () {
      return {
      }
    }
}
</script>

<style>

</style>
