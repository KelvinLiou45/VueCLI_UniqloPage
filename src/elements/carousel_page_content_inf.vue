<template>
  <div class="carousel_inner_page_content_inf">
    <div class="inf_title">{{inf_title}}</div>
    <p class="inf_content">{{inf_content}}</p>
    <div class="inf_slogan">{{inf_slogan}}</div>
    <!-- <div class="inf_title">本月特價商品</div>
        <p class="inf_content">輕如鴻毛的舒適上衣，適合秋季的居家服系列。</p>
    <div class="inf_slogan">秋季時尚､從今年秋天開始｡</div>-->
  </div>
</template>

<script>
// export default {
//   props: {
//     props: String
//   },
//   data() {
//     return {
//       infTitle:"dsf",
//       infContent:"dsf",
//       infSlogan:"sdf"
//     };
//   },
//   methods: {}
// };

export default {
  props: ["inf_title", "inf_content", "inf_slogan"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

.carousel_inner_page_content_inf {
  margin-bottom: 30px;
  .inf_title {
    background: $logoRed;
    color: $white;
    font-weight: 600;
    padding: 8px;
    margin-bottom: 12px;
  }
  .inf_content {
    font-size: 18px;
    margin-bottom: 12px;
  }
  .inf_slogan {
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
