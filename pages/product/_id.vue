<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
  <div>
    <!-- page-title -->
    <page-title :title="goods.goods_name" category="项目详情"/>
    <!-- page-title end -->

    <!-- room-details -->
    <section class="room-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12 column">
            <div class="room-details-content">
              <div class="contnt-style-one">
                <h2>{{ goods.goods_name }}</h2>
                <ul v-if="false" class="rating">
                  <li><i class="fa fa-star-o"/></li>
                  <li><i class="fa fa-star-o"/></li>
                  <li><i class="fa fa-star-o"/></li>
                  <li><i class="fa fa-star-o"/></li>
                  <li><i class="fa fa-star-o"/></li>
                </ul>
                <div style="height: 30px"/>
                <div v-swiper:mySwiper="swiperOption" class="banner-swiper">
                  <div class="swiper-wrapper">
                    <div v-for="banner in banners" :key="banner" class="swiper-slide">
                      <img :src="banner" class="swiper-image">
                    </div>
                  </div>
                  <div class="swiper-pagination swiper-pagination-bullets"/>
                </div>
                <ul class="img-list clearfix">
                  <li v-for="(item, index) in thumbnails" :key="index" class="img-box" @click="slideTo(index)"><figure><img :src="item" alt=""></figure></li>
                </ul>
                <div class="text">
                  <p v-html="raw(goods.intro)"/>
                </div>
              </div>
              <div v-if="goods.booked_notice.length > 0" class="content-style-two">
                <h3>预订须知</h3>
                <div class="text" v-html="raw(goods.booked_notice)" />
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 column">
            <div class="room-sidebar">
              <div class="filter-content">
                <div class="title"><h3>购买</h3></div>
                <form action="#" method="post" class="content">
                  <div class="single-item">
                    <div class="form-group">
                      <label>入园日期</label>
                      <i class="fa fa-angle-down"/>
                      <input id="datepicker" v-model="form.travel_date" type="text" name="date" placeholder="入园日期" autocomplete="off" @click="selectDate">
                    </div>
                  </div>

                  <div class="single-item">
                    <div class="form-group select-box">
                      <label>购买数据</label>
                      <select v-model="form.buy_number" class="custom-select-box">
                        <option :value="0" selected="selected">选择购买数据</option>
                        <option v-for="i in 20" :key="i" :value="i">{{ i }}张</option>
                      </select>
                    </div>
                  </div>

                  <div class="single-item">
                    <div class="form-group">
                      <label>姓名</label>
                      <input v-model="form.contact_name" type="text" name="name" placeholder="姓名" required="">
                    </div>
                  </div>

                  <div class="single-item">
                    <div class="form-group">
                      <label>手机</label>
                      <input v-model="form.contact_mobile" type="text" name="name" placeholder="手机" required="">
                    </div>
                  </div>

                  <div class="single-item">
                    <div class="form-group">
                      <label>价格</label>
                      <div class="price">￥{{ price }}</div>
                    </div>
                  </div>

                  <div class="single-item">
                    <div class="form-group">
                      <div class="link"><button type="button" class="theme-btn" @click="submitOrder">提交订单</button></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="similar-room room-section overlay-style-one">
          <div class="sec-title left">相关推荐</div>
          <div class="row">
            <div v-for="item in list" :key="item.goods_id" class="col-lg-4 col-md-6 col-sm-12">
              <div class="single-item inner-box">
                <figure class="image-box">
                  <img :src="item.cover.length > 0 ? item.cover + '?h=230' : '/images/resource/4.jpg'" width="370" height="230" alt="">
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
                  <div class="price">￥{{ item.price }}<span>起</span></div>
                  <ul v-if="false" class="rating">
                    <li><i class="fa fa-star-o"/></li>
                    <li><i class="fa fa-star-o"/></li>
                    <li><i class="fa fa-star-o"/></li>
                    <li><i class="fa fa-star-o"/></li>
                    <li><i class="fa fa-star-o"/></li>
                  </ul>
                  <div style="height: 30px"/>
                  <h3><nuxt-link :to="`/product/${item.goods_id}`">{{ item.goods_name }}</nuxt-link></h3>
                  <div class="text">{{ item.intro | sub }}</div>
                  <ul class="info-box">
                    <li class="link"><nuxt-link :to="`/product/${item.goods_id}`" class="theme-btn-three">立即预订</nuxt-link></li>
                    <li v-if="false"><i class="flaticon-television"/></li>
                    <li v-if="false"><i class="flaticon-wifi-connection-signal-symbol"/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- room-details end -->

    <!-- Date Modal -->
    <div v-show="showDateModal" id="dateModal" style="display: block" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="dateModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">入园日期</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="showDateModal = false">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <calendar :goods-id="goods.goods_id" @selectDay="selectDay" />
          </div>
        </div>
      </div>
    </div>

    <!-- Login Modal -->
    <div v-show="showLoginModal" id="loginModal" style="display: block" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="loginModalLabel" class="modal-title">登录/注册</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="showLoginModal = false">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <login @registerSuccess="registerSuccess" @loginSuccess="registerSuccess" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsList, getGoods, createOrder } from '@/api/ext'
