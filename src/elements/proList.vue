<template>
  <!-- 商品分類清單 -->
  <div class="proList">
    <div class="proList_inner">
      <div class="proList_inner_type">
        <div class="proList_inner_type_title">新作商品</div>
      </div>
      <div class="proList_inner_type">
        <div class="proList_inner_type_title">本週推薦</div>
      </div>
      <div class="proList_inner_type">
        <div class="proList_inner_type_title">期間限定價格</div>
      </div>
      <div class="proList_inner_type">
        <div class="proList_inner_type_title">降價商品</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "proList",
  props: {
    msg: String
  },
  components: {
    
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

.proList {
  @include displayFlex();
  width: 100vw;
  font-family: $mainFontFamily;
  color: $mainColorBlack;
  margin: 50px 0;
  .proList_inner {
    @include displayFlex(row, center);
    max-width: 1000px;
    width: 100%;
    .proList_inner_type {
      width: 25%;
      padding: 30px 20px;
      border-left: 1px solid $mainColorGray;
      border-top: 1px solid $mainColorGray;
      border-bottom: 1px solid $mainColorGray;
      &:nth-child(4) {
        border-right: 1px solid $mainColorGray;
      }
      &:hover {
        background: $mainColorGray;
        cursor: pointer;
      }
      .proList_inner_type_title {
        @include displayFlex();
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>
