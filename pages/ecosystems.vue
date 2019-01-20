<template>
  <section id="content">
    <div class="single-product-area">
      <h1 class="text-center">Ecosystems</h1>
      <div class="container">
        <div class="row">
          <div v-for="(item, index) in developers.rows" :key="index" class="col-md-12">
            <div class="card card-body">
              <div class="row">
                <div class="col-md-6">
                  <h2 class="ecosystem-title">
                    <nuxt-link to="/ecosystem/node">
                      {{ item.login }} <span class="sub-title">ecosystem</span>
                    </nuxt-link>
                  </h2>
                </div>
                <div class="col-md-6 ecosystem-links">
                  <span>
                    <a href="#"><i class="fas fa-link mini"/> Homepage</a>
                  </span>
                  <span>
                    <a href="#"><i class="fas fa-link mini"/> Github</a>
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <div class="wiki">
                    Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
                    JavaScript is used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML
                    and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript to write command
                    line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is
                    sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web application
                    development around a single programming language, rather than different languages for server side and client side scripts.
                  </div>
                  <a href="#">Wikipedia</a>
                </div>
                <div class="col-md-7">
                  <div class="row">
                    <div v-for="i in 15" :key="i" class="col-md-3">
                      <nuxt-link to="/ecosystem/node/docs">
                        <div class="card card-body collection">
                          Tools 1
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row pagination">
          <div class="col-md-12">
            <Paginate :page="developers.page" :total="developers.count" :last-page="developers.last_page" :base-url="$route.path" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getDevelopers } from '@/api/developer'
import Paginate from '@/components/general/paginate'

export default {
  layout: 'default',
  components: { Paginate },
  watchQuery: ['page', 'type'],
  async asyncData({ query }) {
    const type = query.type || 'User'
    const page = query.page || 1
    const developers = await getDevelopers({ type, page, limit: 12 }).then(res => {
      return res
    })
    return { developers, type }
  },
  head: {
    title: 'Ecosystems'
  }
}
</script>

<style scoped>
  .ecosystem-title {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  .ecosystem-title a {
    color: #212529 !important;
  }
  .ecosystem-links {
    font-size: 1rem;
    margin-bottom: 15px;
    text-align: right;
    line-height: 52px;
    margin-top: 0;
  }
  .ecosystem-links span {
    margin-left: 15px;
  }
  .sub-title {
    color: #7f828b;
    font-size: 1.8rem;
  }
  .wiki {
    max-height: 150px;
    overflow-y: hidden;
  }
  .collection {
    text-align: center;
  }
  .mini {
    font-size: 10px;
  }

  @media only screen and (max-width: 768px) {
    .ecosystem-homepage {
      font-size: 1rem;
      margin-bottom: 15px;
      text-align: left;
    }
  }
</style>
