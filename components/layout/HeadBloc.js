import React, { PropTypes } from 'react'
import Head from 'next/head'
import { css } from 'glamor'

import { theme } from './Theme'

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
    <style> @import url({theme.font.import}); </style>
  </Head>

css.global('html, body',  {
  padding: '0',
  margin: '0',
  border: '0',
  lineHeight: '1.3em',
  fontSize: '1em',
  textShadow: '0',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  fontFamily: theme.font.paragraph,
})

HeadBloc.propTypes = propTypes
export default HeadBloc
