<template>
  <section id="content">
    <div class="container">
      <ReposBreadcrumbs :title="repos.title" />

      <div class="row" style="margin: 50px 0 50px 0">
        <div class="col-md-3 col-sm-4 hidden-xs">
          <img :src="repos.cover ? repos.cover : '/img/300x300.png'" :alt="repos.title" :title="repos.title" class="cover" width="250">
        </div>
        <div class="col-md-9 col-sm-8">
          <div class="repo-title">
            <h1 style="margin-bottom: 20px;">
              {{ repos.title }} <peity :type="'line'" :data="repos.trends" title="Trends"/>
              <template v-for="(badge, index) in badges">
                <a v-if="badge.url.length > 0" :key="`badge-${index}`" :href="badge.url" :title="badge.name" rel="nofollow" target="_blank" style="text-decoration: none">
                  <img :src="`//devhub.io/img/badges/${badge.name}.png`" :alt="badge.name " width="20" height="20">
                </a>
                <img v-else :key="`badge-${index}`" :src="`//devhub.io/img/badges/${badge.name}.png`" :alt="badge.name" :title="badge.name" width="20" height="20">
              </template>
            </h1>
            <p> {{ repos.description }} </p>
          </div>
          <div class="menu" style="margin-bottom: 10px;">
            <a v-if="repos.homepage" :href="repos.homepage | link" :title="repos.homepage" target="_blank" rel="nofollow"><i class="fas fa-home"/> Homepage </a> &nbsp;&nbsp;
            <a v-if="repos.github" :href="repos.github | link" target="_blank" rel="nofollow"><i class="fab fa-github"/> Github </a> &nbsp;&nbsp;
            <a v-if="repos.have_questions" :href="`/repos/${repos.slug}/questions`" target="_blank"><i class="fab fa-stack-overflow"/> Questions </a> &nbsp;&nbsp;
            <a v-if="false" target="_blank" href="/" rel="nofollow"><i class="fas fa-comments-o"/> Gitter </a> &nbsp;&nbsp;
            <nuxt-link :to="`/developer/${repos.owner}`" ><i class="fas fa-user"/> Developer</nuxt-link> &nbsp;&nbsp;
            <a v-if="repos.document_url" :href="repos.document_url | link" rel="nofollow" target="_blank"><i class="fas fa-book"/> Documentation</a> &nbsp;&nbsp;
            <nuxt-link v-if="false" :to="`repos/${repos.slug}/news`" target="_blank"><i class="fas fa-newspaper-o"/> News </nuxt-link> &nbsp;&nbsp;
          </div>
          <div class="params">
            <div style="margin-bottom: 10px;">
              <gh-btns-watch :slug="`${repos.owner}/${repos.repo}`" show-count/>
              <gh-btns-star :slug="`${repos.owner}/${repos.repo}`" show-count/>
              <gh-btns-fork :slug="`${repos.owner}/${repos.repo}`" show-count/>
              <div style="clear: both"/>
            </div>
            <div style="margin-bottom: 10px;" title="Last updated">
              <i class="fas fa-clock-o"/> <span> {{ repos.repos_updated_at | fromNow }} </span>
              <a v-if="false" href=" https://spdx.org/licenses/{$repos->license->spdx_id}.html" target="_blank" rel="nofollow" title=" $repos->license->name " style="color: #333; text-decoration: none;"><i class="fas fa-copyright"/> <span> $repos->license->spdx_id </span></a>
            </div>
            <div v-if="topics.length > 0" style="margin-bottom: 10px;">
              <a v-for="(item, index) in topics" :key="index" :href="`/topic/${item.topic}`" class="badge badge-primary" style="display: inline-block;">{{ item.topic }}</a>
            </div>
            <div>
              <button type="button" class="btn btn-info btn-repos" @click="changeStar">
                <i class="fas fa-star"/> {{ isStar ? 'Unstar' : 'Star' }}
              </button>
              <button v-b-modal.reviewModal type="button" class="btn btn-info btn-repos">
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
          <template v-if="related.length > 0">
            <h4>Related Repositories</h4>
            <div v-for="item in related" :key="`related-${item.id}`" class="row" style="margin-bottom: 10px">
              <div class="col-md-4">
                <nuxt-link :to="`/repos/${item.slug}`"><img :src="item.cover.length > 0 ? item.cover : '/img/200x200.png'" :alt="item.title" :title="item.title" class="lazyload" width="100"></nuxt-link>
              </div>
              <div class="col-md-8">
                <h4><nuxt-link :to="`/repos/${item.slug}`"> {{ item.title }} </nuxt-link></h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </template>

          <br>

          <template v-if="contributors.length > 0">
            <h3>Top Contributors</h3>
            <div>
              <nuxt-link v-for="(item, index) in contributors" :key="index" :to="`/developer/${item.login}`">
                <img :alt="item.login" :title="item.login" :src="item.avatar_url + '&s=60'" class="float-left" width="60" height="60" style="width:60px;height:60px;" >
              </nuxt-link>
            </div>
            <div style="clear: both"/>
          </template>

          <template v-if="Object.keys(dependencies).length > 0">
            <h4>Dependencies</h4>
            <div class="dependencies">
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
            <h4>Releases</h4>
            <div class="tags">
              <div v-for="(item, index) in tags" :key="index">-&nbsp;&nbsp;  {{ item.name }}
                <a :href="item.zipball_url" rel="nofollow"><i class="fas fa-file-archive-o"> zip</i></a>
                <a :href="item.tarball_url" rel="nofollow"><i class="fas fa-file-archive-o"> tar</i></a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <b-modal id="reviewModal" ref="reviewModalRef" :title="`Would you tell us more about ${repos.owner} / ${repos.repo } ?`" ok-title="Submit" @ok="submit">
      <form id="review-form" style="padding:10px;" method="get" role="form" class="form-horizontal bv-form" novalidate="novalidate">
        <div class="form-group mcq_input">
          <h5>Is the project reliable?</h5>
          <div class="input-group">
            <div class="radio">
              <label><input v-model="form.reliable" :value="1" type="radio" name="reliable">Yes, realiable</label>&nbsp;&nbsp;&nbsp;
              <label><input v-model="form.reliable" :value="0" type="radio" name="reliable">Somewhat realiable</label>&nbsp;&nbsp;&nbsp;
              <label><input v-model="form.reliable" :value="-1" type="radio" name="reliable">Not realiable</label>
            </div>
          </div>
        </div>

        <div class="form-group mcq_input has-feedback">
          <h5>Would you recommend this project?</h5>
          <div class="input-group">
            <div class="radio">
              <label><input v-model="form.recommendation" :value="1" type="radio" class="definitely_recommend" name="recommendation">Yes, definitely</label>&nbsp;&nbsp;&nbsp;
              <label><input v-model="form.recommendation" :value="0" type="radio" class="no_recommend" name="recommendation">Not sure</label>&nbsp;&nbsp;&nbsp;
              <label><input v-model="form.recommendation" :value="-1" type="radio" class="no_recommend" name="recommendation">Nope</label>
            </div>
          </div>
        </div>

        <div class="form-group mcq_input">
          <h5>Is the documentation helpful?</h5>
          <div class="input-group">
            <div class="radio">
              <label><input v-model="form.documentation" :value="1" type="radio" name="documentation">Yes, helpful</label>&nbsp;&nbsp;&nbsp;
              <label><input v-model="form.documentation" :value="0" type="radio" name="documentation">Somewhat helpful</label>&nbsp;&nbsp;&nbsp;
              <label><input v-model="form.documentation" :value="-1" type="radio" name="documentation">Not that helpful</label>
            </div>
          </div>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import hljs from 'highlight.js'
