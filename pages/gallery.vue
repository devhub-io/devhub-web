<template>
  <div>
    <!-- page-title -->
    <page-title title="图片展示"/>
    <!-- page-title end -->

    <!-- gallery-section -->
    <section class="gallery-section overlay-style-one gallery-page">
      <div class="container">
        <div class="sortable-masonry mixed-gallery-section">
          <ul class="filter-tabs filter-btns post-filter centred">
            <li class="active filter" data-role="button" data-filter=".all">
              全部
              <i class="dots"/>
            </li>
            <li class="filter" data-role="button" data-filter=".restaurent">玻璃大峡谷
              <i class="dots"/>
            </li>
            <li class="filter" data-role="button" data-filter=".health">国际漂流赛场
              <i class="dots"/>
            </li>
            <li class="filter" data-role="button" data-filter=".swimming">丛林飞跃
              <i class="dots"/>
            </li>
            <li class="filter" data-role="button" data-filter=".conference">古龙九瀑
              <i class="dots"/>
            </li>
          </ul>
          <div class="row items-container clearfix">
            <div v-for="item in images" :key="item.flag" class="col-lg-4 col-md-6 col-sm-12 column masonry-item">
              <div class="inner-box">
                <figure class="image-box">
                  <img :src="item.url + '?w=370'" alt="">
                  <!--Overlay Box-->
                  <div class="overlay-box">
                    <div class="overlay-inner">
                      <div class="content">
                        <a :href="item.url" target="_blank" class="lightbox-image"><i class="fa fa-search"/></a>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <ul v-if="images.length > 0" class="pagination centred clearfix">
          <li v-show="page - 1 > 0"><nuxt-link :to="`/gallery?page=${page - 1}`"><i class="flaticon-left-arrow"/></nuxt-link></li>
          <li><a :href="void(0)" class="active">{{ page }}</a></li>
          <li v-show="page * per_page + 1 <= total"><nuxt-link :to="`/gallery?page=${page + 1}`"><i class="flaticon-right-arrow"/></nuxt-link></li>
        </ul>
      </div>
    </section>
    <!-- gallery-section end -->
  </div>
</template>

<script>
import PageTitle from '@/components/general/page-title'
import { getImages } from '@/api/ext'

export default {
  layout: 'default',
  watchQuery: ['page'],
  components: { PageTitle },
  async asyncData({ query }) {
    const page = 'page' in query ? parseInt(query.page) : 1
    const perPage = 12
    let total = 0
    const images = await getImages({ folder_id: 2, per_page: perPage, page: page }).then(res => {
      if (res.code === 200) {
        total = res.total
        return res.data
      } else {
        return []
      }
    })

    return { images: images, total: total, page: page, per_page: perPage }
  }
}
</script>
