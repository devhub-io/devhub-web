<template>
  <div>
    <!-- page-title -->
    <!--<page-title :title="error.statusCode" :category="error.statusCode"/>-->
    <!-- page-title end -->

    <!-- error-section -->
    <section v-if="error.statusCode === 404" class="error-section centred">
      <div class="container">
        <div class="error-title">404</div>
        <div class="error-text">哎呀，找不到这个页面！</div>
        <div class="text">找不到你需要的东西？ 花一点时间在下面搜索或从我们的 <nuxt-link to="/">首页</nuxt-link> 开始。</div>
      </div>
    </section>
    <section v-else-if="error.statusCode === 500" class="error-section centred">
      <div class="container">
        <div class="error-title">500</div>
        <div class="error-text">哎呀，服务器异常，稍后重试！</div>
        <div class="text">找不到你需要的东西？ 花一点时间在下面搜索或从我们的 <nuxt-link to="/">首页</nuxt-link> 开始。</div>
      </div>
    </section>
    <!-- error-section end -->
  </div>
</template>

<script>
// import PageTitle from '@/components/general/page-title'
/* eslint-disable */
export default {
  props: ['error'],
  layout: 'default',
  // components: { PageTitle }
}
</script>
