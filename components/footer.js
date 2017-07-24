import Link from 'next/link'

export default () => (
  <footer id="footer">
    <div className="container footer-container">
      <div className="row">
        <div className="col-md-3">
          <img className="logo" src="/static/img/logo.png" alt=""/>
          <p>Recommended high-quality free and open source development tools, resources, reading.
            Currently tracking 1,360,882 open source projects, 365,950 developers</p>
          <ul className="socials">
            <li><a href="#"><i className="fa fa-twitter"/></a></li>
            <li><a href="#"><i className="fa fa-facebook"/></a></li>
          </ul>
        </div>
        <div className="col-md-2 col-md-offset-4 col-sm-4 col-xs-6 footer-links">
          <ul>
            <li><p className="title">WEBSITE</p></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Feed</a></li>
          </ul>
        </div>
        <div className="col-md-2 col-sm-4 col-xs-6 footer-links">
          <ul>
            <li><p className="title">GATEGORY</p></li>
            <li><a href="#">Language</a></li>
            <li><a href="#">Frontend</a></li>
            <li><a href="#">Server</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">App</a></li>
            <li><a href="#">Reading</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container copyright-container">
      <div className="row">
        <div className="col-md-6 text-left">
          <div className="more-info">
            <p className="copyright-title">© 2016 - 2017 DevHub.io. All Rights Reserved.</p>
            <p className="copyright-tips">Disclaimer: This project is not affiliated with the GitHub company in any
              way.
              GitHub® and the Octocat® logo are registered trademarks of GitHub, Inc., used with
              permission—https://github.com/logos</p>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <div className="made-by">Power by <a href="http://getcraftwork.com" target="_blank"><img
            src="/static/img/craftwork.png" alt=""/></a></div>
        </div>
      </div>
    </div>
  </footer>
)
