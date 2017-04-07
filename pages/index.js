import React from 'react'
import 'isomorphic-fetch'
import Layout from '../components/layout'
import Top from '../components/top'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps () {
    const topRes = await fetch('http://api.develophub.local/v1/repos/top')
    const top = await topRes.json()

    const collectionsRes = await fetch('http://api.develophub.local/v1/repos/collections')
    const collections = await collectionsRes.json()

    const recommendRes = await fetch('http://api.develophub.local/v1/repos/recommend')
    const recommend = await recommendRes.json()

    return { hottest: top.hottest, newest: top.newest, trend: top.trend, collections: collections.collections, recommend: recommend.repos }
  }

  render () {
    return <Layout>
      <div className="product-widget-area" style={{paddingBottom: '50px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="latest-product">
                <div className="section-title"/>
                <div className="product-carousel">
                  {
                    this.props.recommend.map((item, index) => (
                      <div className="single-product" key={index}>
                        <div className="product-f-image">
                          <img src={item.cover ? item.cover + '&s=210' : '/static/img/210x269.png'} alt={item.title} title={item.title} className="lazyload" width="210" />
                          <div className="product-hover">
                            <a href={'/repos/' + item.slug} className="view-details-link"><i className="fa fa-link"/> See Details</a>
                          </div>
                        </div>
                        <h2><a href={'/repos/' + item.slug}>{ item.title }</a></h2>
                        <div className="product-carousel-price">
                          <div/>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brands-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="brand-wrapper">
                <h2 className="section-title">Topic</h2>
                <div className="brand-list">
                  {
                    this.props.collections.map((item, index) => (
                      <a href={'/collection/' + item.slug} key={index}>
                        <img src={item.image ? item.image : '/static/img/270x270.png'} alt={item.title} title={item.title} width="270" height="270" className="lazyload" />
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-widget-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Top title="Popular" repos={this.props.hottest} />
            </div>
            <div className="col-md-4">
              <Top title="Latest" repos={this.props.newest} />
            </div>
            <div className="col-md-4">
              <Top title="Trend" repos={this.props.trend} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  }
}
