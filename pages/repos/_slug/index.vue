<template>
  <section id="content">
    <div class="container">
      <ReposBreadcrumbs :title="repos.title" />

      <div class="row" style="margin: 50px 0 50px 0">
        <div class="col-md-3 col-sm-4 hidden-xs">
          <img :src="repos.cover ? repos.cover : '/img/300x300.png'" class="cover" alt=" $repos->title " title=" $repos->title " width="250">
        </div>
        <div class="col-md-9 col-sm-8">
          <div class="repo-title">
            <h1 style="font-size: 36px; margin-bottom: 20px;">
              {{ repos.title }} <peity :type="'line'" :data="repos.trends" title="Trends"/>
              <template v-for="(badge, index) in badges">
                <a v-if="badge.url.length > 0" :key="`badge-${index}`" :href="badge.url" :title="badge.name" rel="nofollow" target="_blank" style="text-decoration: none">
                  <img :src="`//devhub.io/img/badges/${badge.name}.png`" alt=" $badge->name " width="20" height="20">
                </a>
                <img v-else :key="`badge-${index}`" :src="`//devhub.io/img/badges/${badge.name}.png`" :alt="badge.name" :title="badge.name" width="20" height="20">
              </template>
            </h1>
            <p> {{ repos.description }} </p>
          </div>
          <div class="menu" style="margin-bottom: 10px;">
            <a v-if="repos.homepage" :href="repos.homepage" :title="repos.homepage" target="_blank" rel="nofollow"><i class="fa fa-home fa-2x"/> Homepage </a> &nbsp;&nbsp;
            <a v-if="repos.github" :href="repos.github" target="_blank" rel="nofollow"><i class="fa fa-github fa-2x"/> Github </a> &nbsp;&nbsp;
            <a v-if="repos.have_questions" :href="`/repos/${repos.slug}/questions`" target="_blank"><i class="fa fa-stack-overflow fa-2x"/> Questions </a> &nbsp;&nbsp;
            <a v-if="false" target="_blank" href="/" rel="nofollow"><i class="fa fa-comments-o fa-2x"/> Gitter </a> &nbsp;&nbsp;
            <nuxt-link :to="`/developer/${repos.owner}`" ><i class="fa fa-user fa-2x"/> Developer</nuxt-link> &nbsp;&nbsp;
            <a v-if="repos.document_url" :href="repos.document_url" rel="nofollow" target="_blank"><i class="fa fa-book fa-2x"/> Documentation</a> &nbsp;&nbsp;
            <nuxt-link v-if="false" :to="`repos/${repos.slug}/news`" target="_blank"><i class="fa fa-newspaper-o fa-2x"/> News </nuxt-link> &nbsp;&nbsp;
          </div>
          <div class="params">
            <div style="margin-bottom: 10px;">
              <a :aria-label="`Star ${repos.owner} / ${repos.repo} on GitHub`" :data-count-api="`/repos/${repos.owner}/${repos.repo}#stargazers_count`" :data-count-href="`/${repos.owner}/${repos.repo}/stargazers`" :href="`https://github.com/${repos.owner}/${repos.repo}`" data-count-aria-label="# stargazers on GitHub" data-icon="octicon-star" class="github-button">Star</a>
              <a :aria-label="`Fork ${repos.owner} / ${repos.repo} on GitHub`" :data-count-api="`/repos/${repos.owner}/${repos.repo}#forks_count`" :data-count-href="`/${repos.owner}/${repos.repo}/network`" :href="`https://github.com/${repos.owner}/${repos.repo}/fork`" data-count-aria-label="# forks on GitHub" data-icon="octicon-repo-forked" class="github-button">Fork</a>
              <a :aria-label="`Watch ${repos.owner} / ${repos.repo} on GitHub`" :data-count-api="`/repos/${repos.owner}/${repos.repo}#subscribers_count`" :data-count-href="`/${repos.owner}/${repos.repo}/watchers`" :href="`https://github.com/${repos.owner}/${repos.repo}`" data-count-aria-label="# watchers on GitHub" data-icon="octicon-eye" class="github-button">Watch</a>
              <a :aria-label="`Issue ${repos.owner} / ${repos.repo} on GitHub`" :data-count-api="`/repos/${repos.owner}/${repos.repo}#open_issues_count`" :href="`https://github.com/${repos.owner}/${repos.repo}/issues`" data-count-aria-label="# issues on GitHub" data-icon="octicon-issue-opened" class="github-button">Issue</a>
              <a :aria-label="`Download ${repos.owner} / ${repos.repo} on GitHub`" :href="`https://github.com/${repos.owner}/${repos.repo}/archive/master.zip`" data-icon="octicon-cloud-download" class="github-button">Download</a>
            </div>
            <div style="margin-bottom: 10px;" title="Last updated">
              <i class="fa fa-clock-o"/> <span> {{ repos.repos_updated_at | fromNow }} </span>
              <a v-if="false" href=" https://spdx.org/licenses/{$repos->license->spdx_id}.html" target="_blank" rel="nofollow" title=" $repos->license->name " style="color: #333; text-decoration: none;"><i class="fa fa-copyright"/> <span> $repos->license->spdx_id </span></a>
            </div>
            <div v-if="topics.length > 0" style="margin-bottom: 10px;">
              <a v-for="(item, index) in topics" :key="index" :href="`/topic/${item.topic}`" class="label label-primary" style="display: inline-block;">{{ item.topic }}</a>
            </div>
            <div>
              <button type="button" class="btn btn-info" data-toggle="modal" data-target="#reviewModal" style="font-size: 12px; padding: 5px;">
                I use {{ repos.owner }} / {{ repos.repo }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <article class="col-md-8 markdown-body">
          <script id="_carbonads_js" async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=devhubio"/>
          <div v-html="markdown" />
        </article>

        <div class="col-md-4" style="margin-bottom: 50px">
          <template v-if="news.length > 0">
            <h3>Related Repositories</h3>
            @foreach($related_repos as $item)
            <div class="row" style="margin-bottom: 10px">
              <div class="col-md-4">
                <a href=" l_url('repos', [$item->slug]) "><img src=" $item->cover ? $item->cover . '&s=100' : cdn_asset('img/200x200.png') " alt=" $item->title " title=" $item->title " class="lazyload" width="100"></a>
              </div>
              <div class="col-md-8">
                <h4><a href=" l_url('repos', [$item->slug]) "> $item->title </a></h4>
                <p> mb_substr($item->description, 0, 80)  ...</p>
              </div>
            </div>
            @endforeach
          </template>

          <br>

          <template v-if="contributors.length > 0">
            <h3>Top Contributors</h3>
            <div>
              <nuxt-link v-for="(item, index) in contributors" :key="index" :to="`/developer/${item.login}`">
                <img :alt="item.login" :title="item.login" :src="item.avatar_url + '&s=60'" class="pull-left" width="60" height="60" style="width:60px;height:60px;" >
              </nuxt-link>
            </div>
            <div style="clear: both"/>
          </template>

          <template v-if="Object.keys(dependencies).length > 0">
            <h3>Dependencies</h3>
            <div>
              <table v-for="(one, k) in dependencies" :key="`on-${k}`" class="table table-striped">
                <thead>
                  <tr>
                    <th/>
                    <th>package</th>
                    <th>version</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(two, kk) in one">
                    <template v-for="(three, index) in two">
                      <tr :key="`${kk}-${index}`">
                        <td v-if="index === 0" :rowspan="two.length"> {{ kk }} </td>
                        <td> {{ three.package }} </td>
                        <td> {{ three.version }} </td>
                      </tr>
                    </template>
                  </template>
                </tbody>
              </table>
            </div>
          </template>

          <br>

          <template v-if="tags.length > 0">
            <h3>Releases</h3>
            <div>
              <div v-for="(item, index) in tags" :key="index">-&nbsp;&nbsp;  {{ item.name }}
                <a :href="item.zipball_url" rel="nofollow"><i class="fa fa-file-archive-o"> zip</i></a>
                <a :href="item.tarball_url" rel="nofollow"><i class="fa fa-file-archive-o"> tar</i></a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div id="reviewModal" aria-hidden="true" aria-labelledby="reviewModalLabel" role="dialog" tabindex="-1" class="modal fade in">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
            <h4 id="mcqReviewModalLabel" class="modal-title">Would you tell us more about {{ repos.owner }} / {{ repos.repo }} ?</h4>
          </div>
          <form id="review-form" style="padding:10px;" action="/repos/review" method="POST" role="form" class="form-horizontal bv-form" novalidate="novalidate">
            <input type="hidden" value=" $repos->id " name="repos_id">
            <div style="padding-top:0;" class="modal-body">
              <div class="form-group mcq_input">
                <h4>Is the project reliable?</h4>
                <div class="input-group">
                  <div class="radio">
                    <label><input type="radio" value="1" name="reliable">Yes, realiable</label>&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" value="0" name="reliable">Somewhat realiable</label>&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" value="-1" name="reliable">Not realiable</label>
                  </div>
                </div>
              </div>

              <div class="form-group mcq_input has-feedback">
                <h4>Would you recommend this project?</h4>
                <div class="input-group">
                  <div class="radio">
                    <label><input type="radio" class="definitely_recommend" value="1" name="recommendation">Yes, definitely</label>&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" class="no_recommend" value="0" name="recommendation">Not sure</label>&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" class="no_recommend" value="-1" name="recommendation">Nope</label>
                  </div>
                </div>
              </div>

              <div class="form-group mcq_input">
                <h4>Is the documentation helpful?</h4>
                <div class="input-group">
                  <div class="radio">
                    <label><input type="radio" value="1" name="documentation">Yes, helpful</label>&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" value="0" name="documentation">Somewhat helpful</label>&nbsp;&nbsp;&nbsp;
                    <label><input type="radio" value="-1" name="documentation">Not that helpful</label>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button data-dismiss="modal" class="btn btn-default" type="button">Close</button>
                <button class="btn btn-primary" type="submit" name="button">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import hljs from 'highlight.js'
import Peity from 'vue-peity'
import moment from 'moment'
import { getRepos } from '@/api/repos'
import Paginate from '@/components/general/paginate'
import ReposBreadcrumbs from '@/components/general/breadcrumbs/repos'

export default {
  layout: 'default',
  components: { Paginate, ReposBreadcrumbs, Peity },
  head: {
    script: [
      { src: 'https://buttons.github.io/buttons.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css' }
    ]
  },
  async asyncData({ params }) {
    const slug = params.slug
    const result = await getRepos(slug).then(res => {
      return res
    })
    const md = new MarkdownIt({
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>'
          } catch (__) {
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
          }
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
      }
    })
    result.markdown = md.use(emoji).render(result.repos.readme)
    return result
  },
  filters: {
    fromNow: (val) => {
      return moment(val).fromNow()
    }
  }
}
</script>

<style scoped>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
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
