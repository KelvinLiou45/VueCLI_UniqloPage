<template>
  <article class="productDetailPage">
    <div class="productDetail">
      <div></div>
    </div>

    <!-- {{this.$route.query.proID}}
    <br>
    <img :src="proImg" alt="">
    <br>
    {{proDepiction}}
    <br>
    {{proPoint}} -->
  </article>
</template>

<script>
export default {
  name: "showProduct",
  props: {
    msg: String
  },
  data() {
    return {
      proImg:"",
      proDepiction: "",
      proPoint: ""
    };
  },
  created() {
    this.getProduct();
    this.getProductDepiction();
  },
  methods: {
    getProduct: function() {
      const axios = require("axios").default;
      axios
        .get("http://localhost:3000/getProduct_Id", {
          params: {
            proID: this.$route.query.proID
          }
        })
        .then((response) => {
          // handle success
          console.log(response.data[0]);
          this.$data.proImg = response.data[0].img;
        });
    },
    getProductDepiction: function() {
      const axios = require("axios").default;
      axios
        .get("http://localhost:3000/getProductDepiction", {
          params: {
            proID: this.$route.query.proID
          }
        })
        .then((response) => {
          // handle success
          console.log(response.data[0]);
          this.$data.proDepiction = response.data[0].depiction;
          this.$data.proPoint = response.data[0].point;
        });
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";
</style>
