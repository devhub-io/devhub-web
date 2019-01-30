<template>
  <div>
    <header id="main-nav" :class="{ active: scrolled }">
      <div class="container">
        <a id="navigation" :class="{ open: navigation }" :href="void(0)" @click="openMenu"><i class="fas fa-bars"/></a>

        <div id="slide_out_menu" :class="{ scrolled: scrolled, open: navigation }">
          <a :href="void(0)" class="menu-close" @click="closeMenu"><i class="fas fa-times"/></a>
          <div class="logo" style="color: #ffffff">DevHub.io</div>
          <ul>
            <li><nuxt-link to="/ecosystems">Ecosystems</nuxt-link></li>
            <li><nuxt-link to="/workflow">Workflow</nuxt-link></li>
            <li><a :href="void(0)" rel="nofollow" @click="login">My account</a></li>
            <li><nuxt-link to="search" class="btn btn-blue">Search...</nuxt-link></li>
          </ul>

          <div class="slide_out_menu_footer">
            <div class="more-info">
              <p>Developed by <nuxt-link to="/">Devhub.io</nuxt-link></p>
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
              <li><nuxt-link to="/ecosystems">Ecosystems</nuxt-link></li>
              <li><nuxt-link to="/workflow">Workflow</nuxt-link></li>
            </ul>
          </div>
          <div class="col-md-4 text-center">
            <nuxt-link to="/" class="logo">DevHub.io</nuxt-link>
          </div>
          <div class="col-md-4">
            <ul class="right">
              <li v-if="$store.getters.token === null || $store.getters.token === ''"><a :href="void(0)" class="help" rel="nofollow" @click="login">My account</a></li>
              <li v-else>
                <b-nav-item-dropdown right>
                  <template slot="button-content">
                    <span>My account</span>
                  </template>
                  <b-dropdown-item href="/user?tab=workflow">Your Workflow</b-dropdown-item>
                  <b-dropdown-item href="/user?tab=stars">Your Stars</b-dropdown-item>
                  <b-dropdown-divider />
                  <b-dropdown-item href="/user/settings">Settings</b-dropdown-item>
                  <b-dropdown-item href="/user/logout">Sign out</b-dropdown-item>
                </b-nav-item-dropdown>
              </li>
              <!--<li><nuxt-link to="/sites">Sites</nuxt-link></li>-->
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
              Recommended high-quality free and open source development ecosystems, workflow, repositories.<br>
              Currently tracking
              <nuxt-link to="/list/newest">{{ $store.getters.count.repos || 0 }}</nuxt-link> open source projects,
              <nuxt-link to="/developers">{{ $store.getters.count.developers || 0 }}</nuxt-link> developers
            </p>
            <ul class="socials">
              <li><a href="https://twitter.com/HubDevelop" target="_blank"><i class="fab fa-twitter"/></a></li>
              <li><a href="https://www.facebook.com/devhubdotio" target="_blank"><i class="fab fa-facebook"/></a></li>
              <li><a href="mailto:devhub.io@gmail.com"><i class="fas fa-envelope"/></a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-4 col-6 footer-links offset-lg-3">
            <ul>
              <li><p class="title">WEBSITE</p></li>
              <li><nuxt-link to="/terms">Terms and Conditions</nuxt-link></li>
              <li><nuxt-link to="/privacy">Privacy Policy</nuxt-link></li>
              <li><nuxt-link to="#">About</nuxt-link></li>
              <li><a href="//status.devhub.io/">Status</a></li>
              <li><a href="feed">Feed</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-4 col-6 footer-links">
            <ul>
              <li><p class="title">EXPLORE</p></li>
              <li><nuxt-link to="/developers">Developers</nuxt-link></li>
              <li><nuxt-link to="/topics">Topics</nuxt-link></li>
              <li><nuxt-link to="/news">News</nuxt-link></li>
              <li><nuxt-link to="/sites">Sites</nuxt-link></li>
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

    <button v-b-modal.feedbackModal id="feedback-button" class="bottom_right" style="visibility: hidden;">Feedback</button>
    <b-modal id="feedbackModal" ref="feedbackModal" title="Feedback" ok-title="Send" @ok="sendFeedback">
      <form id="feedback-form" style="padding:10px;" method="get" role="form" class="form-horizontal bv-form" novalidate="novalidate">
        <div class="form-group mcq_input has-feedback">
          <div class="form-group">
            <textarea v-model="feedbackForm.message" class="form-control" rows="3" placeholder="Send us your comments or suggestions..."/>
          </div>
          <div class="form-group">
            <input v-model="feedbackForm.email" type="email" class="form-control" placeholder="Your email address">
          </div>
        </div>
      </form>
    </b-modal>
    <b-modal id="loginModal" ref="loginModal" :visible="$store.getters.showLogin" :title="'Login'" :hide-footer="true" @change="changeLoginModalState">
      <div class="form-group mcq_input has-feedback">
        <div class="form-group">
          <button class="btn btn-blue" @click="oauth"><i class="fab fa-github"/> Sign in with Github</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { feedback } from '@/api/site'

export default {
  data() {
    return {
      scrolled: false,
      navigation: false,
      feedbackForm: {
        message: '',
        email: ''
      }
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
    changeLoginModalState(state) {
      if (state === false) {
        this.$store.dispatch('hideLoginModal')
      }
    },
    login() {
      if (this.$store.getters.token === null || this.$store.getters.token === '') {
        this.$store.dispatch('showLoginModal')
      } else {
        this.$router.push('/user')
      }
    },
    oauth() {
      if (process.client) {
        window.location.href = `${process.env.BASE_API}/passport/github?source=${encodeURIComponent(process.env.WEB_URL + '/auth')}`
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
    },
    sendFeedback(evt) {
      evt.preventDefault()
      if (this.feedbackForm.message === '') {
        this.$Alert.info({ content: 'Please input message' })
        return false
      }
      if (this.feedbackForm.email === '') {
        this.$Alert.info({ content: 'Please input email' })
        return false
      }
      if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.feedbackForm.email)) {
        this.$Alert.info({ content: 'Invalid email' })
        return false
      }
      feedback(this.feedbackForm)
        .then(() => {
          this.$Alert.info({ content: 'Feedback sent!' })
          this.$refs.feedbackModal.hide()
          this.feedbackForm = {
            message: '',
            email: ''
          }
        })
        .catch(() => {
          this.$Alert.info({ content: 'Validation Failed' })
        })
    }
  }
}
</script>
