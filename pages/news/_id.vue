<template>
  <div>
    <page-title :title="article.title" :category="article.category.name"/>

    <!-- news-section -->
    <section class="blog-details sec-pad-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12 content-side">
            <div class="blog-details-content">
              <div class="content-style-one">
                <figure class="img-box"><img :src="article.cover.length > 0 ? article.cover : '/images/resource/news-details.jpg'" width="740" height="440" alt=""></figure>
                <div class="text" v-html="article.content">&nbsp;</div>
              </div>
              <div class="post-share">
                <ul>
                  <li><a href="#"><i class="fa fa-twitter"/></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"/></a></li>
                  <li><a href="#"><i class="fa fa-facebook"/></a></li>
                  <li><a href="#"><i class="fa fa-skype"/></a></li>
                </ul>
              </div>
              <div v-if="false" class="comment-area">
                <h3>评论</h3>
                <div class="single-comment">
                  <figure class="thumb-box"><img src="/images/resource/comment-1.jpg" alt=""></figure>
                  <div class="content-box">
                    <div class="comment-title">Raimund Kunze</div>
                    <div class="comment-time">Aug 02, 2018</div>
                    <div class="text">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant tota rem ape riamipsa eaque  quae.
                    </div>
                    <div class="replay"><a href="#">回复</a></div>
                  </div>
                </div>
                <div class="single-comment replay">
                  <figure class="thumb-box"><img src="/images/resource/comment-2.jpg" alt=""></figure>
                  <div class="content-box">
                    <div class="comment-title">Siglinde Born</div>
                    <div class="comment-time">Aug 02, 2018</div>
                    <div class="text">
                      Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant tota rem ape riamipsa.
                    </div>
                    <div class="replay"><a href="#">回复</a></div>
                  </div>
                </div>
              </div>
              <div v-if="false" class="comment-form">
                <h3>留言</h3>
                <form action="#" method="post">
                  <div class="row">
                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="text" name="name" placeholder="Name" required="">
                    </div>
                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                      <input type="email" name="email" placeholder="Email" required="">
                    </div>
                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea placeholder="Message" name="message" required=""/>
                    </div>
                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" class="theme-btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
            <div class="sidebar default-sidebar-content">
              <div class="sidebar-post sidebar-widget">
                <div class="sidebar-title"><h3>最新</h3></div>
                <div class="content-box">
                  <div v-for="item in newest" :key="item.id" class="single-post">
                    <figure class="post-thumb"><nuxt-link :to="`/news/${item.id}`"><img :src="item.cover.length > 0 ? item.cover : '/images/resource/post-1.jpg'" width="85" height="50" alt=""></nuxt-link></figure>
                    <div class="text"><nuxt-link :to="`/news/${item.id}`">{{ item.title }}</nuxt-link></div>
                    <div class="post-info">{{ item.created_at | date }}</div>
                  </div>
                </div>
              </div>
              <div v-if="false" class="sidebar-categories sidebar-widget">
                <div class="sidebar-title"><h3>分类</h3></div>
                <ul class="categories-list">
                  <li><a href="#">Financial Advise</a></li>
                  <li><a href="#">Businee Growth</a></li>
                  <li><a href="#">Investment Marketing</a></li>
                  <li><a href="#">Business Consulting</a></li>
                  <li><a href="#">Advanced Analytics</a></li>
                  <li><a href="#">Investment Marketing</a></li>
                </ul>
              </div>
              <div v-if="false" class="sidebar-archives sidebar-widget">
                <div class="sidebar-title"><h3>存档</h3></div>
                <ul class="archives-list">
                  <li><a href="#">April 2018</a></li>
                  <li><a href="#">May 2018</a></li>
                  <li><a href="#">June 2018</a></li>
                  <li><a href="#">July 2018</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- news-section -->
  </div>
</template>

<script>
import { getArticle, getArticles } from '@/api/ext'
import PageTitle from '@/components/general/page-title'

export default {
  components: { PageTitle },
  async asyncData({ params, error }) {
    const newestArticles = await getArticles({ page: 1, per_page: 5, order_by: 'created_at', order_type: 'desc' }).then(res => {
      if (res.code === 200) {
        return res.data
      } else {
        return []
      }
    }).catch(() => {
      return []
    })

    const article = await getArticle(params.id).then((res) => {
      if (res.code === 200) {
        return res
      } else {
        error({ statusCode: 404, message: 'Post not found' })
      }
    }).catch(() => {
      error({ statusCode: 404, message: 'Post not found' })
    })
    return { article: article, newest: newestArticles }
  },
  filters: {
    date(val) {
      if (val !== undefined && val !== null && val !== '') {
        const date = new Date(val)
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
      } else {
        return ''
      }
    }
  }
}
</script>
