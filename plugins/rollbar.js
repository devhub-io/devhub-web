import Vue from 'vue'
import Rollbar from 'vue-rollbar'

Vue.use(Rollbar, {
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: true,
  source_map_enabled: true,
  environment: process.env.NODE_ENV,
  payload: {
    client: {
      javascript: {
        code_version: '1.0'
      }
    }
  }
})
