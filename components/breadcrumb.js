import Link from 'next/link'

export default () => (
  <ol className="breadcrumb">
    <li><a href="https://devhub.io/">Home</a></li>
    <li><a href="https://devhub.io/list/popular">Repositories</a></li>
    <li><a href="https://devhub.io/category/cpp">C++</a></li>
    <li className="active">electron</li>
  </ol>
)