import PageTitle from '@/components/general/page-title'
import Calendar from '@/components/general/calendar'
import Login from '@/components/business/login'

export default {
  components: { PageTitle, Calendar, Login },
  async asyncData({ params, error }) {
    const id = 'id' in params ? parseInt(params.id) : 0
    const goods = await getGoods(id).then((res) => {
      if (res.code === 200) {
        return res
      } else {
        error({ statusCode: 404, message: 'Post not found' })
      }
    })
    const banners = []
    const thumbnails = []
    goods.image_src.forEach(i => {
      banners.push(i + '?w=770&h=450')
      thumbnails.push(i + '?w=120&h=70')
    })
    const goodsList = await getGoodsList({ per_page: 3, page: 1 }).then((res) => {
      if (res.code === 200) {
        return res.data
      } else {
        return []
      }
    })

    return { goodsId: id, list: goodsList, goods: goods, banners: banners, thumbnails: thumbnails }
  },
  filters: {
    sub(val) {
      if (val.length >= 120) {
        return val.substring(0, 120) + '...'
      } else if (val.length > 0) {
        return val
      } else {
        return ''
      }
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        autoplay: true
      },
      price: 0,
      form: {
        goods_id: 0,
        travel_date: '',
        buy_number: 0,
        contact_name: '',
        contact_mobile: ''
      },
      showDateModal: false,
      showLoginModal: false
    }
  },
  methods: {
    slideTo(index) {
      this.mySwiper.slideTo(index, 1000, false)
    },
    raw(val) {
      return val.replace(/\n/g, '<br>')
    },
    selectDate() {
      this.showDateModal = true
    },
    selectDay(data) {
      this.price = data.selling_price
      this.form.travel_date = data.date
      this.showDateModal = false
    },
    submitOrder() {
      if (this.form.travel_date.length <= 0) {
        this.$Alert.info({ content: '请选择入园日期' })
        return false
      }
      if (this.form.buy_number <= 0) {
        this.$Alert.info({ content: '请选择购买数据' })
        return false
      }
      if (this.form.contact_name.length <= 0) {
        this.$Alert.info({ content: '请填写姓名' })
        return false
      }
      if (this.form.contact_mobile.length <= 0) {
        this.$Alert.info({ content: '请填写手机' })
        return false
      }
      if (!/^1\d{10}$/.test(this.form.contact_mobile)) {
        this.$Alert.info({ content: '手机格式不正确' })
        return false
      }
      this.form.goods_id = this.goodsId
      createOrder(this.form).then(res => {
        if (res.code === 200) {
          this.$router.push(`/pay/${res.order_no}`)
        } else if (res.code === 40001 || res.code === 40002 || res.code === 40003) {
          this.showLoginModal = true
        } else {
          this.$Alert.info({ content: res.message })
        }
      })
    },
    registerSuccess() {
      this.showLoginModal = false
    },
    loginSuccess() {
      this.showLoginModal = false
    }
  }
}
</script>

<style scoped>
  .price {
    color: #0a1f26;
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 50px;
  }
  .banner-swiper {
    margin-bottom: 15px;
    overflow-y: hidden;
  }
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
