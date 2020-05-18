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
          proID: "10",
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
          proID: "11",
          img: require("../assets/images/product/men/外套/02-1.jpg"),
          proType: "women",
          proName: "輕型BLOCKTECH防風雨 連帽大衣",
          proPrice: "2490",
          salePrice: "1990",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "new"
        },
        {
          proID: "12",
          img: require("../assets/images/product/men/外套/03-1.jpg"),
          proType: "women",
          proName: "DRY 彈性休閒連帽外套",
          proPrice: "1490",
          salePrice: "1190",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "13",
          img: require("../assets/images/product/men/外套/04-1.jpg"),
          proType: "women",
          proName: "MARIMEKKO 可攜式連帽外套",
          proPrice: "1490",
          salePrice: "990",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "new"
        },
        {
          proID: "14",
          img: require("../assets/images/product/men/外套/05-1.jpg"),
          proType: "women",
          proName: "雙面連帽外套",
          proPrice: "1490",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "16",
          img: require("../assets/images/product/men/外套/06-1.jpg"),
          proType: "women",
          proName: "休閒圓領上衣 (五分袖)",
          proPrice: "590",
          salePrice: "390",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "17",
          img: require("../assets/images/product/men/外套/07-1.jpg"),
          proType: "women",
          proName: "Dry-EX 抗UV印花連帽外套 (長袖)",
          proPrice: "990",
          salePrice: "590",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "18",
          img: require("../assets/images/product/men/外套/08-1.jpg"),
          proType: "women",
          proName: "FORTNITE 休閒連帽上衣 (長袖)",
          proPrice: "290",
          salePrice: "190",
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
  }
}
</style>
