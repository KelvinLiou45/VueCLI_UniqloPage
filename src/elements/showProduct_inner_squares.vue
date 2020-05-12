<template>
  <div class="showProduct_inner_squares">
    <div
      class="showProduct_inner_squares_square"
      v-for="(product,key) in product"
      v-bind:key="key"
    >
      <div class="square_new" v-show=" product.proNew == 'new' ">NEW</div>
      <div class="square_proImgBx">
        <img v-bind:src="product.img" alt>
      </div>
      <div class="square_proContent">
        <div class="square_proContent_name">{{product.proName}}</div>
        <div v-if="product.proSale == 'onSale'">
          <div class="square_proContent_price">
            <div class="price_salePrice">NT$ {{product.salePrice}}</div>
            <div class="price_proPriceN">NT$ {{product.proPrice}}</div>
          </div>
          <div class="square_proContent_other">截止至{{product.proSaleTime}}限定價格</div>
        </div>
        <div v-if="product.proSale == 'none'">
          <div class="square_proContent_price">
            <div class="price_salePrice"></div>
            <div class="price_proPrice">NT${{product.proPrice}}</div>
          </div>
          <div class="square_proContent_other"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productList"],
  data() {
    return {
        product:this.productList
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

.showProduct_inner_squares {
  @include displayFlex(row, flex-start, flex-start);
  margin: 0 auto;
  flex-wrap: wrap;
  .showProduct_inner_squares_square {
    position: relative;
    width: 300px;
    margin: 50px 15px;
    .square_new {
      position: absolute;
      top: -16px;
      left: -8px;
      padding: 8px;
      line-height: 20px;
      background: $logoRed;
      color: white;
      font-weight: 600;
    }
    .square_proImgBx {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .square_proContent {
      color: $mainColorBlack;
      .square_proContent_name {
        margin-top: 14px;
        margin-bottom: 24px;
        font-size: 18px;
        font-weight: 600;
      }
      .square_proContent_price {
        @include displayFlex(row, flex-start);
        .price_salePrice {
          font-size: 24px;
          color: $logoRed;
          font-weight: 600;
        }
        .price_proPrice {
          font-size: 24px;
          font-weight: 600;
        }
        .price_proPriceN {
          margin-left: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: line-through;
        }
      }
      .square_proContent_other {
        margin: 8px 0;
        font-size: 14px;
        color: $logoRed;
      }
    }
  }
}
</style>
