import React from 'react'
import 'isomorphic-fetch'
import Layout from '../components/layout'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps () {
    return {}
  }

  render () {
    return <Layout>
      <section id="content">
        <div className="container">
          <ol className="breadcrumb">
            <li><a href="https://devhub.io/">Home</a></li>
            <li><a href="https://devhub.io/list/popular">Repositories</a></li>
            <li><a href="https://devhub.io/category/cpp">C++</a></li>
            <li className="active">electron</li>
          </ol>
          <div className="row" style={{margin: '50px 0 50px 0'}}>
            <div className="col-md-4 col-sm-4 hidden-xs">
              <img className="cover" src="https://avatars2.githubusercontent.com/u/13409222?v=3" alt="electron"
                   title="electron" width="300"/>
            </div>
            <div className="col-md-7 col-sm-8">
              <div className="repo-title">
                <h1 style={{fontSize: '42px'}}>
                  electron <span className="line" title="Trends" style={{display: 'none'}}>0,50,45,86,0,60,0,83</span>
                  <svg className="peity" height="16" width="32">
                    <polygon fill="#c6d9fd" points="0 15.5 0 15.5 4.571428571428571 6.779069767441859 9.142857142857142 7.651162790697674 13.714285714285714 0.5 18.285714285714285 15.5 22.857142857142854 5.034883720930232 27.428571428571427 15.5 32 1.0232558139534884 32 15.5"/>
                    <polyline fill="none" points="0 15.5 4.571428571428571 6.779069767441859 9.142857142857142 7.651162790697674 13.714285714285714 0.5 18.285714285714285 15.5 22.857142857142854 5.034883720930232 27.428571428571427 15.5 32 1.0232558139534884" stroke="#4d89f9" stroke-width="1" stroke-linecap="square"/>
                  </svg>
                  <a href="https://devhub.io/link?target=https%3A%2F%2Ftravis-ci.org%2Felectron%2Felectron"
                     rel="nofollow" target="_blank" title="travis-ci" style={{textDecoration: 'none'}}>
                    <img src="//devhub.io/img/badges/travis-ci.png" alt="travis-ci" width="20" height="20"/>
                  </a>
                  <img src="//devhub.io/img/badges/npm.png" alt="npm" title="npm" width="20" height="20"/>
                </h1>
                <p>Build cross platform desktop apps with JavaScript, HTML, and CSS</p>
              </div>
              <div className="menu" style={{marginBottom: '10px'}}>
                <a target="_blank" href="https://devhub.io/link?target=https%3A%2F%2Felectron.atom.io" rel="nofollow" title="https://electron.atom.io"><i className="fa fa-home fa-2x"/> Homepage </a> &nbsp;&nbsp;
                <a target="_blank" href="https://devhub.io/link?target=https%3A%2F%2Fgithub.com%2Felectron%2Felectron" rel="nofollow"><i className="fa fa-github fa-2x"/> Github </a> &nbsp;&nbsp;
                <a target="_blank" href="https://devhub.io/repos/electron-electron/questions"><i className="fa fa-stack-overflow fa-2x"/> Questions </a> &nbsp;&nbsp;
                <a href="https://devhub.io/developer/electron"><i className="fa fa-user fa-2x"/>Developer</a> &nbsp;&nbsp;
                <a href="https://devhub.io/link?target=http%3A%2F%2Felectron.atom.io%2Fdocs%2F" rel="nofollow" target="_blank"><i className="fa fa-book fa-2x"/> Documentation</a> &nbsp;&nbsp;
                <a target="_blank" href="https://devhub.io/repos/electron-electron/news"><i className="fa fa-newspaper-o fa-2x"/> News </a> &nbsp;&nbsp;
              </div>
              <div className="params">
                <div style={{marginBottom: '10px'}}>

                </div>
                <div style={{marginBottom: '10px'}} title="Last Updated">
                  <i className="fa fa-clock-o"/> <span>1 month after</span>
                  <a href="https://devhub.io/link?target=https%3A%2F%2Fspdx.org%2Flicenses%2FMIT.html" target="_blank" rel="nofollow" title="MIT License" style={{color: '#333', textDecoration: 'none'}}><i className="fa fa-copyright"/> <span>MIT</span></a>
                </div>
                <div style={{marginBottom: '10px'}} className="repos-topic">
                  <a className="label label-primary" style={{display: 'inline-block'}}
                     href="https://devhub.io/topic/c-plus-plus">c-plus-plus</a>
                  <a className="label label-primary" style={{display: 'inline-block'}}
                     href="https://devhub.io/topic/chrome">chrome</a>
                  <a className="label label-primary" style={{display: 'inline-block'}} href="https://devhub.io/topic/css">css</a>
                  <a className="label label-primary" style={{display: 'inline-block'}}
                     href="https://devhub.io/topic/electron">electron</a>
                  <a className="label label-primary" style={{display: 'inline-block'}} href="https://devhub.io/topic/html">html</a>
                  <a className="label label-primary" style={{display: 'inline-block'}}
                     href="https://devhub.io/topic/javascript">javascript</a>
                  <a className="label label-primary" style={{display: 'inline-block'}}
                     href="https://devhub.io/topic/nodejs">nodejs</a>
                  <a className="label label-primary" style={{display: 'inline-block'}}
                     href="https://devhub.io/topic/v8">v8</a>
                </div>
                <div>
                  <button type="button" className="btn btn-info" data-toggle="modal" data-target="#reviewModal">
                    I use electron/electron
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <article className="col-md-8 markdown-body">
              <h2>Quick Start</h2>
              <p>Clone and run the <a rel="nofollow noreferrer" target="_blank"
                                      href="https://github.com/electron/electron-quick-start"><code>electron/electron-quick-start</code></a>
                repository to see a minimal Electron app in action.</p>
            </article>
            <div className="col-md-4" style={{marginBottom: '50px'}}>
              <h3>Related Repositories</h3>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col-md-4">
                  <a href="https://devhub.io/repos/sindresorhus-awesome-electron"><img src="https://avatars2.githubusercontent.com/u/170270?v=3&amp;s=100" alt="awesome-electron" title="awesome-electron" className="lazyload" width="100"/></a>
                </div>
                <div className="col-md-8">
                  <h4><a href="https://devhub.io/repos/sindresorhus-awesome-electron">awesome-electron</a></h4>
                  <p>Useful resources for creating apps with Electron ...</p>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col-md-4">
                  <a href="https://devhub.io/repos/electron-userland-electron-packager"><img src="https://avatars1.githubusercontent.com/u/17519142?v=3&amp;s=100" alt="electron-packager" title="electron-packager" className="lazyload" width="100"/></a>
                </div>
                <div className="col-md-8">
                  <h4><a href="https://devhub.io/repos/electron-userland-electron-packager">electron-packager</a></h4>
                  <p>Customize and package your Electron app with OS-specific bundles (.app, .exe, et ...</p>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col-md-4">
                  <a href="https://devhub.io/repos/electron-userland-electron-builder"><img src="https://avatars1.githubusercontent.com/u/17519142?v=3&amp;s=100" alt="electron-builder" title="electron-builder" className="lazyload" width="100"/></a>
                </div>
                <div className="col-md-8">
                  <h4><a href="https://devhub.io/repos/electron-userland-electron-builder">electron-builder</a></h4>
                  <p>A complete solution to package and build a ready for distribution Electron app w ...</p>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col-md-4">
                  <a href="https://devhub.io/repos/electron-userland-electron-prebuilt"><img src="https://avatars.githubusercontent.com/u/17519142?v=3&amp;s=100" alt="electron-prebuilt" title="electron-prebuilt" className="lazyload" width="100"/></a>
                </div>
                <div className="col-md-8">
                  <h4><a href="https://devhub.io/repos/electron-userland-electron-prebuilt">electron-prebuilt</a></h4>
                  <p>Install precompiled versions of Electron using npm ...</p>
                </div>
              </div>
              <div className="row" style={{marginBottom: '10px'}}>
                <div className="col-md-4">
                  <a href="https://devhub.io/repos/felixrieseberg-ember-electron"><img src="https://avatars.githubusercontent.com/u/1426799?v=3&amp;s=100" alt="ember-electron" title="ember-electron" className="lazyload" width="100"/></a>
                </div>
                <div className="col-md-8">
                  <h4><a href="https://devhub.io/repos/felixrieseberg-ember-electron">ember-electron</a></h4>
                  <p>:zap: Build, test, compile and package desktop apps with Ember Cli (1.x &amp; 2.x) ...</p>
                </div>
              </div>
              <br/>
              <h3>Top Contributors</h3>
              <div>
                <a href="https://devhub.io/developer/zcbenz" target="_blank" rel="nofollow">
                  <img src="https://avatars.githubusercontent.com/u/639601?v=3&amp;s=60" alt="zcbenz" title="zcbenz" className="pull-left" width="60" height="60" style={{width: '60px', height: '60px'}}/>
                </a>
                <a href="https://devhub.io/developer/kevinsawicki" target="_blank" rel="nofollow">
                  <img src="https://avatars.githubusercontent.com/u/671378?v=3&amp;s=60" alt="kevinsawicki" title="kevinsawicki" className="pull-left" width="60" height="60" style={{width: '60px', height: '60px'}}/>
                </a>
                <a href="https://devhub.io/developer/preco21" target="_blank" rel="nofollow">
                  <img src="https://avatars.githubusercontent.com/u/4936201?v=3&amp;s=60" alt="preco21" title="preco21" className="pull-left" width="60" height="60" style={{width: '60px', height: '60px'}}/>
                </a>
                <a href="https://devhub.io/developer/deepak1556" target="_blank" rel="nofollow">
                  <img src="https://avatars.githubusercontent.com/u/964386?v=3&amp;s=60" alt="deepak1556" title="deepak1556" className="pull-left" width="60" height="60" style={{width: '60px', height: '60px'}}/>
                </a>
              </div>
              <div style={{clear: 'both'}}/>
              <br/>
              <h3>Releases</h3>
              <div>
                <div>-&nbsp;&nbsp; v1.4.11 <a href="https://api.github.com/repos/electron/electron/zipball/v1.4.11" rel="nofollow"><i className="fa fa-file-archive-o"> zip</i></a> <a href="https://api.github.com/repos/electron/electron/tarball/v1.4.11" rel="nofollow"><i className="fa fa-file-archive-o"> tar</i></a></div>
                <div>-&nbsp;&nbsp; v1.4.10 <a href="https://api.github.com/repos/electron/electron/zipball/v1.4.10" rel="nofollow"><i className="fa fa-file-archive-o"> zip</i></a> <a href="https://api.github.com/repos/electron/electron/tarball/v1.4.10" rel="nofollow"><i className="fa fa-file-archive-o"> tar</i></a></div>
                <div>-&nbsp;&nbsp; v1.4.9 <a href="https://api.github.com/repos/electron/electron/zipball/v1.4.9" rel="nofollow"><i className="fa fa-file-archive-o"> zip</i></a> <a href="https://api.github.com/repos/electron/electron/tarball/v1.4.9" rel="nofollow"><i className="fa fa-file-archive-o"> tar</i></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  }
}
