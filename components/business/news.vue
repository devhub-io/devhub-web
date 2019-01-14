<template>
  <section id="content">
    <div class="container">
      <NewsBreadcrumbs :date="date" />

      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="repo-title">
            <h1 style="margin-bottom: 0px;">What's hot on Github on {{ date }} </h1>
          </div>
        </div>
      </div>

      <div class="row">
        <div v-for="(item, index) in news.rows" :key="index" class="col-md-12">
          <div>
            <div class="caption">
              <a :href="`https://news.ycombinator.com/item?id=${item.item_id}`" rel="nofollow" target="_blank" style="text-decoration: none;">
                <h2 style="font-size: 26px; margin-bottom: 15px;"><span class="badge badge-primary"> {{ item.score }} </span>  {{ item.title }} </h2>
              </a>
              <nuxt-link v-if="item.repos" :to="`/repos/${item.repos ? item.repos.slug : ''}`" style="font-size: 16px;text-decoration: none;" target="_blank">
                <i class="fa fa-github"/>
                {{ item.repos ? item.repos.owner : '' }} / {{ item.repos ? item.repos.repo : '' }}&nbsp;&nbsp;

                <span title="Stargazers count">
                  <i class="glyphicon glyphicon-star"/>  {{ item.repos ? item.repos.stargazers_count : '' }}
                </span>
              </nuxt-link>
              <p> {{ item.repos ? item.repos.description : '' }} </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row date-pagination">
        <div v-if="news.prev" class="col-md-2">
          <nuxt-link :to="`/news/daily/${news.prev.post_date}`" class="badge badge-info">&laquo; {{ news.prev.post_date }} </nuxt-link>
        </div>
        <div v-if="news.next" class="col-md-2 offset-md-8">
          <nuxt-link :to="`/news/daily/${news.next.post_date}`" class="badge badge-info"> {{ news.next.post_date }} &raquo;</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsBreadcrumbs from '@/components/general/breadcrumbs/news'

export default {
  components: { NewsBreadcrumbs },
  props: {
    news: {
      type: Object,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
  .date-pagination .badge {
    font-size: 1.1rem;
  }
  .badge-primary {
    width: 65px;
  }
</style>

