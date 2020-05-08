<template>
  <div id="app">
    <headerEle></headerEle>
    <router-view></router-view>
    <footerEle></footerEle>
  </div>
</template>

<script>

import headerEle from './elements/header'
import footerEle from './elements/footer'

export default {
  name: 'App',
  components: {
    headerEle,footerEle
  }
}
</script>

<style>

</style>
