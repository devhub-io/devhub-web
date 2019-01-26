module.exports = {
  mode: 'universal',

  /*
  ** Server
  */
  server: {
    port: 7002, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'DevHub.io - Development Tools Repositories Developers Hub',
    titleTemplate: '%s | DevHub.io',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Development Tools Repositories Developers Hub' },
      { hid: 'keywords', name: 'keywords', content: 'Development, DevHub.io, Repositories, Developers, Tools, Libraries, server, app, reading' },
      { name: 'theme-color', content: '#1abc9c' }
    ],
    link: [
      { ref: 'alternate', href: '/', hreflang: 'x-default' },
      { ref: 'sitemap', type: 'application/xml', title: 'Sitemap', href: '/sitemap' },
      { ref: 'alternate', type: 'application/rss+xml', title: 'RSS', href: '/feed' },
      { ref: 'search', type: 'application/opensearchdescription+xml', title: 'Devhub', href: '/opensearch.xml' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { ref: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { ref: 'apple-touch-icon', size: '57x57', href: '/apple-touch-icon-57x57.png' },
      { ref: 'apple-touch-icon', size: '72x72', href: '/apple-touch-icon-72x72.png' },
      { ref: 'apple-touch-icon', size: '76x76', href: '/apple-touch-icon-76x76.png' },
      { ref: 'apple-touch-icon', size: '114x114', href: '/apple-touch-icon-114x114.png' },
      { ref: 'apple-touch-icon', size: '120x120', href: '/apple-touch-icon-120x120.png' },
      { ref: 'apple-touch-icon', size: '144x144', href: '/apple-touch-icon-144x144.png' },
      { ref: 'apple-touch-icon', size: '152x152', href: '/apple-touch-icon-152x152.png' },
      { ref: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon-180x180.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,700,500' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1abc9c' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/style.css',
    '@/assets/css/github-markdown.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/welcome.js', ssr: true },
    { src: '~/plugins/alert.js', ssr: false },
    { src: '~/plugins/analytics.js', ssr: false },
    { src: '~/plugins/filters.js' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-universal-storage',
    'vue-github-buttons/nuxt',
    ['bootstrap-vue/nuxt', { css: false }]
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
