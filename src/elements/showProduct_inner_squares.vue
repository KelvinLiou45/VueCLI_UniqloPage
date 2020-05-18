<template>
  <div class="showProduct_inner_squares">
    {{product}}
    <div class="showProduct_inner_squares_square" v-for="(product,key) in product" v-bind:key="key">
      <router-link :to="{name:'productDetailPage',params: { proID: product.proID}}">
        <div class="square_new" v-show=" product.proNew == 'new' ">NEW</div>
        <div class="square_proImgBx">
          {{product.img}}
          <img v-bind:src="''+product.img" alt>
        </div>
        <div class="square_proContent">
          <div class="square_proContent_name">{{product.proName}}</div>
          <div v-if="product.proSale == 'onSale'">
            <div class="square_proContent_price">
              <div class="price_salePrice">NT$ {{product.salePrice}}</div>
              <div class="price_proPriceN">NT$ {{product.proPrice}}</div>
            </div>
            <div class="square_proContent_other">
              <span>截止至{{product.proSaleTime}}限定價格</span>
              <!-- <div>
              <a href>
                <i class="fa fa-shopping-cart"></i>
              </a>
              <a href>
                <i class="fa fa-heart"></i>
              </a>
              </div>-->
            </div>
          </div>
          <div v-if="product.proSale == 'none'">
            <div class="square_proContent_price">
              <div class="price_salePrice"></div>
              <div class="price_proPrice">NT${{product.proPrice}}</div>
            </div>
            <div class="square_proContent_other">
              <span></span>
              <!-- <div>
              <a href>
                <i class="fa fa-shopping-cart"></i>
              </a>
              <a href>
                <i class="fa fa-heart"></i>
              </a>
              </div>-->
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

let data ={
  product: ""
}
export default {
  props: ["productList"],
  data() {
    return data
  },
  beforeMount(){
    data.product= this.productList;
  },
  methods: {
    inProductPage: function(id) {
      alert(id);
    }
  }
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
    margin: 30px 5px;
    padding: 10px;
    cursor: pointer;
    a{
      text-decoration: none;
    }
    .square_new {
      position: absolute;
      top: -5px;
      left: -5px;
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
        @include displayFlex(row, space-between);
        margin: 8px 0;
        font-size: 14px;
        color: $logoRed;
        i {
          margin-left: 10px;
          margin-right: 10px;
          color: $mainColorGray;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
