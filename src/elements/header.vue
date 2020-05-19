<template>
  <header>
    <div class="header_inner">
      <div class="header_inner_logo">
        <router-link to="/" exact-active-class="_active"><img src="../assets/images/logo.gif" alt="logo"></router-link>
      </div>
      <div class="header_inner_nav">
        <nav>
          <ul>
            <li>
              <router-link :to="{name:'showProductW',query: { type: 'women'}}" exact-active-class="_active">women</router-link>
            </li>
            <li>
              <router-link :to="{name:'showProductM',query: { type: 'men'}}" exact-active-class="_active">men</router-link>
            </li>
            <li>
              <router-link to="/readyNotYet" exact-active-class="_active">kids</router-link>
            </li>
            <li>
              <router-link to="/readyNotYet" exact-active-class="_active">baby</router-link>
            </li>
            <li>
              <router-link to="/company">company</router-link>
            </li>
            <li>
              <router-link to="/search">店鋪搜尋</router-link>
            </li>
            <li>
              <router-link to="/FAQ">FAQ</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header_inner_user">
        <ul>
          <li id="registerAndLogin">
            <router-link to="/">
              <i class="fa fa-user"></i>
              <span><router-link to="/loginAndRegister" exact-active-class="_active">登入及註冊</router-link></span>
            </router-link>
          </li>
          <li id="cart">
            <router-link to="/">
              <i class="fa fa-shopping-cart"></i>
              <span>購物車</span>
            </router-link>
          </li>
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
  font-family: $mainFontFamily;
  .header_inner {
    @include displayFlex(row, space-between);
    max-width: 1000px;
    width: 100%;
    height: 100%;
    .header_inner_logo {
      @include displayFlex(row, flex-start);
      width: 5%;
      height: 100%;
      border-radius: 0 0 5px 5px;
      // background: $logoRed;
    }
    .header_inner_nav {
      @include displayFlex();
      width: 75%;
      height: 100%;
      // background:yellow;
      nav {
        @include displayFlex();
        width: 100%;
        height: 100%;
        ul {
          @include displayFlex();
          width: 100%;
          height: 100%;
          li {
            @include displayFlex();
            padding: 5px;
            padding: 0 25px;
            height: 35px;
            text-transform: uppercase;
            box-sizing: border-box;
            border-left: 1px dotted black;
            &:nth-child(1) {
              border-left: none;
            }
            &:nth-child(5) {
              border-left: none;
              background: $mainColorWhite;
            }
            &:nth-child(6) {
              border-left: none;
              background: $mainColorGray;
              color: white;
            }
            &:nth-child(7) {
              border-left: 1px dotted white;
              background: $mainColorGray;
              color: white;
            }
            &:hover {
              cursor: pointer;
              a {
                color: $logoRed;
              }
            }
            ._active {
                color: $logoRed;
              }
            a {
              font-size: 14px;
              color: $mainColorBlack;
              font-weight: 600;
              text-decoration: none;
            }
          }
        }
      }
    }
    .header_inner_user {
      @include displayFlex(row, flex-end);
      width: 20%;
      height: 100%;
      font-size: 14px;
      ul {
        @include displayFlex();
        li {
          padding: 0 10px;
          cursor: pointer;
          a {
            color: $mainColorBlack;
            text-decoration: none;
            i {
              font-size: 16px;
            }
            span {
              padding-left: 8px;
              font-weight: 600;
            }
          }
        }
      }
      // background:blue;
    }
  }
}
</style>
