<template>
  <div class="carousel_inner_page_content_pro">
    <p class="pro_type">{{pro_type}}</p>
    <p class="pro_name">{{pro_name}}</p>
    <p class="pro_price">{{pro_price}}</p>
    <!-- <p class="pro_type">WOMEN</p>
        <p class="pro_name">鵝黃色輕薄上衣 (5分袖)</p>
    <p class="pro_price">NT$1,500</p>-->
  </div>
</template>

<script>
export default {
  props: ["pro_type", "pro_name", "pro_price"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

.carousel_inner_page_content_pro {
  margin: 5px 0;
  z-index: 1;
  cursor: pointer;
  .pro_type {
    border: 2px solid $mainColorBlack;
    padding: 8px;
    font-weight: 600;
    margin: 8px 0;
  }
  .pro_name {
    font-size: 18px;
  }
  .pro_price {
    font-size: 30px;
    color: $logoRed;
    font-weight: 600;
    margin: 8px 0;
  }
}
</style>
