<template>
  <!-- page-title -->
  <section class="page-title sec-pad centred" style="background-image: url(images/background/page-title.jpg);">
    <div class="container">
      <div class="content-box">
        <div class="title">{{ title }}</div>
        <ul class="bread-crumb">
          <li><nuxt-link to="/">首页</nuxt-link></li>
          <li>{{ category.length > 0 ? category : title }}</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- page-title end -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    }
  }
}
</script>
