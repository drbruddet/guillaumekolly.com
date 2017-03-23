import React, { PropTypes } from 'react'
import Head from 'next/head'
import { css } from 'glamor'

export default class extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }

  render () {
    const title = this.props.title;
    const description = this.props.description
      ? this.props.description
      : this.props.title

    return (
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <meta name='keywords' content='guillaume, kolly, frontend, backend, full stack, developer, web, javascript, reactJS, Meteor, Js, NextJS, Webpack' />
        <meta name='copyright' content='Guillaume Kolly' />
      </Head>
    )
  }
}

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
