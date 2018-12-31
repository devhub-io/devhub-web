<template>
  <div>
    <page-title title="订单列表" category="用户中心" />

    <!-- START: USER PROFILE -->
    <div class="row user-profile">
      <div class="container">
        <div class="col-md-10 col-sm-10">
          <div class="tab-content">
            <div id="booking" class="tab-pane active">
              <div class="col-md-12">
                <div v-for="item in orders" :key="item.order_no" :class="{ 'item-entry': true, completed: item.order_status === 1 ||item.order_status === 2 }">
                  <span>订单编号: {{ item.order_no }}</span>
                  <div class="item-content">
                    <div class="item-body">
                      <div class="col-md-2 col-sm-2 clear-padding text-center">
                        <img src="assets/images/offer1.jpg" alt="cruise">
                      </div>
                      <div class="col-md-6 col-sm-6">
                        <h4>{{ item.goods_name }}</h4>
                        <p>游玩日期: {{ item.travel_date }} </p>
                        <p>购买数量: {{ item.buy_number }} </p>
                        <p>联系人姓名: {{ item.contact_name }} </p>
                        <p>联系人手机: {{ item.contact_mobile }} </p>
                        <p>订单状态: {{ item.order_status_name }} </p>
                      </div>
                      <div v-if="item.order_status !== 0" class="col-md-3 col-sm-3">
                        <p class="confirmed"><i class="fa fa-check"/>确认</p>
                      </div>
                      <div v-if="item.order_status === 0" class="col-md-3 col-sm-3">
                        <p><nuxt-link :to="`/pay/${item.order_no}`">支付</nuxt-link></p>
                      </div>
                      <div v-if="item.order_status === 9" class="col-md-3 col-sm-3">
                        <p><a href="#">提交游记</a></p>
                      </div>
                    </div>
                    <div class="item-footer">
                      <p><strong>下单时间:</strong>{{ item.created_at }}<strong>订单金额:</strong> ￥{{ item.selling_price }}</p>
                    </div>
                    <div class="clearfix"/>
                  </div>
                </div>
                <div v-if="false" class="text-center load-more">
                  <a href="#">查看更多</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: USER PROFILE -->
  </div>
</template>

<script>
import PageTitle from '@/components/general/page-title'
import { getOrders } from '@/api/ext'

