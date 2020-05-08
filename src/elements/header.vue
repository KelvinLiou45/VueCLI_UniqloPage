<template>
  <header>
    <div class="header_inner">
      <div class="header_inner_logo">
        <img src="../assets/images/logo.gif" alt="logo" />
      </div>
      <div class="header_inner_nav">
        <nav>
          <ul>
            <li>
                <router-link to="/">women</router-link>
            </li>
            <li><router-link to="/">men</router-link></li>
            <li><router-link to="/">kids</router-link></li>
            <li><router-link to="/">baby</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="header_inner_user">
        <ul>
          <li id="register">註冊</li>
          <li id="login">登入</li>
          <li id="cart">購物車</li>
        </ul>
      </div>
    </div>
  </header>
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

header {
  @include displayFlex();
  width: 100vw;
  height: 80px;
  background: white;
  font-family:$mainFontFamily;
  .header_inner {
    @include displayFlex();
    max-width: 1000px;
    width: 100%;
    height: 100%;
    .header_inner_logo {
      @include displayFlex();
      width: 20%;
      height: 100%;
      border-radius: 0 0 5px 5px;
      background: $logoRed;
    }
    .header_inner_nav {
      @include displayFlex();
      width: 60%;
      height: 100%;
      // background:yellow;
      nav {
        width:100%;
        ul {
          @include displayFlex(row,center);
          li {
            padding: 5px;
            margin: 20px;
            text-transform: uppercase;
            a{
                text-decoration: none;
            }
          }
        }
      }
    }
    .header_inner_user {
        @include displayFlex(row,flex-end);
      width: 20%;
      height: 100%;
      ul {
        @include displayFlex();
        li{
            margin:5px;
        }
      }
      // background:blue;
    }
  }
}
</style>
