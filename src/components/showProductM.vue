<template>
  <article class="showProductPage">
    <div class="showProduct">
      <div class="showProduct_inner">
        <!--showProduct_inner_cover-->
        <showProductInnerCover
          inf_titleEN="Menswear"
          inf_titleTC="男仕服裝"
          inf_content="神采奕奕的生活､從穿搭開始｡"
          inf_imgType="men"
        />
        <!--proList-->
        <proList/>
        <!--showProduct_inner_squares-->
        <showProductInnerSquares v-bind:productList="productList" />
      </div>
    </div>
  </article>
</template>

<script>
import showProductInnerCover from "../elements/showProduct_inner_cover";
import proList from "../elements/proList";
import showProductInnerSquares from "../elements/showProduct_inner_squares";

export default {
  name: "showProduct",
  props: {
    msg: String
  },
  data() {
    return {
      productList: [
        {
          proID: "202005120810",
          img: require("../assets/images/product/men/外套/01-1.jpg"),
          proType: "women",
          proName: "BLOCKTECH防風雨 連帽外套",
          proPrice: "2490",
          salePrice: "1890",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "202005120932",
          img: require("../assets/images/product/men/外套/02-1.jpg"),
          proType: "women",
          proName: "可攜式抗UV 連帽外套",
          proPrice: "790",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "new"
        },
        {
          proID: "202005121549",
          img: require("../assets/images/product/men/外套/03-1.jpg"),
          proType: "women",
          proName: "AIRism抗UV 網眼連帽外套 (長袖)",
          proPrice: "790",
          salePrice: "590",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "202005121552",
          img: require("../assets/images/product/men/外套/04-1.jpg"),
          proType: "women",
          proName: "MARIMEKKO 可攜式連帽外套",
          proPrice: "1290",
          salePrice: "990",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "new"
        },
        {
          proID: "202005121522",
          img: require("../assets/images/product/men/外套/05-1.jpg"),
          proType: "women",
          proName: "MINNIE AMBUSH 連帽外套",
          proPrice: "790",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "202005121522",
          img: require("../assets/images/product/men/外套/06-1.jpg"),
          proType: "women",
          proName: "MINNIE AMBUSH 連帽外套2",
          proPrice: "790",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "202005121522",
          img: require("../assets/images/product/men/外套/07-1.jpg"),
          proType: "women",
          proName: "牛仔寬版外套",
          proPrice: "990",
          salePrice: "590",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "202005121522",
          img: require("../assets/images/product/men/外套/08-1.jpg"),
          proType: "women",
          proName: "工作外套",
          proPrice: "990",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "new"
        }
      ]
    };
  },
  components: {
    proList,
    showProductInnerCover,
    showProductInnerSquares
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

.showProduct {
  @include displayFlex();
  width: 100vw;
  margin: 50px 0;
  font-family: $mainFontFamily;
  color: $mainColorBlack;
  .showProduct_inner {
    @include displayFlex(column);
    position: relative;
    max-width: 1000px;
    width: 100%;
    .showProduct_inner_cover {
      @include displayFlex();
      width: 100%;
      border: 1px solid $mainColorWhite;
      .showProduct_inner_cover_inf {
        @include displayFlex(column, center, center);
        width: 50%;
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
        width: 50%;
        height: 465px;
        // background:blue;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
