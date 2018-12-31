<template>
  <div>
    <!-- page-title -->
    <page-title title="游玩项目" />
    <!-- page-title end -->

    <!-- room-section -->
    <section class="room-list overlay-style-one sec-pad-2">
      <div class="container">
        <div v-for="item in goods" :key="item.goods_id" class="single-room-list inner-box">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 img-column">
              <figure class="image-box">
                <img :src="item.cover.length > 0 ? item.cover + '?h=270' : 'images/resource/room-7.jpg'" width="370" height="270" alt="">
                <!--Overlay Box-->
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <nuxt-link :to="`/product/${item.goods_id}`" class="link"><i class="icon fa fa-link"/></nuxt-link>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12 content-column">
              <div class="content-box clearfix">
                <div class="left-content">
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
                  <ul v-if="false" class="info-box">
                    <li><i class="flaticon-television"/></li>
                    <li><i class="flaticon-wifi-connection-signal-symbol"/></li>
                    <li><i class="flaticon-mug"/></li>
                    <li><i class="flaticon-bathtub"/></li>
                  </ul>
                  <div style="height: 55px"/>
                </div>
                <div class="right-content">
                  <div class="price">￥{{ item.price }}<span>起</span></div>
                  <div class="link"><nuxt-link :to="`/product/${item.goods_id}`" class="theme-btn">购买</nuxt-link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="lastPage > page" class="link-btn centred" @click="morePage"><a :href="void(0)" class="theme-btn-two">查看更多</a></div>
      </div>
    </section>
    <!-- room-section end -->
  </div>
</template>

<script>
import { getGoodsList } from '@/api/ext'
import PageTitle from '@/components/general/page-title'

export default {
  watchQuery: ['page'],
  components: { PageTitle },
  async asyncData({ query }) {
    const page = 'page' in query ? parseInt(query.page) : 1
    const perPage = 5
    let lastPage = 1
    const goods = await getGoodsList({ per_page: perPage, page: page }).then((res) => {
      if (res.code === 200) {
        lastPage = res.last_page
        return res.data
      } else {
        return []
      }
    })

    return { goods: goods, total: 0, page: page, perPage: perPage, lastPage: lastPage }
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
  methods: {
    morePage() {
      getGoodsList({ per_page: this.perPage, page: this.page + 1 }).then((res) => {
        if (res.code === 200) {
          res.data.forEach(i => {
            this.goods.push(i)
            this.page = this.page + 1
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .left-content {
    width: 600px;
  }
</style>
