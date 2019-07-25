<template>
  <div id="app" style="background-color:#eee;position: fixed;width: 100%;height: 100%;">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('getOrders')
  }
}
</script>

<style>
  @import "./assets/css/style.css";
</style>
