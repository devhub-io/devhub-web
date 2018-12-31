<template>
  <div class="boxed_wrapper">
    <!-- Main Header -->
    <header class="main-header">
      <!-- header-top -->
      <div class="header-top clearfix">
        <div class="left-content">
          <ul class="content-box">
            <li><a href="#"><i class="fa fa-envelope"/>服务热线：0763-5851668、5851608</a></li>
            <li><a href="#"><i class="fa fa-globe"/>地址：清远市清新区三坑滩（沿S114国道迳口入二公里）</a></li>
          </ul>
        </div>
        <div class="right-content">
          <ul class="social-share social-box" data-initialized="true">
            <li><a href="#" class="icon-weibo"/></li>
            <li><a href="#" class="icon-qq"/></li>
            <li><a href="#" class="icon-qzone"/></li>
          </ul>
        </div>
        <div class="right-content">
          <ul v-if="isLogin" class="social-share social-box" data-initialized="true">
            <li><nuxt-link to="/user">用户中心</nuxt-link></li>
            <li><nuxt-link to="/logout">退出</nuxt-link></li>
            <li>&nbsp;</li>
          </ul>
          <ul v-else class="social-share social-box" data-initialized="true">
            <li><nuxt-link to="/login">登录/注册</nuxt-link></li>
            <li>&nbsp;</li>
          </ul>
        </div>
      </div><!-- header-top end -->

      <!-- header-bottom -->
      <div class="header-bottom clearfix">
        <figure class="logo-box"><a href="/" class="header-title">古龙峡</a></figure>
        <div class="menu-area">
          <header-nav />
          <div class="link"><nuxt-link to="/product" class="theme-btn">在线预订</nuxt-link></div>
        </div>
      </div><!-- header-bottom end -->

      <!--Sticky Header-->
      <div class="sticky-header">
        <div class="container clearfix">
          <figure class="logo-box"><nuxt-link to="/" class="header-title">古龙峡</nuxt-link></figure>
          <div class="menu-area">
            <header-nav />
          </div>
        </div>
      </div><!-- sticky-header end -->
    </header>
    <!-- End Main Header -->

    <nuxt/>

    <!-- main-footer -->
    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 footer-column">
            <div class="logo-widget footer-widget">
              <figure class="footer-logo">古龙峡</figure>
              <div class="text">
                <p>清远古龙峡原生态旅游区是国家体育旅游示范基地、国家AAAA级旅游景区、广东省漂流行业的标准化服务示范试点企业， 获颁2017中国旅游总评榜景区人气奖。</p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12 big-column">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 footer-column">
                <div class="service-widget footer-widget">
                  <div class="footer-title">服务</div>
                  <ul class="list">
                    <li><a href="#">景区介绍</a></li>
                    <li><a href="#">景区动态 </a></li>
                    <li><a href="#">国际漂流</a></li>
                    <li><a href="#">古龙九瀑</a></li>
                    <li><nuxt-link to="/contact">联系我们</nuxt-link></li>
                    <li><nuxt-link to="/product">在线预订</nuxt-link></li>
                    <li><a href="#">网站地图</a></li>
                    <li><a href="#">标准化信息平台</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 footer-widget">
                <div class="contact-widget footer-widget">
                  <div class="footer-title">联系信息</div>
                  <div class="text">服务热线：0763-5851668、5851608</div>
                  <div class="phone">传真：0763-5851707</div>
                  <div class="mail">地址：清远市清新区三坑滩（沿S114国道迳口入二公里）</div>
                  <div
                    class="social-share footer-social"
                    data-disabled="google,twitter,facebook"
                    data-wechat-qrcode-title="请打开微信扫一扫"/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div class="newsletter-widget footer-widget">
              <div class="footer-title">友情链接</div>
              <div class="text">古龙峡漂流   清远漂流   佛山不锈钢门厂   不锈钢门   石墨坩埚   工业脚轮   阳光板厂家   贴金箔 <br>
                自粘墙纸   海洋国旅   火商网   活动板房   全铝家居型材   液体灌装机   喷漆房   大理石瓷砖   清远旅游   丛林飞跃   玻璃大峡谷   </div>
              <div class="subscribe-form" style="display: none;">
                <form action="#" method="post">
                  <div class="form-group">
                    <input type="email" name="email" placeholder="Email" required="">
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- main-footer end -->

    <!-- footer-bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 column">
            <div class="copyright">Copyright © 2018 清远市清新区古龙峡生态旅游娱乐有限公司( <a href="http://www.gulongxia.com">www.gulongxia.com</a> ) All Rights Reserved.</div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 column">
            <ul class="footer-nav">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- footer-bottome end -->

    <!--Scroll to top-->
    <button class="scroll-top scroll-to-target" data-target="html">
      <span class="fa fa-long-arrow-up"/>
    </button>
  </div>
</template>

<script>
import HeaderNav from '~/components/general/nav.vue'

export default {
  components: {
    HeaderNav
  },
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    const token = this.$storage.getUniversal('token')
    if (token !== undefined && token !== null && token !== '') {
      this.isLogin = true
    }
  }
}
</script>
