import Header from './header'
import Footer from './footer'
import Head from 'next/head'

export default ({children, title = 'DevHub - Development Tools Repositories Developers Hub'}) => (
  <div>
    <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>{title}</title>
      <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700,500' rel='stylesheet' type='text/css'/>
      <link rel="stylesheet" href="/static/fonts/font-awesome/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="/static/css/normalize.css"/>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"/>
      <link rel="stylesheet" href="/static/css/animate.min.css"/>
      <link rel="stylesheet" href="/static/css/style.css"/>
    </head>

    <body>
      <Header/>

      { children }

      <Footer/>
    </body>
  </div>
)
