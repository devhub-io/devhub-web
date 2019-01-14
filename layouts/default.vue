<template>
  <div>
    <header id="main-nav" :class="{ active: scrolled }">
      <div class="container">
        <a id="navigation" :class="{ open: navigation }" href="#" @click="openMenu"><i class="fas fa-bars"/></a>

        <div id="slide_out_menu" :class="{ scrolled: scrolled, open: navigation }">
          <a :href="void(0)" class="menu-close" @click="closeMenu"><i class="fas fa-times"/></a>
          <div class="logo" style="color: #ffffff">DevHub.io</div>
          <ul>
            <li><nuxt-link to="/developers">Developers</nuxt-link></li>
            <li><nuxt-link to="/topics">Topics</nuxt-link></li>
            <li><nuxt-link to="/news">News</nuxt-link></li>
            <li><a :href="void(0)" rel="nofollow" @click="login">My account</a></li>
            <li><nuxt-link to="/sites">Sites</nuxt-link></li>
            <li><nuxt-link to="search" class="btn btn-blue">Search...</nuxt-link></li>
          </ul>

          <div class="slide_out_menu_footer">
            <div class="more-info">
              <p>Developed by <nuxt-link to="/">Devhub</nuxt-link></p>
            </div>
            <ul class="socials">
              <li><a href="https://twitter.com/HubDevelop" target="_blank"><i class="fab fa-twitter"/></a></li>
              <li><a href="https://www.facebook.com/devhubdotio" target="_blank"><i class="fab fa-facebook"/></a></li>
              <li><a href="mailto:devhub.io@gmail.com"><i class="fas fa-envelope"/></a></li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <ul class="left">
              <li><a href="/developers">Developers</a></li>
              <li><a href="/topics">Topics</a></li>
              <li><nuxt-link to="/news">News</nuxt-link></li>
            </ul>
          </div>
          <div class="col-md-4 text-center">
            <nuxt-link to="/" class="logo">DevHub.io</nuxt-link>
          </div>
          <div class="col-md-4">
            <ul class="right">
              <li><a :href="void(0)" :class="{ help: $store.getters.token === null || $store.getters.token === '' }" rel="nofollow" @click="login">My account</a></li>
              <li><nuxt-link to="/sites">Sites</nuxt-link></li>
              <li><nuxt-link to="/search" class="btn btn-blue">Search...</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
    </header><!-- //Main Nav -->

    <nuxt/>

    <footer id="footer">
      <div class="container footer-container">
        <div class="row">
          <div class="col-lg-3">
            <nuxt-link to="/" style="color: #26272d; font-weight: 700; text-transform: uppercase;font-size: 12px;">DevHub.io</nuxt-link>
            <p>
              Recommended high-quality free and open source development tools, resources, reading.<br>
              Currently tracking
              <nuxt-link to="/list/newest">{{ $store.getters.count.repos || 0 }}</nuxt-link>open source projects,
              <nuxt-link to="/developers">{{ $store.getters.count.developers || 0 }}</nuxt-link>developers
            </p>
            <ul class="socials">
              <li><a href="https://twitter.com/HubDevelop" target="_blank"><i class="fab fa-twitter"/></a></li>
              <li><a href="https://www.facebook.com/devhubdotio" target="_blank"><i class="fab fa-facebook"/></a></li>
              <li><a href="mailto:devhub.io@gmail.com"><i class="fas fa-envelope"/></a></li>
            </ul>
          </div>
          <div class="col-lg-2 offset-md-4 col-md-4 col-6 footer-links">
            <ul>
              <li><p class="title">WEBSITE</p></li>
              <li><nuxt-link to="#">About</nuxt-link></li>
              <li><nuxt-link to="#">Contact Us</nuxt-link></li>
              <li><a href="//status.devhub.io/">Status</a></li>
              <li><a href="#">Api</a></li>
              <li><a href="feed">Feed</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-4 col-6 footer-links">
            <ul>
              <li><p class="title">GATEGORY</p></li>
              <li v-for="(item, index) in $store.getters.categories" :key="index"><nuxt-link :to="`/category/${item.slug}`">{{ item.title }}</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container copyright-container">
        <div class="row">
          <div class="col-lg-8 text-left">
            <div class="more-info">
              <p class="copyright-title">&#xA9; 2016 - 2019 DevHub.io. All Rights Reserved.</p>
              <p class="copyright-tips">Disclaimer: This project is not affiliated with the GitHub company in
              any way. GitHub&#xAE; and the Octocat&#xAE; logo are registered trademarks
              of GitHub, Inc., used with permission&#x2014;https://github.com/logos</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-6 text-right">
                <div class="made-by">Power by</div>
              </div>
              <div class="col-lg-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="18">
                  <lineargradient id="smooth" x2="0" y2="100%">
                    <stop offset="0" stop-color="#fff" stop-opacity=".7" />
                    <stop offset=".1" stop-color="#aaa" stop-opacity=".1" />
                    <stop offset=".9" stop-color="#000" stop-opacity=".3" />
                    <stop offset="1" stop-color="#000" stop-opacity=".5" />
                  </lineargradient>
                  <rect rx="4" width="91" height="18" fill="#555555" />
                  <rect rx="4" x="48" width="43" height="18" fill="#4c1" />
                  <rect x="48" width="4" height="18" fill="#4c1" />
                  <rect rx="4" width="91" height="18" fill="url(#smooth)" />
                  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
                    <text x="25" y="13" fill="#010101" fill-opacity=".3">Server</text>
                    <text x="25" y="12">Server</text>
                    <text x="68.5" y="13" fill="#010101" fill-opacity=".3">Nginx</text>
                    <text x="68.5" y="12">Nginx</text>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="18">
                  <lineargradient id="smooth" x2="0" y2="100%">
                    <stop offset="0" stop-color="#fff" stop-opacity=".7" />
                    <stop offset=".1" stop-color="#aaa" stop-opacity=".1" />
                    <stop offset=".9" stop-color="#000" stop-opacity=".3" />
                    <stop offset="1" stop-color="#000" stop-opacity=".5" />
                  </lineargradient>
                  <rect rx="4" width="106" height="18" fill="#555555" />
                  <rect rx="4" x="36" width="70" height="18" fill="#1abc9c" />
                  <rect x="36" width="4" height="18" fill="#1abc9c" />
                  <rect rx="4" width="106" height="18" fill="url(#smooth)" />
                  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
                    <text x="19" y="13" fill="#010101" fill-opacity=".3">CDN</text>
                    <text x="19" y="12">CDN</text>
                    <text x="70" y="13" fill="#010101" fill-opacity=".3">CloudFlare</text>
                    <text x="70" y="12">CloudFlare</text>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="18">
                  <lineargradient id="smooth" x2="0" y2="100%">
                    <stop offset="0" stop-color="#fff" stop-opacity=".7" />
                    <stop offset=".1" stop-color="#aaa" stop-opacity=".1" />
                    <stop offset=".9" stop-color="#000" stop-opacity=".3" />
                    <stop offset="1" stop-color="#000" stop-opacity=".5" />
                  </lineargradient>
                  <rect rx="4" width="110" height="18" fill="#555555" />
                  <rect rx="4" x="72" width="37" height="18" fill="#007ec6" />
                  <rect x="72" width="4" height="18" fill="#007ec6" />
                  <rect rx="4" width="110" height="18" fill="url(#smooth)" />
                  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
                    <text x="37" y="13" fill="#010101" fill-opacity=".3">Framework</text>
                    <text x="37" y="12">Framework</text>
                    <text x="90" y="13" fill="#010101" fill-opacity=".3">Egg</text>
                    <text x="90" y="12">Egg</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
export default {
  data() {
    return {
      scrolled: false,
      navigation: false
    }
  },
  mounted() {
    this.$store.commit('SET_TOKEN', getToken())
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    login() {
      if (process.client) {
        if (this.$store.getters.token === null || this.$store.getters.token === '') {
          window.location.href = `${process.env.BASE_API}/passport/github?source=${encodeURIComponent(process.env.WEB_URL + '/auth')}`
        }
      }
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0
    },
    openMenu() {
      this.navigation = true
    },
    closeMenu() {
      this.navigation = false
    }
  }
}
</script>
