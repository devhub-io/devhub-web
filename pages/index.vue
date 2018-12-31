<template>
  <div>
    <!-- Main slider -->
    <section class="main-slider slider-style-one">
      <div class="container-fluid">
        <ul class="main-slider-carousel owl-carousel owl-theme slide-nav">
          <li class="slider-wrapper">
            <div class="image"><img src="/images/main-slider/1.jpg" alt=""></div>
            <div class="slider-caption">
              <div class="container">
                <div class="tp-title">至高<br >古龙峡玻璃大峡谷</div>
                <div class="text">古龙峡的万丈崖大瀑布，72米玻璃平台，1314米玻璃组合栈道，6.8米宽大型玻璃桥。 </div>
              </div>
            </div>
            <div class="slide-overlay"/>
          </li>
          <li class="slider-wrapper">
            <div class="image"><img src="/images/main-slider/2.jpg" alt=""></div>
            <div class="slider-caption">
              <div class="container">
                <div class="tp-title">至长<br >古龙峡玻璃大峡谷</div>
                <div class="text">古龙峡的万丈崖大瀑布、玻璃组合平台全景观光，加国际赛道全程漂流6.1公里。</div>
              </div>
            </div>
            <div class="slide-overlay"/>
          </li>
          <li class="slider-wrapper">
            <div class="image"><img src="/images/main-slider/3.jpg" alt=""></div>
            <div class="slider-caption">
              <div class="container">
                <div class="tp-title">至大<br >古龙峡玻璃大峡谷</div>
                <div class="text">玻璃大峡谷的高空游览线路长1314米，高空玻璃所占面积大。 </div>
              </div>
            </div>
            <div class="slide-overlay"/>
          </li>
          <li class="slider-wrapper">
            <div class="image"><img src="/images/main-slider/4.jpg" alt=""></div>
            <div class="slider-caption">
              <div class="container">
                <div class="tp-title">至宽<br >古龙峡玻璃大峡谷</div>
                <div class="text">玻璃大峡谷的高空游览线路长1314米，高空玻璃所占面积大。 </div>
              </div>
            </div>
            <div class="slide-overlay"/>
          </li>
        </ul>
      </div>
    </section>
    <!-- main-slider end -->

    <!-- filter-section -->
    <!--<section class="filter-section">
      <div class="container">
        <form method="post" action="#" class="filter-content clearfix">
          <div class="single-item">
            <div class="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" required="">
            </div>
          </div>
          <div class="single-item">
            <div class="form-group">
              <label>Arrival date</label>
              <i class="fa fa-angle-down"/>
              <input id="datepicker" type="text" name="date" placeholder="Arrival date">
            </div>
          </div>
          <div class="single-item">
            <div class="form-group">
              <label>Departure date</label>
              <i class="fa fa-angle-down"/>
              <input id="datepicker_1" type="text" name="date" placeholder="Departure date">
            </div>
          </div>
          <div class="single-item">
            <div class="form-group select-box">
              <label>Guests</label>
              <select class="custom-select-box">
                <option selected="selected">Guests</option>
                <option>Guests Lavel 1</option>
                <option>Guests Lavel 2</option>
                <option>Guests Lavel 3</option>
                <option>Guests Lavel 4</option>
              </select>
            </div>
          </div>
          <div class="single-item">
            <div class="form-group">
              <div class="link"><button type="submit" class="theme-btn">立即预订</button></div>
            </div>
          </div>
        </form>
      </div>
    </section>-->
    <!-- filter-section end -->

    <!-- room-section -->
    <section class="room-section overlay-style-one gray-bg sec-pad">
      <div class="container">
        <div class="top-title">
          <div class="sec-title">门票、漂流</div>
          <div class="title-text">Tickets, rafting</div>
        </div>
        <div class="row">
          <div v-for="item in goods" :key="item.goods_id" class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-item inner-box">
              <figure class="image-box">
                <img :src="item.cover.length > 0 ? item.cover + '?w=370&h=230' : '/images/resource/4.jpg'" width="370" height="230" alt="">
                <!--Overlay Box-->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <nuxt-link :to="`/product/${item.goods_id}`" class="link"><i class="icon fa fa-link"/></nuxt-link>
                    </div>
                  </div>
                </div>
              </figure>
              <div class="lower-content">
                <div class="price">￥{{ item.price }}<span><span>起</span></span></div>
                <ul v-if="false" class="rating">
                  <li><i class="fa fa-star-o"/></li>
                  <li><i class="fa fa-star-o"/></li>
                  <li><i class="fa fa-star-o"/></li>
                  <li><i class="fa fa-star-o"/></li>
                  <li><i class="fa fa-star-o"/></li>
                </ul>
                <h3><a href="room-details.html">{{ item.goods_name }}</a></h3>
                <div class="text">{{ item.intro }}</div>
                <ul class="info-box">
                  <li class="link"><nuxt-link :to="`/product/${item.goods_id}`" class="theme-btn-three">立即预订</nuxt-link></li>
                  <li v-if="false"><i class="flaticon-television"/></li>
                  <li v-if="false"><i class="flaticon-wifi-connection-signal-symbol"/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="link-btn centred"><nuxt-link to="/product" class="theme-btn-two">查看更多</nuxt-link></div>
      </div>
    </section>
    <!-- room-section end -->

    <!-- about-section -->
    <section class="about-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="about-content">
              <div class="sec-title left">清远古龙峡原生态旅游区</div>
              <div class="text">清远古龙峡原生态旅游区是国家体育旅游示范基地、国家AAAA级旅游景区、广东省漂流行业的标准化服务示范试点企业， 获颁2017中国旅游总评榜景区人气奖。</div>
              <div class="text">景区位于清远市清新区滨江峡谷，距离广州市区68公里，地处广清高速与清连高速（许广高速）及正在建设中的汕湛高速的交汇点。高差达千米的古龙大峡谷集瀑布、深潭、奇石、丛林于一体，悬崖对峙、奇峰耸立、银瀑飞溅，滩多水急。清代诗人袁枚以 “万山如浪涌，泉鸣溪涌流。浮云脚下踩，松涛景色殊”形容峡谷的壮美幽深。</div>
              <div class="text">依托大峡谷、大森林、大瀑布的独特地形地貌，古龙峡景区斥资数亿元打造了玻璃大峡谷、峡谷漂流、万丈悬瀑、丛林飞跃四大王牌产品。从水上飞驰，到陆地探险、空中揽瀑，古龙峡一日玩遍水陆空。</div>
              <div class="text">为创建国家5A景区，2018年古龙峡景区照按国际赛场标准新建了国际游客接待中心，融入了亚马逊部落的原始森林风格；国内首家配备冷热水洗浴系统，VIP先进服务系统，全面提升了游客的旅游体验。</div>
              <div class="link"><a href="about.html" class="theme-btn-two">景区介绍</a></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 clearfix">
            <div class="img-box">
              <figure class="img-three wow zoomIn animated"><img src="/images/resource/3.jpg" alt=""></figure>
              <figure class="img-two wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="/images/resource/2.jpg" alt=""></figure>
              <figure class="img-one wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="/images/resource/1.jpg" alt=""></figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- about-section end -->

    <!-- service-section -->
    <section class="service-section sec-pad">
      <div class="container">
        <div class="top-title">
          <div class="sec-title">景区特色</div>
          <div class="title-text">Scenic spot</div>
        </div>
        <div class="custom-tab-title">
          <ul class="tab-title clearfix">
            <li :class="tabIndex === 0 ? 'active' : ''" data-tab-name="details" @click="tabClick(0)">
              <div class="single-btn">
                <div class="icon-box"><i class="flaticon-coffee-cup"/></div>
                <div class="text">玻璃大峡谷</div>
              </div>
            </li>
            <li :class="tabIndex === 1 ? 'active' : ''" data-tab-name="review" @click="tabClick(1)">
              <div class="single-btn">
                <div class="icon-box"><i class="flaticon-mortar"/></div>
                <div class="text">国际漂流赛场</div>
              </div>
            </li>
            <li :class="tabIndex === 2 ? 'active' : ''" data-tab-name="review1" @click="tabClick(2)">
              <div class="single-btn">
                <div class="icon-box"><i class="flaticon-swimming-pool"/></div>
                <div class="text">丛林飞跃</div>
              </div>
            </li>
            <li :class="tabIndex === 3 ? 'active' : ''" data-tab-name="review2" @click="tabClick(3)">
              <div class="single-btn">
                <div class="icon-box"><i class="flaticon-lecture"/></div>
                <div class="text">古龙九瀑</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="tab-details-content">
          <div v-show="tabIndex === 0" id="details" class="tab-content">
            <div class="single-tab-content">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="img-box"><img src="/images/resource/7.jpg" alt=""></div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="content">
                    <div class="title">云天玻霸</div>
                    <div class="text">
                      <p>古龙峡景区历时三年、匠心打造的玻璃大峡谷，将市场主流的玻璃观光形态一网打尽，建成了世界首个集悬空玻璃平台、玻璃栈道、玻璃吊桥为一体的擎天巨作，并将玻璃观光组合悬浮到大自然的高山峡谷、瀑布激流中，气势磅礴而又和谐统一。通过全球征名，“云天玻霸”高票入选。</p>
                      <p>2018年6月28日，四项新的纪录，在清远古龙峡诞生。来自世界纪录协会（World Record Association）的美国认证官迈克·温特森和中方认证官张健，庄严的向世界宣布，清远古龙峡景区的悬空玻璃平台、玻璃吊桥、玻璃观光组合、丛林飞跃四个项目，挑战世界纪录成功。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="tabIndex === 1" id="review" class="tab-content">
            <div class="single-tab-content">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="img-box"><img src="/images/resource/service-2.jpg" alt=""></div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="content">
                    <div class="title">国际漂流</div>
                    <div class="text">
                      <p>古龙峡国际漂流赛场，多次承办国际自然水域漂流大赛。古龙峡国际漂流赛场赛道全程6063米，落差达378米，时速72公里，共分为“巅峰赛道”“极限赛道”两个赛段，被誉为：落差之王 漂流巅峰。</p>
                      <p>奥运冠军：孙淑伟、杨景辉、吴静钰等多次亲临古龙峡国际漂流赛场漂流。古龙峡漂流赛道的狂野落差、强烈节奏、原始生态、优质水源, 树立了中国漂流的新典范，被业界公认为的刺激、好玩的漂流。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="tabIndex === 2" id="review1" class="tab-content">
            <div class="single-tab-content">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="img-box"><img src="/images/resource/service-3.jpg" alt=""></div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="content">
                    <div class="title">丛林飞跃</div>
                    <div class="text">
                      <p>和玻璃大峡谷亲密握手，从万丈悬瀑飞驰而过，古龙峡的丛林飞跃项目，以垂直高差263米，创造了户外空中穿越的垂直极限。由法国、泰国、中国三国专家联合设计的丛林飞跃项目，从瀑布顶端开始滑翔，到漂流起点垂直降落，穿越距离3.13公里，设有19个无敌观景平台，经历13段障碍挑战、飞越6条壮丽的大瀑布，5段空中滑翔，2次垂直下降。并以最后一个高35米（相当12层楼高）的泰山跳完美收官。项目使用了世界先进安全的连续保护系统，并集聚了各国之长:法国的PETEL顶级户外装备, 泰国kyline adventure的精细施工，中国桂林悦动体育的品牌管理。游完玻璃大峡谷再去峡谷漂流，直接、快的方式就是：飞过去！</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="tabIndex === 3" id="review2" class="tab-content">
            <div class="single-tab-content">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="img-box"><img src="/images/resource/service-4.jpg" alt=""></div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="content">
                    <div class="title">古龙九瀑</div>
                    <div class="text">
                      <p>在高差近千米的万丈崖群峰的夹峙下，古龙峡河谷幽深，泉瀑飞泻，崖树斜逸，异草遍被，原始雨林遮天蔽日，一年四季清爽宜人。景物特色可用“奇，隐，俏，巧，幽，旷，惊，险，全，古”十个字来概括。峡谷内保存着3000万平方米亚热带丛林，森林覆盖率达到99.1%。负氧离子浓度高达16万/cm³，是洗心洗肺的大氧吧。</p>
                      <p>古龙九瀑，又名万丈崖瀑布群，位于古龙峡河谷，长度610米，总落差263米，终年水流充沛，是国内落差最大的阶梯瀑布群；古龙九瀑顾名思义是由九段瀑布组成的浩大瀑布群，一瀑九曲，一曲一瀑，一折一潭，其中主瀑布为云龙大瀑布，单体落差131米（从瀑布顶到水帘洞底），宽45米，犹如狂野的巨龙从天而降，气吞山河，在悬崖峭壁的撞击下，飞入峡谷激起惊涛骇浪。位于瀑布群入口的双龙瀑布，形似两条白龙，一曲一直，一隐一现，犹如双龙迎宾，沿着双龙瀑逆溪而上，林密谷幽，瀑流相伴，自下而上分布着天龙、藏龙、飞龙、见龙、猛龙、跃龙、云龙等九级阶梯瀑布，有的水帘悬挂，有的银珠飞溅，有的飞流直下。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- service-section end -->

    <!-- gallery-section -->
    <section class="gallery-section overlay-style-one gray-bg sec-pad centred">
      <div class="container-fluid">
        <div class="top-title">
          <div class="sec-title">图片展示</div>
          <div class="title-text">Photo Gallery</div>
        </div>
        <div class="gallery-slider">
          <div v-for="item in images" :key="item.flag" class="inner-box">
            <figure class="image-box">
              <img :src="item.url + '?w=365'" alt="">
              <!--Overlay Box-->
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div class="content">
                    <a :href="item.url" class="lightbox-image"><i class="fa fa-search"/></a>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <!-- gallery-section -->

    <!-- testimonial-section -->
    <section class="testimonial-section sec-pad centred">
      <div class="container">
        <div class="top-title">
          <div class="sec-title">漂流安全事项</div>
          <div class="title-text">Rafting Safety Precautions</div>
        </div>
        <div class="three-column-carousel">
          <div class="testimonial-content">
            <div class="author">清远漂流的准备</div>
            <div class="text">
              <p>到清远漂流要多带套衣服：漂流不可避免会“湿身”,上岸后没有干衣服换是很难受的。参加漂流不要穿皮鞋,平底拖鞋、塑料凉鞋和旅游鞋都可以。坏天气水...</p>
            </div>
          </div>
          <div class="testimonial-content">
            <div class="author">清远漂流的准备</div>
            <div class="text">
              <p>到清远漂流要多带套衣服：漂流不可避免会“湿身”,上岸后没有干衣服换是很难受的。参加漂流不要穿皮鞋,平底拖鞋、塑料凉鞋和旅游鞋都可以。坏天气水...</p>
            </div>
          </div>
          <div class="testimonial-content">
            <div class="author">清远漂流的准备</div>
            <div class="text">
              <p>到清远漂流要多带套衣服：漂流不可避免会“湿身”,上岸后没有干衣服换是很难受的。参加漂流不要穿皮鞋,平底拖鞋、塑料凉鞋和旅游鞋都可以。坏天气水...</p>
            </div>
          </div>
          <div class="testimonial-content">
            <div class="author">清远漂流的准备</div>
            <div class="text">
              <p>到清远漂流要多带套衣服：漂流不可避免会“湿身”,上岸后没有干衣服换是很难受的。参加漂流不要穿皮鞋,平底拖鞋、塑料凉鞋和旅游鞋都可以。坏天气水...</p>
            </div>
          </div>
          <div class="testimonial-content">
            <div class="author">清远漂流的准备</div>
            <div class="text">
              <p>到清远漂流要多带套衣服：漂流不可避免会“湿身”,上岸后没有干衣服换是很难受的。参加漂流不要穿皮鞋,平底拖鞋、塑料凉鞋和旅游鞋都可以。坏天气水...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- testimonial-section end -->

    <!-- video-section -->
    <section class="video-section" style="background-image: url('/images/background/1.jpg');">
      <div class="title centred">景区介绍</div>
      <div class="video-gallery">
        <div class="overlay-gallery">
          <div class="icon-holder">
            <div class="icon">
              <a class="html5lightbox" title="Video" href="https://youtu.be/yVb0mfmMV9w"><i class="flaticon-play"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- video-section end -->

    <!-- news-section -->
    <section class="news-section sec-pad">
      <div class="container">
        <div class="top-title clearfix">
          <div class="sec-title">景区新闻 媒体追踪</div>
          <div class="title-text">Scenic News, Media Tracking</div>
          <div class="top-link"><nuxt-link to="/news">查看更多</nuxt-link></div>
        </div>
        <div class="row">
          <div v-for="item in articles" :key="item.id" class="col-lg-4 col-md-6 col-sm-12 news-column">
            <div class="single-item">
              <div class="image">
                <img :src="item.cover.length > 0 ? item.cover : '/images/resource/news-1.jpg'" width="370" height="220" alt="">
                <div class="overlay">
                  <div class="overlay-content">
                    <div class="content">
                      <nuxt-link :to="`/news/${item.id}`" class="link-btn">
                        <i class="fa fa-link"/>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lower-content">
                <h3><a href="blog-details.html">{{ item.title }}</a></h3>
                <ul class="meta-content">
                  <li>by <a href="#">{{ item.author }}</a></li>
                  <li>on <span>{{ item.posted_at | date }}</span></li>
                </ul>
                <div class="text">{{ item.description }}</div>
                <div class="link"><nuxt-link :to="`/news/${item.id}`" class="theme-btn-three">阅读</nuxt-link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- news-section -->

    <!-- google-map -->
    <section class="google-map-section">
      <div class="google-map-area">
        <div id="dituContent" style="width:100%;height:500px;"/>
      </div>
      <div class="map-content">
        <div class="container">&nbsp;</div>
      </div>
      <div v-if="false" class="map-content">
        <div class="container">
          <div class="content">
            <h3>联系我们</h3>
            <form action="contact.html" method="post">
              <div class="form-group">
                <input type="text" name="name" placeholder="Your name" required="">
              </div>
              <div class="form-group">
                <input type="email" name="name" placeholder="Enter email" required="">
              </div>
              <div class="form-group">
                <textarea name="message" placeholder="Message"/>
              </div>
              <div class="form-group">
                <button type="submit" class="theme-btn">提交</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- google-map end -->
  </div>
