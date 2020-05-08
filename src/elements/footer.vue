<template>
  <footer>
    <div class="footer_inner">
      <div class="footer_inner_point">
        <div class="footer_inner_point_title">OFFICIAL SNS</div>
        <div class="footer_inner_point_content">
          <router-link to="/">
            <img src="../assets/images/facebook.png" alt />
          </router-link>
          <router-link to="/">
            <img src="../assets/images/instagram.png" alt />
          </router-link>
          <router-link to="/">
            <img src="../assets/images/line.png" alt />
          </router-link>
        </div>
      </div>
      <div class="footer_inner_point">
        <div class="footer_inner_point_title">迅銷集團相關企業</div>
        <div class="footer_inner_point_content">
          <img src="../assets/images/guLogo.jpg" alt />
        </div>
      </div>
      <div class="footer_inner_point">
        <div class="footer_inner_point_title">
          其他資訊
        </div>
        <div class="footer_inner_point_content">
          <p>店鋪搜尋<span>></span></p>
          <p>客服中心<span>></span></p>
          <p>企業永續發展<span>></span></p>
          <p>企業情報<span>></span></p>
        </div>
      </div>
    </div>
    <div class="footer_copyright">COPYRIGHT (C)UNIOLO CO.LTD ALL RIGHTS RESERVED.</div>
  </footer>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

footer {
  @include displayFlex(column);
  width: 100vw;
  height: 150px;
  background: $mainColorWhite;
  font-family:$mainFontFamily;
  .footer_inner {
    @include displayFlex(row,flex-start,flex-start);
    max-width:1000px;
    width:100%;
    height:100%;
    .footer_inner_point {
      @include displayFlex(column,flex-start,flex-start);
      width:33%;
      height:100%;
      .footer_inner_point_title {
        margin:5px 0;
      }
      .footer_inner_point_content {
        img {
          width: 40px;
          margin-right:5px;
        }
      }
    }
    
  }
  .footer_copyright{
    @include displayFlex(row,flex-start,flex-start);
    max-width:1000px;
    width:100%;
  }
}
</style>
