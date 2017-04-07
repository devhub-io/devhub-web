import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className="single-product-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            @if(isset($title)) <h1 style={{textAlign: 'center'}}>~~~~~</h1> @endif
            @if(isset($explain)) <p style={{marginBottom: '25px'}}>~~~~</p> @endif
          </div>
        </div>
        <div className="row">
          {/*@if(isset($child_category))*/}
          <div className="col-md-3">
            <div className="single-sidebar">
              <h2 className="sidebar-title">@lang('front.child_category')</h2>
              <ul>
                {/*@foreach($child_category as $item)*/}
                <li className="{{ active_class($item->slug == $select_slug) }}"><a href="{{ l_url('category', [$item->slug]) }}">Category</a></li>
                {/*@endforeach*/}
              </ul>
            </div>
          </div>
          {/*@endif*/}

          <div className="@if(isset($child_category)) col-md-9 @else col-md-12 @endif">
            <div className="product-content-right">
              <div className="row">
                {/*@foreach($repos as $item)*/}
                <div className="col-sm-6 @if(isset($child_category)) col-md-4 @else col-md-3 @endif">
                  <div className="thumbnail" style={{height: '362px'}}>
                    <a href="{{ l_url('repos', [$item->slug]) }}"><img src="/static/img/200x200.png" alt="{{ $item->title }}" title="{{ $item->title }}" className="lazyload" width="200"/></a>
                    <div className="caption">
                      <a href="{{ l_url('repos', [$item->slug]) }}"><h4>~~~</h4></a>
                      <div style={{marginBottom: '10px'}}>
                                            <span title="star">
                                                <i className="glyphicon glyphicon-star"/> ~~~~
                                            </span>
                        <span className="line">~~~~~</span>
                      </div>
                      <p>~~~~</p>
                    </div>
                  </div>
                </div>
                {/*@endforeach*/}
              </div>
              <div className="row">
                <div className="col-sm-12">
                  ~~~~
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
