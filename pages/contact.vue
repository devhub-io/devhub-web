<template>
  <div>
    <!-- page-title -->
    <page-title title="联系我们"/>
    <!-- page-title end -->

    <!-- contact-info -->
    <section class="contact-info">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 column">
            <div class="single-item">
              <div class="icon-box"><i class="flaticon-placeholder"/></div>
              <div class="text">清远市清新区三坑滩（沿S114国道迳口入二公里）</div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 column">
            <div class="single-item">
              <div class="icon-box"><i class="flaticon-mobile"/></div>
              <div class="text">(+48) 564-334-21-22-34<br >(+48) 564-334-21-25</div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 column">
            <div class="single-item">
              <div class="icon-box"><i class="flaticon-mail"/></div>
              <div class="text">info@panola.com<br >info@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- contact-info end -->

    <!-- contact-section -->
    <section class="contact-section gray-bg sec-pad">
      <div class="container">
        <div class="title centred"><h2>联系我们</h2></div>
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2 column">
            <form id="contact-form" name="contact_form" class="default-form" action="inc/sendmail.php" method="post">
              <div class="row">
                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                  <input type="text" name="form_name" value="" placeholder="First Name" required="">
                </div>
                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                  <input type="text" name="form_phone" value="" placeholder="Last Name" required="">
                </div>
                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                  <input type="email" name="form_email" value="" placeholder="Email" required="">
                </div>
                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                  <input type="text" name="form_subject" value="" placeholder="Phone number" required="">
                </div>
                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                  <textarea placeholder="Your Message" name="form_message" required=""/>
                </div>
                <div class="form-group centred col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" class="theme-btn" data-loading-text="Please wait...">提交</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- contact-section end -->

    <!-- google-map -->
    <section class="google-map-section">
      <div class="google-map-area">
        <iframe width="100%" height="500" src="//uri.amap.com/marker?position=112.961917,23.772177&name=古龙峡原生态旅游区&src=古龙峡官网&coordinate=gaode&callnative=0" />
      </div>
    </section>
    <!-- google-map end -->
  </div>
</template>

<script>
import PageTitle from '@/components/general/page-title'

export default {
  layout: 'default',
  components: { PageTitle }
}
</script>
