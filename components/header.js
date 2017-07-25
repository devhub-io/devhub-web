import Link from 'next/link'

export default () => (
  <header id="main-nav" className="active">
    <div className="container">
      <a id="navigation" href="#"><i className="fa fa-bars"/></a>

      <div id="slide_out_menu">
        <a href="#" className="menu-close"><i className="fa fa-times"/></a>
        <div className="logo">DevHub.io</div>
        <ul>
          <li><Link href="/developers"><a>Developers</a></Link></li>
          <li><Link href="/topics"><a>Topics</a></Link></li>
          <li><Link href="/news"><a>News</a></Link></li>
          <li><a href="#">My account</a></li>
          <li><Link href="/Sites"><a>Sites</a></Link></li>
          <li><a href="#" className="btn btn-blue">Search...</a></li>
        </ul>

        <div className="slide_out_menu_footer">
          <div className="more-info">
            <p>Made with love by <a href="http://getcraftwork.com">Craft Work</a></p>
            <p>Developed by <a href="http://ruibogasdesign.net/">Rui Bogas</a></p>
          </div>
          <ul className="socials">
            <li><a href="#"><i className="fa fa-twitter"/></a></li>
            <li><a href="#"><i className="fa fa-facebook"/></a></li>
            <li><a href="#"><i className="fa fa-google-plus"/></a></li>
            <li><a href="#"><i className="fa fa-tumblr"/></a></li>
            <li><a href="#"><i className="fa fa-pinterest-p"/></a></li>
            <li><a href="#"><i className="fa fa-linkedin"/></a></li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <ul className="left">
            <li><Link href="/developers"><a>Developers</a></Link></li>
            <li><Link href="/topics"><a>Topics</a></Link></li>
            <li><Link href="/news"><a>News</a></Link></li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <Link href="/"><a className="logo">DevHub.io</a></Link>
        </div>
        <div className="col-md-4">
          <ul className="right">
            <li><a href="#" className="help">My account</a></li>
            <li><Link href="/sites"><a>Sites</a></Link></li>
            <li><a href="#" className="btn btn-blue">Search...</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)
