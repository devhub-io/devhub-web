/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="user-menu">
                  <ul>
                    <li><Link to="/"><i className="fa fa-user" />My Account</Link></li>
                    <li><Link to="/sites"><i className="fa fa-sitemap" />Sites</Link></li>
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
                  <h1><Link to="/"><span>Dev</span>Hub</Link></h1>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="shopping-item">
                  <form action="{{ l_url('search') }}">
                    <input type="search" name="keyword" value="" placeholder="Search" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
