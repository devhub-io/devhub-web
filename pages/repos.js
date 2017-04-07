import React from 'react'
import 'isomorphic-fetch'
import Layout from '../components/layout'

export default class extends React.Component {
  static async getInitialProps () {
    return {}
  }

  render () {
    return <Layout>
      <p>repos</p>
    </Layout>
  }
}
