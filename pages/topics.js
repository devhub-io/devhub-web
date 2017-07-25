import React from 'react'

export default class extends React.Component {
  static async getInitialProps () {
    return { }
  }

  render () {
    return (
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{marginTop: '50px', marginBottom: '50px'}}>Topics</h2>
              <div className="row">
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/javascript"><h4>javascript (8698)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/python"><h4>python (5085)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/java"><h4>java (5076)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/nodejs"><h4>nodejs (4790)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/react"><h4>react (4711)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/php"><h4>php (4675)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/android"><h4>android (4309)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/docker"><h4>docker (2592)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/css"><h4>css (2541)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/ios"><h4>ios (2298)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/swift"><h4>swift (2019)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/golang"><h4>golang (2006)</h4></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="thumbnail" style={{height: '50px'}}>
                    <div className="caption">
                      <a href="https://devhub.io/topic/html"><h4>html (1994)</h4></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
