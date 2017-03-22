import Head from 'next/head'
import { css } from 'glamor'

export default () =>
  <Head>
    <title>Guillaume Kolly</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta name='description' content='Guillaume Kolly, <strong>full stack developer</strong> based in Lyon - France.' />
    <meta name='keywords' content='guillaume, kolly, frontend, backend, full stack, developer, web, javascript, reactJS, Meteor, Js, NextJS, Webpack' />
    <meta name='copyright' content='Guillaume Kolly' />
  </Head>

css.global('html, body',  {
  padding: '0',
  margin: '0',
  border: '0',
  fontFamily: 'sans-serif',
  lineHeight: '1.15',
  fontSize: '1em',
  fontWeight: '300',
  fontStyle: 'normal',
  textDecoration: 'none',
  textShadow: '0',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})
