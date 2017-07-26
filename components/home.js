import { gql, graphql } from 'react-apollo'
import Link from 'next/link'

function Home ({data: {loading, error, recommendRepos, collections, topRepos, newRepos, trendsRepos}}) {
  if (error) {
    window.alert(error)
  }
  return (
    <div>
      <section id="topics">
        <div className="container">
          <div className="row">
            <h1 className="wow fadeInUp text-center">Topics</h1>

            <div className="row top-50" data-wow-delay=".3s" data-effect="mfp-zoom-in">
              {collections.map((collection, index) =>
                <div className="col-md-4 center" key={index}>
                  <img src={`https://devhub.io/${collection.image}`} alt="" width="300"/>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="guess">
        <div className="container">
          <div className="row">
            <h1 className="wow fadeInUp text-center">Guess you like it</h1>

            <div className="row top-50" data-wow-delay=".3s" data-effect="mfp-zoom-in">
              {recommendRepos.map((repo, index) =>
                <div className="col-md-2 center guess-item" key={index}>
                  <Link href={`/repos/${repo.slug}`}>
                    <a>
                      <img src={repo.cover} alt="" width="200"/>
                      <p>{repo.title}</p>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="top">
        <div className="container">
          <h1>Popular</h1>
          {topRepos.map((repo, index) =>
            <div className="row" key={index}>
              <div className="col-md-3 title">{repo.owner}/{repo.repo}</div>
              <div className="col-md-6 desc">{repo.description}</div>
              <div className="col-md-2 col-md-offset-1 stars">{repo.stargazers_count} <img src="/static/img/repos/20170722134804.png" alt=""/>
              </div>
            </div>
          )}
          <h1>Top new</h1>
          {newRepos.map((repo, index) =>
            <div className="row" key={index}>
              <div className="col-md-3 title">{repo.owner}/{repo.repo}</div>
              <div className="col-md-6 desc">{repo.description}</div>
              <div className="col-md-2 col-md-offset-1 stars">{repo.stargazers_count} <img src="/static/img/repos/20170722134804.png" alt=""/>
              </div>
            </div>
          )}
          <h1>Trend</h1>
          {trendsRepos.map((repo, index) =>
            <div className="row" key={index}>
              <div className="col-md-3 title">{repo.owner}/{repo.repo}</div>
              <div className="col-md-6 desc">{repo.description}</div>
              <div className="col-md-2 col-md-offset-1 stars">{repo.stargazers_count} <img src="/static/img/repos/20170722134804.png" alt=""/>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="subtitle"/>
              <h2>Subscribe our newsletters</h2>
              <form action="">
                <div className="form-group">
                  <input type="email" placeholder="Email here"/>
                  <a href="#" className="btn btn-green">Subscribe</a>
                </div>
              </form>
              <p className="promise">We promise to never spam you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const homeGql = gql`
{
  recommendRepos(limit: 5) {
    title
    slug
    cover
  }
  collections(limit: 3) {
    title
    image
  }
  topRepos: repos(limit: 5, order: "stargazers_count") {
    stargazers_count
    trends
    cover
    owner
    repo
    description
  }
  newRepos: repos(limit: 5, order: "repos_created_at") {
    stargazers_count
    trends
    cover
    owner
    repo
    description
  }
  trendsRepos: repos(limit: 5, order: "repos_updated_at") {
    stargazers_count
    trends
    cover
    owner
    repo
    description
  }
}
`

export default graphql(homeGql, {
  props: ({ data }) => ({data})
})(Home)
