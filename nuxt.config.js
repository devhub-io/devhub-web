module.exports = {
  mode: 'universal',

  /*
  ** Server
  */
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '古龙峡',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.6.1/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fancybox@2.1.5/dist/css/jquery.fancybox.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@3.4.0/animate.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/social-share.js@1.0.16/dist/css/share.min.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/wow.js' },
      { src: 'https://cdn.jsdelivr.net/npm/fancybox@2.1.5/dist/js/jquery.fancybox.pack.js' },
      { src: '/js/SmoothScroll.js' },
      { src: '/js/html5lightbox/html5lightbox.js' },
      { src: '/js/isotope.js' },
      { src: '/js/jquery-ui.js' },
      { src: 'https://cdn.jsdelivr.net/npm/social-share.js@1.0.16/dist/js/social-share.min.js' },
      { src: 'http://api.map.baidu.com/api?key=CBmA46OnKFB4QEYbUVXFCk8M&v=1.1&services=true' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css',
    '@/assets/css/responsive.css',
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/alert.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-universal-storage'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
