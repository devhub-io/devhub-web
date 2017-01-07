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
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer-top-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-about-us">
                  <h2><span>DevHub</span></h2>
                  <p>About Devhub</p>
                  <p>
                    Currently tracking
                    <a href="{{ l_url('list/newest') }}" style={{ color: 'white' }}>0</a> open source projects,
                    <a href="{{ l_url('developers') }}" style={{ color: 'white' }}>0</a> developers
                  </p>
                  <div className="footer-social">
                    <a target="_blank" href="#"><i className="fa fa-facebook" /></a>
                    <a target="_blank" href="https://twitter.com/HubDevelop"><i className="fa fa-twitter" /></a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="footer-menu">
                  <h2 className="footer-wid-title">Website </h2>
                  <ul>
                    <li><a href="#">@lang('front.about')</a></li>
                    <li><a href="#">@lang('front.contact_us')</a></li>
                    <li><a href="//status.devhub.io/">@lang('front.status')</a></li>
                    <li><a href="#">@lang('front.api')</a></li>
                    <li><a href="{{ l_url('feed') }}" target="_blank" title="RSS Link">Feed</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="footer-menu">
                  <h2 className="footer-wid-title">Category </h2>
                  <ul>
                    <li><a href="{{ l_url('developers') }}">Developers</a></li>
                    <li><a href="{{ l_url('news') }}">News</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="footer-newsletter">
                  <h2 className="footer-wid-title">Weekly </h2>
                  <p>@lang('front.weekly_subtitle')</p>
                  <div className="newsletter-form">
                    <form action="#">
                      <input type="email" placeholder="@lang('front.enter_email')" />
                      <input type="submit" value="@lang('front.subscribe')" />
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
                  <p style={{ fontSize: '10px', color: '#bdbdbd' }}>Disclaimer: This project is not affiliated with the GitHub company in any way.
                    <br /> GitHub® and the Octocat® logo are registered trademarks of GitHub, Inc., used with permission—https:\/\/github.com/logos</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-card-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
