import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

export default class AppDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>DevHub - Development Tools Repositories Developers Hub</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700,500' rel='stylesheet' type='text/css'/>
        <link rel="stylesheet" href="/static/fonts/font-awesome/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="/static/css/normalize.css"/>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"/>
        <link rel="stylesheet" href="/static/css/animate.min.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
        <link rel="stylesheet" href="/static/css/github-markdown.css"/>
        {styleTags}
      </Head>
      <body>
      <div className='root'>
        <Header/>
        {main}
        <Footer/>
      </div>
      <NextScript />
      </body>
      </html>
    )
  }
}
