import React from 'react'
import css from 'next/css'

import HeadBloc from '../components/layout/HeadBloc'
import FullBackground from '../components/FullBackground'
import MovingText from '../components/MovingText'
import ButtonLink from '../components/ButtonLink'
import { theme, _centeredBox } from '../components/layout/Theme'

import config from '../data/config'

export default class Error extends React.Component {

  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : (jsonPageRes ? jsonPageRes.status : null)
    return {
      statusCode,
      config: config
    }
  }

  renderError() {
    return this.props.statusCode
      ? ` An error occurred on server.`
      : ' An error occurred on client.'
  }

  render () {
    const meta = this.props.config.meta.error
    const title = `${meta.title} ${this.props.statusCode} Page not found`
    const movingtextstringify = String(this.props.statusCode)

    return (
      <div className={_centeredBox}>
        <HeadBloc title={title} description={meta.description} keywords={meta.keywords} />
        <FullBackground />
        <div className={verticalyCentered}>
          <h2 className={errorText}>
            The page your looking for can't be found.
            {this.renderError()}
          </h2>
          <MovingText movingtext={movingtextstringify} style={movingText} />
          <ButtonLink url="/" title="Home" alt="Home Page" style={button} />
          <ButtonLink url="/resume" title="Resume" alt="Resume Page" style={button} />
          <ButtonLink url="/contact" title="Contact" alt="Contact Page" style={button} />
        </div>
      </div>
    )
  }
}

const button = css({
  width: '160px',
  border: "4px solid " + theme.colors.primary,
  ':hover': {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    '> a': { color: theme.colors.white }
  },
  '> a': {
    color: theme.colors.black,
  }
})

const movingText = {
  background: css({
    height: '100%',
    width: '100%',
  }),
  movingtitle: css({
    color: theme.colors.black,
    fontSize: '1000%',
    '@media(max-width: 640px)': { fontSize: '300%' }
  }),
  movingtitlebackground: theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-20',
    shadow_mouse_pos_y: '20',
  },
}

const errorText = css({
  fontSize: '140%',
  padding: '0',
  margin: '0',
  '@media(max-width: 640px)': {
    fontSize: '90%'
  }
})

const verticalyCentered = css({
  padding: '2em',
  maxWidth: '50%',
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: theme.colors.black,
})
