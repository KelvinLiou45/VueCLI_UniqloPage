<template>
  <!--活動幻燈片-->
  <div class="carousel">
    <div class="carousel_inner">
      <!--carousel主區-->
      <div class="carousel_inner_page" v-if="carousel_index == 0">
        <!--page照片-->
        <div class="carousel_inner_page_imgBx">
          <img src="../assets/images/carousel1.jpg" alt>
        </div>
        <!--page內容-->
        <div class="carousel_inner_page_content">
          <carouselPageContentInf
            inf_title="本月特價商品"
            inf_content="輕如鴻毛的舒適上衣，適合秋季的居家服系列。"
            inf_slogan="秋季時尚､從今年秋天開始｡"
          />
          <carouselPageContentPro pro_type="WOMEN" pro_name="鵝黃色輕薄上衣 (5分袖)" pro_price="NT$1,500"/>
          <carouselPageContentPro pro_type="MEN" pro_name="藏青EX棉質上衣 (5分袖)" pro_price="NT$1,750"/>
        </div>
      </div>
      <div class="carousel_inner_page" v-else-if="carousel_index == 1">
        <!--page照片-->
        <div class="carousel_inner_page_imgBx">
          <img src="../assets/images/carousel2.jpg" alt>
        </div>
        <!--page內容-->
        <div class="carousel_inner_page_content">
          <carouselPageContentInf
            inf_title="本月暢銷服務"
            inf_content="日本社交達人推薦的套裝組合，享受假日的清新時光系列。"
            inf_slogan="由達人來幫您搭配穿著｡"
          />
          <carouselPageContentPro
            pro_type="WOMEN"
            pro_name="黑川百合子-休閒款 (2019秋)"
            pro_price="NT$4,500"
          />
          <carouselPageContentPro pro_type="MEN" pro_name="小島裕人-休閒款 (2020春)" pro_price="NT$3,750"/>
        </div>
      </div>
      <div class="carousel_inner_page" v-else-if="carousel_index == 2">
        <!--page照片-->
        <div class="carousel_inner_page_imgBx">
          <img src="../assets/images/carousel3.jpg" alt>
        </div>
        <!--page內容-->
        <div class="carousel_inner_page_content">
          <carouselPageContentInf
            inf_title="NEW"
            inf_content="Uniqlo與各大通路合作，讓您用習慣的方式來輕鬆購物。"
            inf_slogan="請搜尋 UNIQLO-REAL!!"
          />
        </div>
      </div>
      <!--carousel索引左右鍵-->
      <div class="carousel_inner_indexLR">
        <input type="button" value="<" v-on:click="changeCarouselIndex('--')">
        <input type="button" value=">" v-on:click="changeCarouselIndex('++')">
      </div>
      <!--carousel索引-->
      <div class="carousel_inner_index">
        <ul>
          <li v-bind:class="{active:(carousel_index ==0)}" v-on:click="changeCarouselIndex(0)"></li>
          <li v-bind:class="{active:(carousel_index ==1)}" v-on:click="changeCarouselIndex(1)"></li>
          <li v-bind:class="{active:(carousel_index ==2)}" v-on:click="changeCarouselIndex(2)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import carouselPageContentInf from "./carousel_page_content_inf";
import carouselPageContentPro from "./carousel_page_content_pro";

export default {
  name: "carousel",
  props: {
    msg: String
  },
  components: {
    carouselPageContentInf,
    carouselPageContentPro
  },
  data() {
    return {
      carousel: [],
      carousel_index_length: 3,
      carousel_index: 0
    };
  },
  methods: {
    changeCarouselIndex: function(e) {
      if (e == "++") {
        this.carousel_index++;
        if (this.carousel_index > this.carousel_index_length - 1) {
          this.carousel_index = 0;
        }
      } else if (e == "--") {
        this.carousel_index--;
        if (this.carousel_index < 0) {
          this.carousel_index = this.carousel_index_length - 1;
        }
      } else {
        this.carousel_index = e;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

.carousel {
  @include displayFlex();
  width: 100vw;
  margin: 50px 0;
  font-family: $mainFontFamily;
  color: $mainColorBlack;
  .carousel_inner {
    @include displayFlex(column);
    position: relative;
    max-width: 1000px;
    width: 100%;
    .carousel_inner_page {
      @include displayFlex();
      flex-wrap: wrap;
      width: 100%;
      border: 1px solid $mainColorWhite;
      .carousel_inner_page_imgBx {
        @include displayFlex();
        width: 62%;
        height: 465px;
        // background:blue;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .carousel_inner_page_content {
        @include displayFlex(column, flex-start, flex-start);
        width: 38%;
        height: 465px;
        padding: 17.5px;
        box-sizing: border-box;
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
      }
    }

    .carousel_inner_indexLR {
      @include displayFlex(row, space-between);
      position: absolute;
      width: 100%;
      input[type="button"] {
        width: 50px;
        height: 200px;
        font-size: 20px;
        color: $logoRed;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
    .carousel_inner_index {
      margin: 10px;
      ul {
        @include displayFlex();
        li {
          width: 13px;
          height: 13px;
          margin: 0 8px;
          background: $mainColorWhite;
          border-radius: 50%;
          &.active {
            background: $mainColorBlack;
          }
        }
      }
    }
  }
}
</style>
