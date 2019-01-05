<template>
  <section id="content">
    <div class="single-product-area">
      <div class="zigzag-bottom"/>
      <div class="container site-index">
        <div v-for="(item, key) in sites" :key="key" class="panel panel-default">
          <div class="panel-heading">
            <i class="fa fa-globe text-md"/> {{ key }}
          </div>

          <div class="panel-body row">
            <div v-for="site in item" :key="site.title" class="col-md-2 site">
              <a :href="site.url" :title="site.description" data-content=" $item->description " target="_blank" rel="nofollow">
                <img :alt="site.title" :title="site.title" :src="site.icon" class="favicon"> {{ site.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSites } from '@/api/site'

export default {
  layout: 'default',
  async asyncData({ query }) {
    const sites = await getSites().then(res => {
      return res
    })
    return { sites }
  }
}
</script>

<style scoped>
  .favicon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .site {
    margin-bottom: 20px;
  }
  .site-index {
    font-size: 15px;
  }
</style>
