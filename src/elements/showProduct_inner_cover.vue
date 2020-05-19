<template>
  <div class="showProduct_inner_cover">
    <div class="redTriangle"></div>
    <div class="showProduct_inner_cover_inf">
      <div class="inf_titleEN">{{inf_titleEN}}</div>
      <div class="inf_titleTC">{{inf_titleTC}}</div>
      <div class="inf_content">{{inf_content}}</div>
      <!-- <div class="inf_titleEN">Pantsuits</div>
      <div class="inf_titleTC">女仕服裝</div>
      <div class="inf_content">神采奕奕的生活､從穿搭開始｡</div>-->
    </div>
    <div class="showProduct_inner_cover_imgBx">
      <img v-bind:src="`./img/product/${inf_imgType}/cover.jpg`" alt>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inf_titleEN", "inf_titleTC", "inf_content", "inf_imgType"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

.showProduct_inner_cover {
  @include displayFlex();
  position: relative;
  width: 100%;
  border: 1px solid $mainColorWhite;
  .redTriangle {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background: $logoRed;
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }
  .showProduct_inner_cover_inf {
    @include displayFlex(column, center, center);
    width: calc(100% - 465px);
    box-sizing: border-box;
    .inf_titleEN {
      color: $logoRed;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .inf_titleTC {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .inf_content {
    }
  }
  .showProduct_inner_cover_imgBx {
    @include displayFlex();
    width: 465px;
    height: 465px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
</style>
