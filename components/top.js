export default ({repos, title}) => (
  <div className="single-product-widget">
    <h2 className="product-wid-title">{ title }</h2>
    <a href="{{ l_url('list/popular') }}" className="wid-view-more">View All</a>
    {
      repos.map((repo, index) =>
        <div className="single-wid-product" key={index}>
          <a href={'/repos/' + repo.slug}><img src={repo.cover ? repo.cover + '&s=100' : '/static/img/100x90.png'} alt={repo.title} title={repo.title} className="product-thumb lazyload" width="100" height="100"/></a>
          <h2><a href={'/repos/' + repo.slug}>{ repo.title }</a></h2>
          <div className="product-wid-rating">
            <i className="fa fa-star"/> { repo.stargazers_count }
          </div>
          <div title={title}>
            <span className="line">{ repo.trends }</span>
          </div>
        </div>
      )
    }
  </div>
)
