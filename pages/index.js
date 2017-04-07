import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="product-widget-area" style={{paddingBottom: '50px'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="latest-product">
              <div className="section-title"/>
              <div className="product-carousel">
                {/*@foreach($recommend as $item)*/}
                <div className="single-product">
                  <div className="product-f-image">
                    <img src="/static/img/210x269.png" alt="{{ $item->title }}" title="{{ $item->title }}" className="lazyload" width="210" />
                      <div className="product-hover">
                        <a href="{{ l_url('repos', [$item->slug]) }}" className="view-details-link"><i className="fa fa-link"/> See Details</a>
                      </div>
                  </div>
                  <h2><a href="{{ l_url('repos', [$item->slug]) }}">~~~~</a></h2>
                  <div className="product-carousel-price">
                    <div/>
                  </div>
                </div>
                {/*@endforeach*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=" maincontent-area">
      <div className="zigzag-bottom"/>
      <div className="container">
        <div className="row">
          {/*@if($hot_url->count())*/}
          <div className="col-md-6">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Popular</h2>
              <a href="" className="wid-view-more">View all</a>
              {/*@foreach($hot_url as $item)*/}
              <div className="single-wid-product" style={{marginBottom: 0}}>
                <h2 style={{height: '20px'}}><a href="{{ link_url($item->url) }}" rel="nofollow" target="_blank" style={{color: '#1abc9c'}} title="{{ $item->description }}">~~~~</a></h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"/> ~~~~~  <span style={{color: '#565656'}}>~~~~</span>
                </div>
              </div>
              {/*@endforeach*/}
            </div>
          </div>
          {/*@endif*/}
          {/*@if($new_url->count())*/}
          <div className="col-md-6">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Latest</h2>
              <a href="#" className="wid-view-more">View all</a>
              {/*@foreach($new_url as $item)*/}
              <div className="single-wid-product" style={{marginBottom: 0}}>
                <h2 style={{height: '20px'}}><a href="{{ link_url($item->url) }}" rel="nofollow" target="_blank" style={{color: '#1abc9c'}} title="{{ $item->description }}">~~~~</a></h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"/> ~~~~ <span style={{color: '#565656'}}>~~~~~</span>
                </div>
              </div>
              {/*@endforeach*/}
            </div>
          </div>
          {/*@endif*/}
        </div>
      </div>
    </div>

    <div className="brands-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="brand-wrapper">
              <h2 className="section-title">T   opic</h2>
              <div className="brand-list">
                {/*@foreach($collections as $item)*/}
                <a href="{{ l_url('collection', [$item->slug]) }}">
                  <img src="/static/img/270x270.png" alt="{{ $item->title }}" title="{{ $item->title }}" width="270" height="270" className="lazyload" />
                </a>
                {/*@endforeach*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="product-widget-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Popular</h2>
              <a href="{{ l_url('list/popular') }}" className="wid-view-more">View All</a>
              {/*@foreach($hot as $item)*/}
              <div className="single-wid-product">
                <a href="{{ l_url('repos', [$item->slug]) }}"><img src="/static/img/100x90.png" alt="{{ $item->title }}" title="{{ $item->title }}" className="product-thumb lazyload" width="100" height="100"/></a>
                <h2><a href="{{ l_url('repos', [$item->slug]) }}">~~~~</a></h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"/> ~~~~
                </div>
                <div title="Trends">
                  <span className="line">~~~~</span>
                </div>
              </div>
              {/*@endforeach*/}
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Latest</h2>
              <a href="{{ l_url('list/newest') }}" className="wid-view-more">View All</a>
              {/*@foreach($new as $item)*/}
              <div className="single-wid-product">
                <a href="{{ l_url('repos', [$item->slug]) }}"><img src="/static/img/100x90.png" alt="{{ $item->title }}" title="{{ $item->title }}" className="product-thumb lazyload" width="100" height="100"/></a>
                <h2><a href="{{ l_url('repos', [$item->slug]) }}">~~~~~</a></h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"/> ~~~~~
                </div>
                <div title="Trends">
                  <span className="line">~~~~</span>
                </div>
              </div>
              {/*@endforeach*/}
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-product-widget">
              <h2 className="product-wid-title">Trend</h2>
              <a href="{{ l_url('list/trend') }}" className="wid-view-more">View All</a>
              {/*@foreach($trend as $item)*/}
              <div className="single-wid-product">
                <a href="{{ l_url('repos', [$item->slug]) }}"><img src="/static/img/100x90.png" alt="{{ $item->title }}" title="{{ $item->title }}" className="product-thumb lazyload" width="100" height="100"/></a>
                <h2><a href="{{ l_url('repos', [$item->slug]) }}">~~~~</a></h2>
                <div className="product-wid-rating">
                  <i className="fa fa-star"/> ~~~~
                </div>
                <div title="Trends">
                  <span className="line">~~~</span>
                </div>
              </div>
              {/*@endforeach*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
