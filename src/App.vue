<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* 为了覆盖normalize的margin: 0样式  */
/*添加html提高权重*/
html body {
  min-width: 320px;
  max-width: 750px;
  /* flexible 默认给我们划分了 10 等份 */
  width: 10rem;
  margin: 0 auto;
  background-color: #999;
  /* IOS禁止微信调整字体大小 */
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
}
/* 这个插件默认的html文字大小 cssroot  16px */
/* 如果我们的屏幕超过了 750px  那么我们就按照 750设计稿来走 不会让我们页面超过750px */
@media screen and (min-width: 750px) {
  html {
    font-size: 75px !important;
  }
}
</style>
