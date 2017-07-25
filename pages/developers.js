import React from 'react'
import Paginate from '../components/paginate'

export default class extends React.Component {
  static async getInitialProps () {
    return { }
  }

  render () {
    return (
      <section id="content">
        <h1 style={{textAlign: 'center'}}>Developers</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{marginBottom: '15px'}}>
              <div className="btn-group pull-right">
                <a type="button" className="btn btn-info" href="https://devhub.io/developers">User</a>
                <a type="button" className="btn btn-default" href="https://devhub.io/developers?type=Organization">Organization</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="row">
                  <div className="col-md-3">
                    <div className="thumbnail" style={{height: '300px'}}>
                      <a href="https://devhub.io/developer/sindresorhus"><img src="https://avatars.githubusercontent.com/u/170270?v=3&amp;s=200" alt="sindresorhus" title="sindresorhus" className="lazyload" width="200"/></a>
                      <div className="caption">
                        <a href="https://devhub.io/developer/sindresorhus"><h4> <i className="fa fa-user" title="User"/> Sindre Sorhus</h4></a>
                        <div style={{marginBottom: '10px'}}>
                          <span title="star">
                          <iframe allowtransparency="true" scrolling="no" frameborder="0" src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fsindresorhus&amp;aria-label=Follow%20%7B%7B%20%24developer-%3Elogin%20%7D%7D%20on%20GitHub&amp;data-text=Follow&amp;data-show-count=true" style={{width: '125px', height: '20px', border: 'none'}}/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="thumbnail" style={{height: '300px'}}>
                      <a href="https://devhub.io/developer/vhf"><img src="https://avatars.githubusercontent.com/u/2022803?v=3&amp;s=200" alt="vhf" title="vhf" className="lazyload" width="200"/></a>
                      <div className="caption">
                        <a href="https://devhub.io/developer/vhf"><h4> <i className="fa fa-user" title="User"></i> victor felder</h4></a>
                        <div style={{marginBottom: '10px'}}>
                          <span title="star">
                          <iframe allowtransparency="true" scrolling="no" frameborder="0" src="https://buttons.github.io/buttons.html#href=https%3A%2F%2Fgithub.com%2Fvhf&amp;aria-label=Follow%20%7B%7B%20%24developer-%3Elogin%20%7D%7D%20on%20GitHub&amp;data-text=Follow&amp;data-show-count=true" style={{width: '125px', height: '20px', border: 'none'}}/>
                          </span>
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
    )
  }
}
