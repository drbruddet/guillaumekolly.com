import React from 'react'
import css from 'next/css'
import Link from 'next/link'

import FullBackground from '../components/FullBackground'

export default class Error extends React.Component {

  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  renderError() {
    return this.props.statusCode
      ? ` An error occurred on server.`
      : ' An error occurred on client.'
  }

  render () {
    return (
      <div className={centeredbox}>
        <FullBackground />
        <div className={centeredvert}>
          <h2 className={errortext}>
            The page your looking for can't be found.
            {this.renderError()}
          </h2>
          <h1 className={errornumber}>
            {this.props.statusCode}
          </h1>
          <Link href="/">
            <a className={link}>Go Back Home</a>
          </Link>
        </div>
      </div>
    )
  }
}

const errortext = css({
  fontSize: '140%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '90%',
  }
})

const errornumber = css({
  fontSize: '2000%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '600%',
    padding: '20px 10px',
    margin: 'auto',
  }
})

const link = css({
  color: '#242424',
  textDecoration: 'none',
  border: '3px solid #242424',
  padding: '10px',
})

const centeredbox = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh'
})

const centeredvert = css({
  padding: '2em',
  maxWidth: '50%',
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: '#242424',
})
