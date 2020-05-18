<template>
  <article class="loginAndRegister">
    <div class="loginAndRegister_inner">
      <div class="login">
        <div class="title">
          <!-- <img src="../assets/images/logo.gif" alt> -->
          <span>登入</span>
        </div>
        <div class="detail">
          <div class="detail_username">
            <p>Username:</p>
            <input type="text" placeholder="請輸入帳號" name="username" v-model="usernameL">
          </div>
          <div class="detail_password">
            <p>Password:</p>
            <input type="password" placeholder="請輸入密碼" name="password" v-model="passwordL">
          </div>
          <div class="detail_submit">
            <input type="button" value="登入" v-on:click="login()">
          </div>
        </div>
      </div>
      <div class="register">
        <div class="title">
          <!-- <img src="../assets/images/logo.gif" alt> -->
          <span>註冊</span>
        </div>
        <div class="detail">
          <div class="detail_username">
            <p>Username:</p>
            <input type="text" placeholder="請輸入帳號" name="username" v-model="usernameR">
          </div>
          <div class="detail_password">
            <p>Password:</p>
            <input type="password" placeholder="請輸入密碼" name="password" v-model="passwordR">
          </div>
          <div class="detail_email">
            <p>Password:</p>
            <input type="text" placeholder="請輸入信箱" name="email" v-model="emailR">
          </div>
          <div class="detail_gender">
            <p>Gender:</p>
            <label for="men">男</label>
            <input type="radio" id="men" name="gender" value="men" v-model="genderR">
            <label for="women">女</label>
            <input type="radio" id="women" name="gender" value="women" v-model="genderR">
          </div>
          <div class="detail_submit">
            <input type="button" value="註冊" v-on:click="register()">
          </div>
        </div>
      </div>
    </div>
    {{usernameL}}
    {{passwordL}}
    {{usernameR}}
    {{passwordR}}
    {{emailR}}
    {{genderR}}
  </article>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
export default {
  name: "home",
  props: {
    msg: String
  },
  data() {
    return {
      usernameL: "",
      passwordL: "",
      usernameR: "",
      passwordR: "",
      emailR: "",
      genderR: ""
    };
  },
  methods: {
    login: function() {
      let result = verification(this.usernameL, this.passwordL, "a@a.com.tw");
      console.log(result);
    },
    register: function() {
      let result = verification(this.usernameR, this.passwordR, this.emailR);
      console.log(result);
      if(result == "OK"){
          registerUser({usernameR:this.usernameR,passwordR:this.passwordR,emailR:this.emailR});
      }
    }
  },
  components: {}
};

function verification(username, password, email) {
  let re = /^[A-Za-z0-9]+$/;
  let email_re = /^[A-Za-z0-9]+@[A-Za-z0-9.]+[.]+[A-Za-z0-9.]+$/;

  if (!re.test(username)) {
    return "帳號格式錯誤";
  } else if (username.length < 5) {
    return "帳號不能少於5個字";
  }

  if (!re.test(password)) {
    return "密碼格式錯誤";
  } else if (password.length < 5) {
    return "密碼不能少於5個字";
  }

  if (!email_re.test(email)) {
    return "信箱格式錯誤";
  }
  return "OK";
}

function registerUser(data) {
//   const axios = require("axios");
  axios.post("/http://localhost/app.js", {
      usernameR: data.usernameR,
      passwordR: data.passwordR,
      emailR: data.emailR,
      genderR: data.genderR
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/styles/reset.css";
@import "../assets/styles/mixin.scss";

.loginAndRegister {
  @include displayFlex();
  width: 100vw;
  margin: 50px 0;
  font-family: $mainFontFamily;
  color: $mainColorBlack;
  .loginAndRegister_inner {
    @include displayFlex(column);
    position: relative;
    max-width: 1000px;
    width: 100%;
    // background: yellow;
    .login {
      @include displayFlex(column);
      max-width: 400px;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid $mainColorGray;
      .title {
        @include displayFlex(row);
        width: 100%;
        // background: greenyellow;
        span {
          font-size: 24px;
          font-weight: 600;
        }
      }
      .detail {
        @include displayFlex(column);
        width: 100%;
        // background: blue;
        .detail_username {
        }
        .detail_submit {
          @include displayFlex();
          width: 100%;
          // background:red;
        }
      }
    }
  }
}
</style>