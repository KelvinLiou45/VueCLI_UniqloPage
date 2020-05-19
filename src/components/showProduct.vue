<template>
  <article class="showProductPage">
    <div class="showProduct">
      <div class="showProduct_inner">
        <!--showProduct_inner_cover-->
        <showProductInnerCover
          inf_titleEN="Laddieswear"
          inf_titleTC="女仕服裝"
          inf_content="神采奕奕的生活､從穿搭開始｡"
          v-bind:inf_imgType="this.$route.query.type"
          v-if="this.$route.query.type == 'women'"
        />
        <showProductInnerCover
          inf_titleEN="Menswear"
          inf_titleTC="男仕服裝"
          inf_content="神采奕奕的生活､從穿搭開始｡"
          v-bind:inf_imgType="this.$route.query.type"
          v-if="this.$route.query.type == 'men'"
        />
        <!--proList-->
        <proList/>
        <!-- showProduct_inner_squares -->
        <!-- {{productList}} -->
        <showProductInnerSquares v-bind:productList="productList"/>
      </div>
    </div>
  </article>
</template>

<script>
import axios from "axios";
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
      productList: []
    };
  },
  created() {
    this.getData();
  },
  watch: {
    '$route' (to, from) {
      if (from.query.type !== to.query.type) { 
        this.getData();
      }   
    }
  },
  methods: {
    getData:function(){
      axios.get("http://127.0.0.1:3000/getProduct", {
        params: {
          type: this.$route.query.type
        }
      }).then((response) => {
        // handle success
        this.$data.productList = response.data;
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
