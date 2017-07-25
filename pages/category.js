import React from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'
import Paginate from '../components/paginate'

export default class extends React.Component {
  static async getInitialProps () {
    return {}
  }

  render () {
    return <div>
      <section id="content">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="single-sidebar">
                  <h2 className="sidebar-title">Language</h2>
                  <ul>
                    <li className="active"><a href="https://devhub.io/category/java">Java</a></li>
                    <li className=""><a href="https://devhub.io/category/python">Python</a></li>
                    <li className=""><a href="https://devhub.io/category/ruby">Ruby</a></li>
                    <li className=""><a href="https://devhub.io/category/php">PHP</a></li>
                    <li className=""><a href="https://devhub.io/category/cpp">C++</a></li>
                    <li className=""><a href="https://devhub.io/category/c">C</a></li>
                    <li className=""><a href="https://devhub.io/category/c-sharp">C#</a></li>
                    <li className=""><a href="https://devhub.io/category/go">Go</a></li>
                    <li className=""><a href="https://devhub.io/category/clojure">Clojure</a></li>
                    <li className=""><a href="https://devhub.io/category/rust">Rust</a></li>
                    <li className=""><a href="https://devhub.io/category/lua">Lua</a></li>
                    <li className=""><a href="https://devhub.io/category/scala">Scala</a></li>
                    <li className=""><a href="https://devhub.io/category/perl">Perl</a></li>
                    <li className=""><a href="https://devhub.io/category/erlang">Erlang</a></li>
                  </ul>
                </div>
              </div>
              <div className=" col-md-9 ">
                <div className="product-content-right">
                  <div className="row">
                    <div className="col-sm-6  col-md-4 ">
                      <div className="thumbnail" style={{height: '362px'}}>
                        <a href="https://devhub.io/repos/libgdx-libgdx"><img src="https://avatars2.githubusercontent.com/u/509841?v=3&amp;s=200" alt="libgdx" title="libgdx" className="lazyload" width="200"/></a>
                        <div className="caption">
                          <a href="https://devhub.io/repos/libgdx-libgdx"><h4 style={{marginTop: '5px', marginBottom: '5px'}}>libgdx</h4></a>
                          <div style={{marginBottom: 10}}>
                              <span title="star">
                              <i className="glyphicon glyphicon-star"/> 11515
                              </span>
                            <span className="line" style={{display: 'none'}}>0,11,11,14,0,10,0,17</span>
                            <svg className="peity" height="16" width="32">
                              <polygon fill="#c6d9fd" points="0 15.5 0 15.5 4.571428571428571 5.7941176470588225 9.142857142857142 5.7941176470588225 13.714285714285714 3.147058823529413 18.285714285714285 15.5 22.857142857142854 6.6764705882352935 27.428571428571427 15.5 32 0.5 32 15.5"/>
                              <polyline fill="none" points="0 15.5 4.571428571428571 5.7941176470588225 9.142857142857142 5.7941176470588225 13.714285714285714 3.147058823529413 18.285714285714285 15.5 22.857142857142854 6.6764705882352935 27.428571428571427 15.5 32 0.5" stroke="#4d89f9" stroke-width="1" stroke-linecap="square"/>
                            </svg>
                          </div>
                          <p style={{lineHeight: '18px', fontSize: '15px'}}>Desktop/Android/HTML5/iOS Java game development framework</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <Paginate />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}
