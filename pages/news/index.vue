<template>
  <section id="content">
    <div class="container">
      @include('widgets.breadcrumbs.news', ['date' => $current_date])

      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="repo-title">
            <h1 style="font-size: 36px; margin-bottom: 0px;">What's hot on Github on  $current_date </h1>
          </div>
        </div>
      </div>

      <br>

      <div class="row">
        <div v-for="(item, index) in news.rows" :key="index" class="col-md-12">
          <div>
            <div class="caption">
              <a href=" link_url('https://news.ycombinator.com/item?id='.$item->item_id) " rel="nofollow" target="_blank" style="text-decoration: none;">
                <h2 style="font-size: 26px; margin-bottom: 15px;"><span class="label label-default"> $item->score </span>  $item->title </h2>
              </a>
              @if($item->repos)
              <a style="font-size: 16px;text-decoration: none;" href=" l_url('repos', [$item->repos->slug]) " target="_blank">
                <i class="fa fa-github"/>
                $item->repos->owner / $item->repos->repo   &nbsp;&nbsp;

                <span title="Stargazers count">
                  <i class="glyphicon glyphicon-star"/>  $item->repos->stargazers_count  &nbsp;&nbsp;
                </span>
              </a>
              <p> $item->repos->description </p>
              @endif
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="font-size: 23px">
        <div v-if="news.prev" class="col-md-2">
          <nuxt-link :to="`/news/daily/${news.prev.post_date}`" class="label label-info"> {{ news.prev.post_date }} </nuxt-link>
        </div>
        <div v-if="news.next" class="col-md-2 col-md-offset-8">
          <nuxt-link :to="`/news/daily/${news.next.post_date}`" class="label label-info"> {{ news.next.post_date }}  ></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getNews } from '@/api/repos'

export default {
  layout: 'default',
  async asyncData({ query }) {
    const news = await getNews().then(res => {
      return res
    })
    console.log(news)
    return { news }
  }
}
</script>
