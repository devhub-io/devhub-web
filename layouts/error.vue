<template>
  <section id="content">
    <div v-if="error.statusCode === 404" class="single-product-area">
      <div class="zigzag-bottom"/>
      <div class="container">
        <div class="row">
          <div class="col-md-12" style="text-align: center;min-height: 300px;">
            <h1>OOPS! - Could not Find it</h1>
            <a href="/" class="btn btn-info">Back</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="error.statusCode === 500" class="single-product-area">
      <div class="zigzag-bottom"/>
      <div class="container">
        <div class="row">
          <div class="col-md-12" style="text-align: center;min-height: 300px;">
            <h1>OOPS! - Server Error</h1>
            <a href="/" class="btn btn-info">Back</a>
          </div>
        </div>
      </div>
    </div>
  </section>
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
