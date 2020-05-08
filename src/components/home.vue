<template>
  <article>
  <carousel/>
    <!-- 商品分類清單 -->
    <div class="proList">
      <div class="proList_inner">
        <div class="proList_inner_type">
          <div class="proList_inner_type_title">新作商品</div>
          <div class="proList_inner_type_list">
            <p class="list_li">WOMEN</p>
            <p class="list_li">MEN</p>
            <p class="list_li">KIDS</p>
            <p class="list_li">BABY</p>
          </div>
        </div>
        <div class="proList_inner_type">
          <div class="proList_inner_type_title">本週推薦</div>
          <div class="proList_inner_type_list">
            <p class="list_li">WOMEN</p>
            <p class="list_li">MEN</p>
            <p class="list_li">KIDS</p>
            <p class="list_li">BABY</p>
          </div>
        </div>
        <div class="proList_inner_type">
          <div class="proList_inner_type_title">期間限定價格</div>
          <div class="proList_inner_type_list">
            <p class="list_li">WOMEN</p>
            <p class="list_li">MEN</p>
            <p class="list_li">KIDS</p>
            <p class="list_li">BABY</p>
          </div>
        </div>
        <div class="proList_inner_type">
          <div class="proList_inner_type_title">降價商品</div>
          <div class="proList_inner_type_list">
            <p class="list_li">WOMEN</p>
            <p class="list_li">MEN</p>
            <p class="list_li">KIDS</p>
            <p class="list_li">BABY</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import carousel from '../elements/carousel'

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
  components:{
    carousel
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
  margin:50px 0;
  .proList_inner {
    @include displayFlex(row,space-around);
    max-width: 1000px;
    width: 100%;
    .proList_inner_type{
      padding:10px;
      border-left:1px solid $mainColorBlack;
      border-right:1px solid $mainColorBlack;
      .proList_inner_type_title{
        @include displayFlex();
        font-size:18px;
        margin-bottom:20px;
        font-weight:600;
      }
      .proList_inner_type_list{
        @include displayFlex(row, space-between);
        .list_li{
          margin:0 5px;
        }
      }
    }
  }
}
</style>
