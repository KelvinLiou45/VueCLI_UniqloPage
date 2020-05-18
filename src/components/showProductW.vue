<template>
  <article class="showProductPage">
    <div class="showProduct">
      <div class="showProduct_inner">
        <!--showProduct_inner_cover-->
        <showProductInnerCover
          inf_titleEN="Laddieswear"
          inf_titleTC="女仕服裝"
          inf_content="神采奕奕的生活､從穿搭開始｡"
          inf_imgType="women"
        />
        <!--proList-->
        <proList/>
        <!--showProduct_inner_squares-->
        {{productList}}
        <showProductInnerSquares v-bind:productList="productList"/>
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
    /*return {
      productList: [
        {
          proID: "1",
          img: require("../assets/images/product/women/外套/01-1.jpg"),
          proType: "women",
          proName: "BLOCKTECH防風雨 連帽外套",
          proPrice: "2490",
          salePrice: "1890",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "3",
          img: require("../assets/images/product/women/外套/02-1.jpg"),
          proType: "women",
          proName: "可攜式抗UV 連帽外套",
          proPrice: "790",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "new"
        },
        {
          proID: "4",
          img: require("../assets/images/product/women/外套/03-1.jpg"),
          proType: "women",
          proName: "AIRism抗UV 網眼連帽外套 (長袖)",
          proPrice: "790",
          salePrice: "590",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "5",
          img: require("../assets/images/product/women/外套/04-1.jpg"),
          proType: "women",
          proName: "MARIMEKKO 可攜式連帽外套",
          proPrice: "1290",
          salePrice: "990",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "new"
        },
        {
          proID: "6",
          img: require("../assets/images/product/women/外套/05-1.jpg"),
          proType: "women",
          proName: "MINNIE AMBUSH 連帽外套",
          proPrice: "790",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "7",
          img: require("../assets/images/product/women/外套/06-1.jpg"),
          proType: "women",
          proName: "MINNIE AMBUSH 連帽外套2",
          proPrice: "790",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "8",
          img: require("../assets/images/product/women/外套/07-1.jpg"),
          proType: "women",
          proName: "牛仔寬版外套",
          proPrice: "990",
          salePrice: "590",
          proSale: "onSale",
          proSaleTime: "07/01",
          proNew: "none"
        },
        {
          proID: "9",
          img: require("../assets/images/product/women/外套/08-1.jpg"),
          proType: "women",
          proName: "工作外套",
          proPrice: "990",
          salePrice: "590",
          proSale: "none",
          proSaleTime: "07/01",
          proNew: "new"
        }
      ]
    };*/
    return {
      productList: ""
    };
  },
  created() {
    this.getProuduct();
  },
  methods: {
    getProuduct() {
      const axios = require("axios").default;
      axios
        .get("http://localhost:3000/getProduct", {
          params: {
            type: this.$route.params.type
          }
        })
        .then(function(response) {
          // handle success
          // console.log(response.data);
          alert('hello');
          this.productList = response.data;
          console.log(this.productList);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
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
