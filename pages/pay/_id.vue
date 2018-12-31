<template>
  <div>
    <!-- page-title -->
    <page-title title="订单支付"/>
    <!-- page-title end -->

    <div class="container booking-detail">
      <div id="billing-info" class="row tab-pane active">
        <div class="col-md-8 col-sm-8">
          <div class="passenger-detail">
            <h3>订单金额 ￥{{ order.selling_price }}</h3>
            <div class="passenger-detail-body">
              <div class="saved-card">
                <p>{{ order.goods_name }}</p>
                <p>游玩日期：{{ order.travel_date }}</p>
                <p>购买数量: {{ order.buy_number }} </p>
                <p>联系人姓名: {{ order.contact_name }} </p>
                <p>联系人手机: {{ order.contact_mobile }} </p>
              </div>
              <div class="payment-seperator clearfix"/>
              <div class="paypal-pay row">
                <h4>使用微信支付</h4>
                <div class="col-md-2 col-sm-2 col-xs-4">
                  <i class="fa fa-paypal"/>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-4">
                  <input name="pay" type="radio" checked>
                </div>
              </div>
              <div style="margin-bottom: 10px">&nbsp;</div>
              <div class="paypal-pay row">
                <h4>使用支付宝</h4>
                <div class="col-md-2 col-sm-2 col-xs-4">
                  <i class="fa fa-paypal"/>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-4">
                  <input name="pay" type="radio">
                </div>
              </div>
              <div class="paypal-pay">
                <div class="col-md-10 col-sm-10 col-xs-8">
                  <a href="#">去支付</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 booking-sidebar">
          <div class="sidebar-item">
            <h4><i class="fa fa-phone"/>客服热线</h4>
            <div class="sidebar-body text-center">
              <p>需要帮忙？ 给我们打电话或留言。 我们的客服很快就会联系。</p>
              <h3>0763-5851668、5851608</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/general/page-title'
import { getOrder } from '@/api/ext'

export default {
  components: { PageTitle },
  async asyncData({ params, error }) {
    const id = 'id' in params ? params.id : ''
    return { order_no: id }
  },
  data() {
    return {
      order: ''
    }
  },
  created() {
    const token = this.$storage.getUniversal('token')
    if (token === undefined || token === null || token === '') {
      this.$router.push('/login')
    }

    this.getOrder()
  },
  methods: {
    getOrder() {
      getOrder({ order_no: this.order_no }).then((res) => {
        if (res.code === 200) {
          this.order = res.data
          if (this.order.order_status !== 0) {
            this.$Alert.info({ content: '订单状态不是未付款' })
            this.$router.push('/user')
          }
        } else if (res.code === 40001 || res.code === 40002 || res.code === 40003) {
          this.$router.push('/login')
        } else {
          this.$Alert.info({ content: res.message })
        }
      })
    }
  }
}
</script>

