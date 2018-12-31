<template>
  <div>
    <header id="main-nav">
      <div class="container">
        <a id="navigation" href="#"><i class="fa fa-bars"/></a>

        <div id="slide_out_menu">
          <a href="#" class="menu-close"><i class="fa fa-times"/></a>
          <div class="logo" style="color: #ffffff">DevHub.io</div>
          <ul>
            <li><a href="/developers">Developers</a></li>
            <li><a href="/topics">Topics</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="javascript:alert('Coming soon.')">My account</a></li>
            <li><a href="/sites">Sites</a></li>
            <li><a href="search" class="btn btn-blue">Search...</a></li>
          </ul>

          <div class="slide_out_menu_footer">
            <div class="more-info">
              <p>Developed by <a href="#">Devhub</a>
            </p></div>
            <ul class="socials">
              <li><a href="https://twitter.com/HubDevelop" target="_blank"><i class="fa fa-twitter"/></a></li>
              <li><a href="https://www.facebook.com/devhubdotio" target="_blank"><i class="fa fa-facebook"/></a></li>
              <li><a href="mailto:devhub.io@gmail.com"><i class="fa fa-envelope-o"/></a></li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <ul class="left">
              <li><a href="/developers">Developers</a></li>
              <li><a href="/topics">Topics</a></li>
              <li><a href="/news">News</a></li>
            </ul>
          </div>
          <div class="col-md-4 text-center">
            <a href="/" class="logo">DevHub.io</a>
          </div>
          <div class="col-md-4">
            <ul class="right">
              <li><a href="javascript:alert('Coming soon.')" class="help">My account</a></li>
              <li><a href="/sites">Sites</a></li>
              <li><a href="/search" class="btn btn-blue">Search...</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header><!-- //Main Nav -->

    <nuxt/>

    <footer id="footer">
      <div class="container footer-container">
        <div class="row">
          <div class="col-md-3">
            <a href="/" style="color: #26272d; font-weight: 700; text-transform: uppercase;font-size: 12px;">DevHub.io</a>
            <p>Recommended high-quality free and open source development tools, resources, reading. <br>
              Currently tracking
              <a href="list/newest">{{ 0 }}</a> open source projects,
            <a href="developers">{{ 0 }}</a> developers</p>
            <ul class="socials">
              <li><a href="https://twitter.com/HubDevelop" target="_blank"><i class="fa fa-twitter"/></a></li>
              <li><a href="https://www.facebook.com/devhubdotio" target="_blank"><i class="fa fa-facebook"/></a></li>
              <li><a href="mailto:devhub.io@gmail.com"><i class="fa fa-envelope-o"/></a></li>
            </ul>
          </div>
          <div class="col-md-2 col-md-offset-4 col-sm-4 col-xs-6 footer-links">
            <ul>
              <li><p class="title">WEBSITE</p></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="//status.devhub.io/">Status</a></li>
              <li><a href="#">Api</a></li>
              <li><a href="feed">Feed</a></li>
            </ul>
          </div>
          <div class="col-md-2 col-sm-4 col-xs-6 footer-links">
            <ul>
              <li><p class="title">GATEGORY</p></li>
              @if(isset($one_column))
              @foreach($one_column as $item)
              <li><a href="/category">@lang('category.'.$item->slug)</a></li>
              @endforeach
              @endif
            </ul>
          </div>
        </div>
      </div>
      <div class="container copyright-container">
        <div class="row">
          <div class="col-md-8 text-left">
            <div class="more-info">
              <p class="copyright-title">© 2016 - 2019 DevHub.io. All Rights Reserved.</p>
              <p class="copyright-tips">Disclaimer: This project is not affiliated with the GitHub company in any way.
              GitHub® and the Octocat® logo are registered trademarks of GitHub, Inc., used with permission—https://github.com/logos</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-6 text-right">
                <div class="made-by">Power by</div>
              </div>
              <div class="col-md-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="18">
                  <linearGradient id="smooth" x2="0" y2="100%">
                    <stop offset="0" stop-color="#fff" stop-opacity=".7"/>
                    <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
                    <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
                    <stop offset="1" stop-color="#000" stop-opacity=".5"/>
                  </linearGradient>
                  <rect rx="4" width="91" height="18" fill="#555555"/>
                  <rect rx="4" x="48" width="43" height="18" fill="#4c1"/>
                  <rect x="48" width="4" height="18" fill="#4c1"/>
                  <rect rx="4" width="91" height="18" fill="url(#smooth)"/>
                  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
                    <text x="25" y="13" fill="#010101" fill-opacity=".3">Server</text>
                    <text x="25" y="12">Server</text>
                    <text x="68.5" y="13" fill="#010101" fill-opacity=".3">Nginx</text>
                    <text x="68.5" y="12">Nginx</text>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="106" height="18">
                  <linearGradient id="smooth" x2="0" y2="100%">
                    <stop offset="0" stop-color="#fff" stop-opacity=".7"/>
                    <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
                    <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
                    <stop offset="1" stop-color="#000" stop-opacity=".5"/>
                  </linearGradient>
                  <rect rx="4" width="106" height="18" fill="#555555"/>
                  <rect rx="4" x="36" width="70" height="18" fill="#1abc9c"/>
                  <rect x="36" width="4" height="18" fill="#1abc9c"/>
                  <rect rx="4" width="106" height="18" fill="url(#smooth)"/>
                  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
                    <text x="19" y="13" fill="#010101" fill-opacity=".3">CDN</text>
                    <text x="19" y="12">CDN</text>
                    <text x="70" y="13" fill="#010101" fill-opacity=".3">CloudFlare</text>
                    <text x="70" y="12">CloudFlare</text>
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="18">
                  <linearGradient id="smooth" x2="0" y2="100%">
                    <stop offset="0" stop-color="#fff" stop-opacity=".7"/>
                    <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
                    <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
                    <stop offset="1" stop-color="#000" stop-opacity=".5"/>
                  </linearGradient>
                  <rect rx="4" width="124" height="18" fill="#555555"/>
                  <rect rx="4" x="72" width="52" height="18" fill="#007ec6"/>
                  <rect x="72" width="4" height="18" fill="#007ec6"/>
                  <rect rx="4" width="124" height="18" fill="url(#smooth)"/>
                  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
                    <text x="37" y="13" fill="#010101" fill-opacity=".3">Framework</text>
                    <text x="37" y="12">Framework</text>
                    <text x="97" y="13" fill="#010101" fill-opacity=".3">Egg</text>
                    <text x="97" y="12">Egg</text>
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
// import HeaderNav from '~/components/general/nav.vue'

export default {
  // components: {
  //   HeaderNav
  // },
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    const token = this.$storage.getUniversal('token')
    if (token !== undefined && token !== null && token !== '') {
      this.isLogin = true
    }
  }
}
</script>
