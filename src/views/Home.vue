<template>
  <div class="home">
      <a href="#" class="classify"></a>
      <div class="search">
        <form action>
          <input type="search" value="rem适配方案2很开心哦" />
        </form>
      </div>
      <a href="#" class="login">登录</a>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home {
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  height: 1.173333rem;
  background-color: #ffc001;
}

.classify {
  width: 0.586667rem;
  height: 0.933333rem;
  margin: 0.146667rem 0.333333rem 0.133333rem;
  background-image: url("~@/assets/img/classify.png");
  background-repeat: no-repeat;
  background-size: 0.586667rem 0.933333rem;
}

.search {
  flex: 1;
}

.search input {
  outline: none;
  border: 0;
  width: 100%;
  height: 0.88rem;
  font-size: 0.333333rem;
  background-color: #fff2cc;
  margin-top: 0.133333rem;
  border-radius: 0.44rem;
  color: #757575;
  padding-left: 0.733333rem;
}

.login {
  width: 1rem;
  height: 0.933333rem;
  margin: 0.133333rem;
  color: #fff;
  text-align: center;
  line-height: 0.933333rem;
  font-size: 0.333333rem;
}
</style>