</template>

<script>
import { getArticles, getImages, getGoodsList } from '@/api/ext'
import moment from 'moment'

export default {
  async asyncData() {
    const images = await getImages({ folder_id: 2 }).then(res => {
      if (res.code === 200) {
        return res.data
      } else {
        return []
      }
    })
    const articles = await getArticles({ per_page: 3, page: 1 }).then((res) => {
      if (res.code === 200) {
        return res.data
      } else {
        return []
      }
    })
    const goods = await getGoodsList({ per_page: 6, page: 1 }).then(res => {
      if (res.code === 200) {
        return res.data
      } else {
        return []
      }
    })

    return { articles: articles, images: images, goods: goods }
  },
  filters: {
    date(val) {
      if (val === '' || val === undefined || val === null) {
        return '-'
      } else {
        return moment(val).format('YYYY-MM-DD')
      }
    }
  },
  data() {
    return {
      tabIndex: 0
    }
  },
  created() {
    if (process.browser) {
      (function(s, o, g, r, a, m) {
        a = s.createElement(o)
        m = s.getElementsByTagName(o)[0]
        a.async = 1
        a.src = g
        m.parentNode.insertBefore(a, m)
      })(document, 'script', '/js/script.js', 'jq')
    }
  },
  methods: {
    tabClick(index) {
      this.tabIndex = index
    }
  }
}
</script>