export default {
  components: { PageTitle },
  data() {
    return {
      orders: []
    }
  },
  created() {
    const token = this.$storage.getUniversal('token')
    if (token === undefined || token === null || token === '') {
      this.$router.push('/login')
    }

    this.getOrders()
  },
  methods: {
    getOrders() {
      getOrders().then((res) => {
        if (res.code === 200) {
          this.orders = res.data
        } else if (res.code === 40001 || res.code === 40002 || res.code === 40003) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
  .user-profile {
    padding: 60px 0px;
    background: #f7f7f7;
    overflow: hidden;
  }
  .user-profile-tabs {
    margin-bottom: 40px;
  }
  .user-profile-tabs  i {
    display: block;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .user-profile-tabs .nav-tabs > li {
    float: none !important;
    border-bottom: 2px solid #0A3152;

  }
  .user-profile-tabs .nav-tabs > li a:hover {
    border: none;
    background: #F2676B;
  }
  .user-profile-tabs .nav-tabs > li > a {
    background: #07253F;
    border-radius: 0;
    color: #fff;
    font-weight: bold;
    line-height: 1.42857;
    padding: 20px 0;
    margin-right: 0px;
    border: none;
  }
  .user-profile .user-name h3 {
    margin: 0 0 15px;
  }
  .user-profile-tabs .nav-tabs > li.active > a,
  .user-profile-tabs .nav-tabs > li.active > a:focus {
    background: #F2676B;
    color: #fff;
    border: none;
  }
  .user-profile .brief-info {
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 0px 5px #e6e6e6;
    padding: 15px 15px 0px;
  }
  .user-profile .brief-info img {
    max-width: 100%;
    border-radius: 50%;
  }
  .user-profile .brief-info h5 i {
    margin-right: 10px;
    color: #F2676B;
  }
  .user-profile .brief-info h3 {
    margin-top: 0px;
  }
  .user-profile .brief-info-footer {
    background: #e6e6e6;
    margin:0px -15px;
    padding: 10px 15px;
  }
  .user-profile .brief-info-footer a {
    color: #07253F;
    margin-right: 10px;
    font-size: 13px;
  }
  .user-profile .brief-info-footer a:hover {
    color: #F2676B;
  }
  .user-profile .brief-info-footer a i {
    margin-right: 5px;
  }
  .most-recent-booking .field-entry .fa-star {
    color: #F19C4F;
    margin: 0px;
  }
  .most-recent-booking .field-entry {
    padding: 15px 15px;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
  }
  .most-recent-booking .field-entry p {
    margin: 0px;
  }
  .most-recent-booking .field-entry p i {
    margin: 0px 5px;
  }
  .most-recent-booking .field-entry a {
    color: #F2676B;
  }
  .confirmed {
    color: #009933;
  }
  .failed {
    color: #F2676B;
  }
  .most-recent-booking {
    box-shadow: 0px 0px 5px #e6e6e6;
    overflow: hidden;
    margin: 40px 0px;
    background: #fff;
  }
  .most-recent-booking h4,
  .user-profile-offer h4,
  .user-notification h4,
  .user-personal-info h4,
  .user-change-password h4,
  .user-preference h4 {
    background: #e6e6e6;
    margin: 0px;
    padding: 15px;
  }
  .user-profile-offer {
    box-shadow: 0px 0px 5px #e6e6e6;
    overflow: hidden;
    background: #fff;
  }
  .user-profile-offer .offer-body {
    padding: 15px 15px 0px;
    overflow: hidden;
  }
  .user-profile-offer .offer-body .offer-entry {
    overflow: hidden;
    margin-bottom: 20px;
  }
  .user-profile-offer .offer-left {
    color: #F2676B;
  }
  .user-profile-offer .offer-left p {
    font-size: 24px;
    font-weight: 600;
  }
  .user-profile-offer .offer-right p {
    line-height: 1.6;
  }
  .user-profile-offer .offer-right {
    border-left: 1px solid #e6e6e6;
  }
  .user-profile-offer .offer-entry a {
    color: #F2676B;
    font-weight: 600;
  }
  .user-notification {
    margin: 40px 0px;
    background: #fff;
  }
  .user-notification .notification-body {
    padding: 15px 15px 0px;
    overflow: hidden;
  }
  .notification-entry  p {
    margin: 0px;
    padding: 10px 0px;
    border-bottom: 1px solid #e6e6e6;
  }
  .notification-entry  p i {
    color: #fff;
    background: #F2676B;
    padding: 5px;
    margin-right: 5px;
  }
  .item-entry {
    overflow: hidden;
    margin: 40px 0px;
  }
  .item-entry span {
    background: #F2676B none repeat scroll 0 0;
    display: inline-block;
    font-weight: bold;
    padding: 8px 20px;
    color: #fff;
  }
  .item-content {
    background: #fff;
    padding: 15px;
    overflow: hidden;
  }
  .item-content img {
    max-width: 100%;
  }
  .item-content h4 {
    margin-top: 0px;
    font-size: 16px;
    font-weight: 600;
  }
  .item-content h4  i {
    color: #F19C4F;
  }
  .item-content p {
    margin-bottom: 5px;
    line-height: 2;
  }
  .item-content .confirmed i,
  .item-content .failed i {
    margin-right: 5px;
  }
  .item-content a {
    background: #f2676b none repeat scroll 0 0;
    color: #fff;
    display: inline-block;
    font-weight: 600;
    padding: 5px 15px;
  }
  .item-body {
    padding-bottom: 15px;
    overflow: hidden;
    border-bottom: 1px solid #e6e6e6;
  }
  .item-footer {
    padding-top: 10px;
  }
  .item-footer p {
    margin-bottom: 0px;
  }
  .item-footer a {
    display: inline-block;
    color: #f2676b;
    border: 2px solid #f2676b;
    background: transparent;
    margin-left: 30px;
  }
  .item-footer strong {
    margin: 0px 5px 0px 20px;;
  }
  .completed span {
    background: #e6e6e6;
    color: #07253F;
  }
  .user-personal-info,
  .user-change-password,
  .user-preference,
  .card-entry,
  .user-add-card {
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 0px 5px #e6e6e6;
  }
  .user-info-body,
  .change-password-body {
    padding: 20px 5px;
    overflow: hidden;
  }
  .user-personal-info label,
  .user-change-password label,
  .user-preference label {
    font-weight: normal;
  }
  .user-personal-info .form-control,
  .user-change-password .form-control,
  .user-preference .form-control {
    border-radius: 0px;
    margin-bottom: 15px;
    padding: 10px;
    height: 40px;
  }
  .user-personal-info textarea {
    height: auto !important;
  }
  .user-personal-info button,
  .user-change-password button,
  .user-preference button,
  .user-add-card button,
  .submit-complaint button {
    border: 0px;
    color: #fff;
    background: #00adef;
    padding: 10px 20px;
    margin-top: 20px;
    font-weight: bold;
  }
  .user-change-password button,
  .user-preference button,
  .user-add-card button,
  .submit-complaint button {
    margin-top: 5px;
  }
  .user-personal-info a {
    background: #F2676B;
    font-weight: bold;
    color: #fff;
    padding: 10px 20px;
    display: inline-block;
    margin-top: 20px;
  }
  .user-preference {
    margin: 40px 0px;
  }
  .user-preference .collapse {
    padding: 20px 5px;
    overflow: hidden;
  }
  .upload-pic {
    height: 30px;
  }
  .card-entry {
    padding: 15px;
    margin-bottom: 40px;
  }
  .card-entry .pull-right a {
    margin:0px 5px;
    color: #07253F;
    font-size: 20px;
  }
  .card-entry .pull-right a:hover {
    color: #F2676B;
  }
  .card-entry .card-type {
    overflow: hidden;
  }
  .card-entry .card-type h3 {
    margin-top: 0px;
  }
  .card-entry .card-type p {
    margin: 20px 0px 0px;
  }
  .primary-card span {
    color: #fff;
    background: #F2676B;
    display: block;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
  .primary-card h3 {
    margin-top: 0px;
  }
  .user-add-card {
    padding: 15px;
  }
  .user-add-card .form-control {
    border-radius: 0px;
    height: 40px;
    padding: 10px;
    margin-bottom: 15px;
  }
  .recent-complaint h3 {
    margin: 30px 0px 40px;
    position: relative;
  }
  .recent-complaint h3:after {
    content: "";
    width: 100px;
    height: 3px;
    background: #F2676B;
    position: absolute;
    top: 115%;
    left: 0;
  }
  .recent-complaint .nav-tabs > li > a {
    font-size: 16px;
    color: #07253F;
  }
  .recent-complaint .tab-content {
    background: #ffffff;
    padding: 20px;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
  }
  .recent-complaint .tab-content a {
    color: #07253F;
  }
  .recent-complaint .tab-content a:hover {
    color: #00adef;
  }
  .recent-complaint .tab-content a span {
    font-weight: 600;
  }
  .recent-complaint .tab-content  p:nth-child(2n+1) {
    background: #f7f7f7 none repeat scroll 0 0;
    margin: 0;
    padding: 15px;
  }
  .recent-complaint .tab-content  p:nth-child(2n+0) {
    background: #e6e6e6 none repeat scroll 0 0;
    margin: 0;
    padding: 15px;
  }
  .submit-complaint {
    overflow: hidden;
    background: #ffffff;
    padding: 20px 5px;
  }
  .submit-complaint .form-control {
    border-radius: 0px;
    height: 40px;
    padding: 10px;
    margin-bottom: 20px;
  }
  .submit-complaint textarea {
    height: auto !important;
  }
  @media (max-width: 767px) {
    .item-content img {
      margin-bottom: 20px;
    }
  }
</style>
