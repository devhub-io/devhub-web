import React from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps () {
    return { }
  }

  render () {
    return <div>
      <section id="topics">
        <div className="container">
          <div className="row">
            <h1 className="wow fadeInUp text-center">Topics</h1>

            <div className="row top-50" data-wow-delay=".3s" data-effect="mfp-zoom-in">
              <div className="col-md-4 center">
                <img src="/static/img/repos/1bc739766f8ee436161dd2299fe24b37.jpg" alt="" width="300"/>
              </div>
              <div className="col-md-4 center">
                <img src="/static/img/repos/1bc739766f8ee436161dd2299fe24b37.jpg" alt="" width="300"/>
              </div>
              <div className="col-md-4 center">
                <img src="/static/img/repos/1bc739766f8ee436161dd2299fe24b37.jpg" alt="" width="300"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guess">
        <div className="container">
          <div className="row">
            <h1 className="wow fadeInUp text-center">Guess you like it</h1>

            <div className="row top-50" data-wow-delay=".3s" data-effect="mfp-zoom-in">
              <div className="col-md-2 center guess-item">
                <a href="#">
                  <img src="/static/img/repos/2918581.png" alt="" width="200"/>
                  <p>electron</p>
                </a>
              </div>
              <div className="col-md-2 center guess-item">
                <a href="#">
                  <img src="/static/img/repos/2918581.png" alt="" width="200"/>
                  <p>electron</p>
                </a>
              </div>
              <div className="col-md-2 center guess-item">
                <a href="#">
                  <img src="/static/img/repos/2918581.png" alt="" width="200"/>
                  <p>electron</p>
                </a>
              </div>
              <div className="col-md-2 center guess-item">
                <a href="#">
                  <img src="/static/img/repos/2918581.png" alt="" width="200"/>
                  <p>electron</p>
                </a>
              </div>
              <div className="col-md-2 center guess-item">
                <a href="#">
                  <img src="/static/img/repos/2918581.png" alt="" width="200"/>
                  <p>electron</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="top">
        <div className="container">
          <h1>Popular</h1>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <h1>Top new</h1>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <h1>Trend</h1>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-md-offset-1 title">zeit/now-cli</div>
            <div className="col-md-6 desc">the command line interface for Now</div>
            <div className="col-md-2 col-md-offset-1 stars">1112 <img src="/static/img/repos/20170722134804.png" alt=""/>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="subtitle"/>
              <h2>Subscribe our newsletters</h2>
              <form action="">
                <div className="form-group">
                  <input type="email" placeholder="Email here"/>
                  <a href="#" className="btn btn-green">Subscribe</a>
                </div>
              </form>
              <p className="promise">We promise to never spam you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}