import Peity from 'vue-peity'
import Paginate from '@/components/general/paginate'
import ReposBreadcrumbs from '@/components/general/breadcrumbs/repos'

export default {
  layout: 'default',
  components: { Paginate, ReposBreadcrumbs, Peity },
  async asyncData({ params, store }) {
    const slug = params.slug
    const result = await store.dispatch('getRepos', slug)
    const md = new MarkdownIt({
      html: true,
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
    result.slug = slug
    result.isStar = result.star !== null
    return result
  },
  head() {
    return {
      title: `${this.repos.owner}/${this.repos.repo} :${this.repos.description} by @${this.repos.owner} - Repository`,
      meta: [
        { hid: 'description', name: 'description', content: this.repos.description }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css' }
      ]
    }
  },
  data() {
    return {
      form: {
        reliable: '',
        recommendation: '',
        documentation: ''
      }
    }
  },
  methods: {
    submit(evt) {
      evt.preventDefault()
      if (this.form.documentation === '' || this.form.reliable === '' || this.form.recommendation === '') {
        this.$Alert.info({ content: 'Please select an option' })
        return false
      }
      this.$store.dispatch('reviewRepos', { slug: this.slug, data: this.form }).then(() => {
        this.$Alert.info({ content: 'Thanks so much' })
        this.$refs.reviewModalRef.hide()
        this.form = {
          reliable: '',
          recommendation: '',
          documentation: ''
        }
      })
    },
    changeStar() {
      this.$store.dispatch('star', { type: 'repos', foreign_id: this.repos.id, star: !this.isStar })
        .then(() => {
          this.isStar = !this.isStar
        })
        .catch(e => {
          if (e.response && e.response.status === 401) {
            this.$store.dispatch('showLoginModal')
          }
        })
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
  .carbon-img img {
    display: block;
  }
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
  .dependencies, .tags {
    font-size: .9rem;
  }
  .btn-repos {
    font-size: 12px;
    padding: 5px 15px;
    color: #fff
  }
</style>
