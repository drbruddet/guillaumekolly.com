import React, { PropTypes } from 'react'
import Head from 'next/head'
import { css } from 'glamor'

const propTypes = {
  title:        PropTypes.string.isRequired,
  description:  PropTypes.string
}

const HeadBloc = (props) =>
  <Head>
    <title>{props.title}</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta name='description' content={props.description} />
    <meta name='keywords' content={props.keywords} />
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

HeadBloc.propTypes = propTypes
export default HeadBloc
