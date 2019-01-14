<template>
  <section id="content">
    <div class="container">
      <DeveloperBreadcrumbs :name="developer.name" :login="developer.login" />

      <div class="row" style="margin: 50px 0 50px 0">
        <div class="col-md-3 col-sm-4">
          <img :src="developer.avatar_url ? developer.avatar_url : '/img/300x300.png'" class="cover" alt=" $developer->login " title=" $developer->login " width="250">
        </div>
        <div class="col-md-9 col-sm-8">
          <div class="repo-title">
            <h1 style="font-size: 36px; margin-bottom: 20px;">
              <i v-if="developer.type === 'Organization'" class="fas fa-users" title="Organization"/> <i v-else class="fas fa-user" title="User"/> {{ developer.name }}  <span>( {{ developer.login }} )</span>
            </h1>
          </div>
          <div class="menu" style="margin-bottom: 10px;">
            <a v-if="developer.blog" :href="developer.blog" target="_blank" rel="nofollow" title=" $developer->blog "><i class="fas fa-home fa-2x"/> Homepage </a> &nbsp;&nbsp;
            <a :href="developer.html_url" target="_blank" class="gitbtn" rel="nofollow"><i class="fab fa-github fa-2x"/> Github </a> &nbsp;&nbsp;
            <a v-if="developer.public_gists > 0" :href="`https://gist.github.com/${developer.login}`" target="_blank" class="gitbtn" rel="nofollow"><i class="fab fa-github-square fa-2x"/> Github Gist </a> &nbsp;&nbsp;
          </div>
          <div class="params">
            <div v-if="developer.type === 'User'" style="margin-bottom: 10px;">
              <gh-btns-follow :user="developer.login" show-count/>
              <div style="clear: both"/>
            </div>
            <div title="Last updated">
              <i class="fas fa-clock-o"/> <span> {{ developer.site_updated_at | fromNow }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <article class="col-md-12">
          <script id="_carbonads_js" async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=devhubio" />

          <h2>About {{ developer.name ? developer.name : developer.login }} </h2>
          <p>
            Summing up all of {{ developer.name ? developer.name : developer.login }} 's repositories they have {{ owner_repos.length }}  own repositories @if($contribute_count > 0) and  $contribute_count  contribute repositories @endif.
          </p>
          <p v-if="developer.type === 'User'">
            {{ developer.name ? developer.name : developer.login }}  follows {{ developer.following }}  other users and is followed by {{ developer.followers }} users.
          </p>
          <p>
            Data for {{ developer.name ? developer.name : developer.login }}  was last updated {{ developer.site_updated_at }} .
          </p>
          <p v-if="developer_languages.length > 0">
            {{ developer.name ? developer.name : developer.login }}  use @foreach($developer_languages as $item)  $item->language , @endforeach...
          </p>
        </article>
      </div>
      <div class="row">
        <div class="col-md-12">
          <template v-if="owner_repos.length > 0">
            <h2>Repository</h2>
            <div class="row">
              <div v-for="(item, index) in owner_repos" :key="index" class="col-md-3">
                <div class="card card-body" style="height: 150px;">
                  <div class="caption">
                    <nuxt-link :to="`/repos/${item.slug}`"><h4> {{ item.title }} </h4></nuxt-link>
                    <div style="margin-bottom: 10px">
                      <span title="star">
                        <i class="fas fa-star"/>  {{ item.stargazers_count }}
                      </span>
                      <peity :type="'line'" :data="item.trends" title="Trends"/>
                    </div>
                    <p> {{ item.description }} </p>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template v-if="contribute_repos.length > 0">
            <h2>Contribute</h2>
            <div class="row">
              <div v-for="(item, index) in contribute_repos" :key="index" class="col-md-3">
                <div class="card card-body" style="height: 362px;">
                  <nuxt-link :to="`/repos/${item.repos.slug}`">
                    <img :src="item.repos.cover ? item.repos.cover : '/img/200x200.png'" :title="item.repos.title" :alt="item.repos.title" class="lazyload" width="200">
                  </nuxt-link>
                  <div class="caption">
                    <nuxt-link :to="`/repos/${item.repos.slug}`"><h4> {{ item.repos.title }} </h4></nuxt-link>
                    <div style="margin-bottom: 10px;">
                      <span title="star">
                        <i class="fas fa-star"/>  {{ item.repos.stargazers_count }}
                      </span>
                      <span class="line"> {{ item.repos.trend }} </span>
                    </div>
                    <p> {{ item.repos.description }} </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getDeveloper } from '@/api/developer'
import Paginate from '@/components/general/paginate'
import DeveloperBreadcrumbs from '@/components/general/breadcrumbs/developer'
import Peity from 'vue-peity'
import moment from 'moment'

export default {
  layout: 'default',
  components: { Paginate, DeveloperBreadcrumbs, Peity },
  watchQuery: ['page', 'type'],
  async asyncData({ params }) {
    const slug = params.slug
    return await getDeveloper(slug).then(res => {
      return res
    })
  },
  head() {
    return {
      title: `${this.developer.login} (${this.developer.name}) - Developer`
    }
  },
  filters: {
    fromNow: (val) => {
      return moment(val).fromNow()
    }
  }
}
</script>

<style scoped>
  .breadcrumb {
    margin-top: 25px;
  }

  #carbonads {
    display: block;
    overflow: hidden;
    margin: 0 auto;
    padding: 1em;
    max-width: 500px;
    border: 1px dashed #e6e6e6;
    font-size: 16px;
    line-height: 1.5;;
  }

  #carbonads a:hover {
    color: inherit;
    text-decoration: none;
  }

  #carbonads span {
    position: relative;
    display: block;
    overflow: hidden;
  }

  .carbon-img {
    float: left;
    margin-right: 1em;
  }

  .carbon-img img { display: block; }

  .carbon-text {
    display: block;
    float: left;
    max-width: calc(100% - 130px - 1em);
    text-align: left;
  }

  .carbon-poweredby {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    text-transform: uppercase;
    font-size: 10px;
  }
</style>
