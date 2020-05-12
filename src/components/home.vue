<template>
  <article class="homePage">
    <!--幻燈片components-->
    <carousel/>
    <!-- 商品分類清單 -->
    <proList />
  </article>
</template>

<script>
import carousel from "../elements/carousel";
import proList from "../elements/proList";

export default {
  name: "home",
  props: {
    msg: String
  },
  data() {
    return {
      // carousel_index_length: 3,
      // carousel_index: 0
    };
  },
  components: {
    carousel,
    proList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";


</style>
