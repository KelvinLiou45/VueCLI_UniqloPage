<template>
  <div id="app">
    <headerEle></headerEle>
    <router-view></router-view>
    <footerEle></footerEle>
  </div>
</template>

<script>
import headerEle from "./elements/header";
import footerEle from "./elements/footer";

// axios import
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "App",
  components: {
    headerEle,
    footerEle
  }
};
</script>

<style>
</style>
