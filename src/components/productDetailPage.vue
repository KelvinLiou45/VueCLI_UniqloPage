<template>
  <article class="productDetailPage">
    {{this.$route.params.proID}}
    <br>
    {{proDepiction}}
    <br>
    {{proPoint}}
  </article>
</template>

<script>
let data = {
  proDepiction: "s",
  proPoint: ""
};

export default {
  name: "showProduct",
  props: {
    msg: String
  },
  data() {
    return data;
  },
  mounted() {
    //取得商品的Depiction
    const axios2 = require("axios").default;
    axios2
      .get("http://localhost:3000/getProductDepiction", {
        params: {
          proID: this.$route.params.proID
        }
      })
      .then(function(response) {
        // handle success
        console.log(response.data[0]);
        data.proDepiction = response.data[0].depiction;
        data.proPoint = response.data[0].point;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  },
  methods: {
    showID: function() {
      alert(this.$route.params.proID);
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
