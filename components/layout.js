export default ({ children, title = 'DevHub - Development Tools Repositories Developers Hub' }) => (
  <div>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{ title }</title>
      <meta name="description" content="Development Tools Repositories Developers Hub" />
      <meta name="keywords" content="Development, DevHub, Repositories, Developers, Tools, Libraries, server, app, reading" />
      <meta property="og:title" content="DevHub"/>
      <meta property="og:description" content="Development Tools Repositories Developers Hub"/>
      <meta name="theme-color" content="#1abc9c" />
      <link rel="alternate" href="/" hrefLang="x-default"/>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap" />
      <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed" />
      <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="DevelopHub" />
      <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon-180x180.png" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/static/css/all.css" />
    </head>
    <body>

      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="user-menu">
                <ul>
                  <li><a href="javascript:void(0);"><i className="fa fa-user"/>My Account</a></li>
                  <li><a href="/sites"><i className="fa fa-sitemap"/>Sites</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="header-right">
                <ul className="list-unstyled list-inline">
                  <li className="dropdown dropdown-small">
                    <a dataToggle="dropdown" dataHover="dropdown" className="dropdown-toggle" href="#">
                      <span className="key">Choose Language : </span><span className="value">--- </span>
                      <b className="caret"/>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a rel="alternate" hrefLang="{{$localeCode}}" href="/{{ $localeCode }}">
                          ---
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                <h1><a href="/"><span>Dev</span>Hub</a></h1>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="shopping-item">
                <form action="/search">
                  <input type="search" name="keyword" value="" placeholder="Search..." />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" dataToggle="collapse" dataTarget=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="{{ active_class(if_uri('/')) }}"><a href="{{ l_url('/') }}">Home</a></li>
                <li className="{{ active_class($item->slug == $current_category_slug) }}"><a href="{{ l_url('category', [$item->slug]) }}">Category</a></li>
                <li className="{{ active_class(if_uri('developers') || if_route('developer')) }}"><a href="{{ l_url('developers') }}">Developers</a></li>
                <li className="{{ active_class(if_uri('topics') || if_route('topics')) }}"><a href="{{ l_url('topics') }}">Topics</a></li>
                <li className="{{ active_class(if_uri('news') || if_route('news')) }}"><a href="{{ l_url('news') }}">News</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      { children }

      <div className="footer-top-area">
        <div className="zigzag-bottom"/>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-about-us">
                <h2><span>DevHub</span></h2>
                <p>About devhub.io</p>
                <p>
                  Currently tracking
                  <a href="{{ l_url('list/newest') }}" style={{color: "white"}}>---</a> open source projects,
                  <a href="{{ l_url('developers') }}" style={{color: "white"}}>---</a> developers
                </p>
                <div className="footer-social">
                  <a target="_blank" href="https://www.facebook.com/devhubdotio"><i className="fa fa-facebook"></i></a>
                  <a target="_blank" href="https://twitter.com/HubDevelop"><i className="fa fa-twitter"></i></a>
                  <a href="mailto:devhub.io@gmail.com"><i className="fa fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">Website </h2>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="//status.devhub.io/">Status</a></li>
                  <li><a href="#">API</a></li>
                  <li><a href="{{ l_url('feed') }}" target="_blank" title="RSS Link">Feed</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">Category</h2>
                <ul>
                  <li><a href="{{ l_url('category', [$item->slug]) }}">---</a></li>
                  <li><a href="{{ l_url('developers') }}">Developers</a></li>
                  <li><a href="{{ l_url('topics') }}">Topics</a></li>
                  <li><a href="{{ l_url('news') }}">News</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-newsletter">
                <h2 className="footer-wid-title">Weekly Subscription</h2>
                <p>A free, once–weekly e-mail round-up of DevelopHub news and articles.</p>
                <div className="newsletter-form">
                  <form action="#">
                    <input type="email" placeholder="Enter Email" />
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="copyright">
                <p>&copy; 2016 - 2017 DevHub.io. All Rights Reserved.</p>
                <p style={{fontSize: '10px', color: '#bdbdbd'}}>Disclaimer: This project is not affiliated with the GitHub company in any way.
                  <br/> GitHub® and the Octocat® logo are registered trademarks of GitHub, Inc., used with permission—https://github.com/logos</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-card-icon">

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" dataDismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Login</h4>
            </div>
            <div className="modal-body">
              <form action="#" method="post">
                <div className="form-group">
                  <label for="inputEmail1">Email address</label>
                  <input type="email" className="form-control" id="inputEmail1" placeholder="Email" name="email" />
                </div>
                <div className="form-group">
                  <label for="inputPassword">Password</label>
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" />
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" name="is_remember" value="1" /> Remember Password
                  </label>
                </div>
                <button type="submit" className="btn btn-default">Login</button>
              </form>
              <hr />
                <h5>Another Account login</h5>
                <a href="{{ l_url('socialite/github/redirect') }}" style={{marginRight: '30px'}}><i className="fa fa-github fa-3x"/></a>
                <a href="{{ l_url('socialite/bitbucket/redirect') }}" style={{marginRight: '30px'}}><i className="fa fa-bitbucket fa-3x"/></a>
            </div>
          </div>
        </div>
      </div>

      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js" />
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js" />
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js" />
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.min.js" />
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/peity/3.2.0/jquery.peity.min.js" />
      <script async src='https://www.google-analytics.com/analytics.js' />
      <script type="text/javascript" src="/static/js/main.js" />
    </body>
  </div>
)
