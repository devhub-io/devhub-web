import React from 'react'

export default class extends React.Component {
  static async getInitialProps () {
    return { }
  }

  render () {
    return (
      <section id="content">
        <div className="container">
          <ol className="breadcrumb">
            <li><a href="https://devhub.io/">Home</a></li>
            <li><a href="https://devhub.io/news">News</a></li>
            <li className="active">2017-07-25</li>
          </ol>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="repo-title">
                <h1 style={{fontSize: '32px'}}>What's hot on Github on 2017-07-25</h1>
              </div>
            </div>
          </div>
            <div className="row">

              <div className="col-md-12">
                <div style={{minHeight: '120px'}}>
                  <div className="caption">
                    <a href="https://devhub.io/link?target=https%3A%2F%2Fnews.ycombinator.com%2Fitem%3Fid%3D14844905" rel="nofollow" target="_blank" >
                      <h2 style={{fontSize: '26px', marginBottom: '10px'}}><span className="label label-default">2</span> Nat and Weex: The next mobile framework for building native cross-platform app</h2>
                    </a>
                    <a style={{fontSize: '16px'}} href="https://devhub.io/repos/natjs-nat" target="_blank">
                      <i className="fa fa-github"/>
                      natjs/nat &nbsp;&nbsp;
                      <span title="Stargazers count">
                      <i className="glyphicon glyphicon-star"/> 11 &nbsp;&nbsp;
                      </span>
                    </a>
                    <p>Next generation mobile framework for building native / hybrid apps.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div style={{minHeight: '120px'}}>
                  <div className="caption">
                    <a href="https://devhub.io/link?target=https%3A%2F%2Fnews.ycombinator.com%2Fitem%3Fid%3D14845409" rel="nofollow" target="_blank" >
                      <h2 style={{fontSize: '26px', marginBottom: '10px'}}><span className="label label-default">1</span> Calculated Values with Schema-Based Parsing</h2>
                    </a>
                    <a style={{fontSize: '16px'}} href="https://devhub.io/repos/axibase-atsd-use-cases" target="_blank">
                      <i className="fa fa-github"/>
                      axibase/atsd-use-cases &nbsp;&nbsp;
                      <span title="Stargazers count">
                      <i className="glyphicon glyphicon-star"/> 2 &nbsp;&nbsp;
                      </span>
                    </a>
                    <p>Axibase Time Series Database: Usage Example and Research Articles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{fontSize: '23px'}}>
              <div className="col-md-2">
                <a className="label label-info" href="https://devhub.io/news/daily/2017-07-24">&lt; 2017-07-24</a>
              </div>
            </div>
        </div>
      </section>
    )
  }
}