<style scoped>
  .flight-title i {
    margin: 0px 10px;
  }
  #review-booking .flight-list-v2 {
    margin: 0px;
  }
  .booking-tab {
    background: #e6e6e6;
    padding: 30px 0px;
  }
  .booking-detail {
    padding: 60px 0px;
  }
  .booking-tab .nav-tabs > li.active > a,
  .booking-tab .nav-tabs > li.active > a:focus,
  .booking-tab .nav-tabs > li.active > a:hover{
    border: none;
    background: #e6e6e6;
    position: relative;
  }
  .booking-tab .nav-tabs .active {
    position: relative;
  }
  .booking-tab .nav-tabs .active:after {
    background: #f9676b none repeat scroll 0 0;
    content: "";
    height: 5px;
    left: 43%;
    position: absolute;
    top: 100%;
    width: 50px;
  }
  .booking-tab .nav-tabs {
    border-bottom: none;
  }
  .booking-tab .nav-tabs > li.active > a i ,
  .booking-tab  .nav-tabs > li > a i {
    display: block;
    padding: 5px;
    font-size: 30px;
  }
  .booking-tab .nav-tabs > li.active > a span,
  .booking-tab  .nav-tabs > li > a span {
    font-size: 20px;
  }
  .booking-tab .nav-tabs > li.active > a,
  .booking-tab  .nav-tabs > li > a {
    color: #07253F;
  }
  .booking-tab .tab-content {
    padding: 20px 0px;
  }
  .booking-sidebar .sidebar-item {
    border: 1px solid #e6e6e6;
    box-shadow: 0px 0px 5px #e6e6e6;
  }
  .booking-sidebar .sidebar-item h4 {
    background: #e6e6e6 none repeat scroll 0 0;
    padding: 20px 15px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0px;
  }
  .booking-sidebar .sidebar-item h4 i {
    color: #F2676B;
    margin-right: 10px;
  }
  .booking-sidebar .sidebar-body {
    padding: 20px;
  }
  .booking-sidebar .sidebar-body .table {
    margin-bottom: 0px;
  }
  .booking-sidebar .sidebar-body table tr {
    border-bottom: 1px solid #e6e6e6;
  }
  .booking-sidebar .sidebar-body table tr:last-child {
    border-bottom: none;
  }
  .booking-sidebar .sidebar-body table td {
    border-top: none;
  }
  .booking-sidebar .sidebar-body .total {
    font-size: 20px;
    font-weight: bold;
  }
  .booking-form .form-control {
    height: 40px;
    border-radius: 0px;
  }
  .login-box {
    overflow: hidden;
    border: 1px solid #e6e6e6;
    box-shadow: 0px 0px 5px #e6e6e6;
    margin-top: 40px;
  }
  .login-box h3 {
    background: #e6e6e6 none repeat scroll 0 0;
    line-height: 1.6;
    margin: 0;
    padding: 10px 20px;
  }
  .booking-form {
    padding: 0 15px 20px;
    overflow: hidden;
  }
  .booking-form a {
    color: #F2676B;
    margin-top: 5px;
    display: block;
  }
  .booking-form label {
    margin-top: 15px;
  }
  .booking-form button {
    background: #f2676b none repeat scroll 0 0;
    border: medium none;
    color: #fff;
    display: block;
    font-weight: bold;
    margin-top: 15px;
    padding: 10px 50px;
  }
  .booking-form button:hover {
    background: #00adef;
  }
  .social-media-login {
    margin-top: 20px;
  }
  .social-media-login a {
    background: #5470AF;
    color: #ffffff;
    display: inline-block;
    font-weight: bold;
    line-height: 1;
    margin: 10px 0;
    padding: 0 15px
  }
  .social-media-login a i {
    border-right: 1px solid #fff;
    margin-right: 15px;
    padding: 15px 15px 15px 0;
  }
  .social-media-login span {
    display: block;
    font-weight: bold;
  }
  .booking-sidebar .contact-box {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  #passenger-info {
    overflow: hidden;
  }
  .passenger-detail {
    overflow: hidden;
    border: 1px solid #e6e6e6;
    box-shadow: 0px 0px 5px #e6e6e6;
  }
  .passenger-detail h3 {
    margin: 0px;
    padding: 10px 20px;
    line-height: 1.6;
    background: #e6e6e6;
  }
  .passenger-detail-body {
    padding: 20px;
  }
  .passenger-detail-body label {
    margin-top: 15px;
    font-weight: normal;
  }
  .passenger-detail-body .form-control {
    border-radius: 0px;
    height: 40px;
  }
  .passenger-detail-body button {
    background: #f2676b none repeat scroll 0 0;
    color: #ffffff;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    padding: 10px 20px;
  }
  .passenger-detail-body button:hover {
    background: #00adef;
  }
  .passenger-detail-body button i {
    margin-left: 5px;

  }
  .saved-card {
    border: 1px solid #e6e6e6;
    overflow: hidden;
    padding: 0px 20px 20px;
  }
  .saved-card label {
    margin-top: 10px;
  }
  .saved-card label span {
    font-size: 18px;
    margin-left: 10px;
    line-height: 1.6;
  }
  .payment-seperator {
    border-top: 1px solid #e6e6e6;
    margin: 40px 0px 30px;
    position: relative;
  }
  .payment-seperator:after {
    background: #e6e6e6 none repeat scroll 0 0;
    border-radius: 50%;
    content: "Or";
    left: 45%;
    padding: 12px 15px;
    position: absolute;
    top: -23px;
    z-index: 1;
  }
  .add-new-card {
    overflow: hidden;
  }
  .paypal-pay {
    overflow: hidden;
  }
  .paypal-pay  i{
    color: #009CDE;
    font-size: 50px;
    margin-top: 20px;
  }
  .paypal-pay a {
    background: #f2676b none repeat scroll 0 0;
    color: #ffffff;
    display: inline-block;
    font-weight: bold;
    margin-top: 25px;
    padding: 10px 20px;
  }
  .paypal-pay a:hover {
    background: #00adef;
  }
  @media (max-width: 767px) {
    .login-box {
      margin-bottom: 40px;
    }
  }
</style>
