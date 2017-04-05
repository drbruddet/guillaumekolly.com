import React from 'react'
import { css, style } from 'next/css'
import Link from 'next/link'

import { theme, _tag, _verticalMenu } from '../components/layout/Theme'
import HeadBloc from '../components/layout/HeadBloc'
import Menu from '../components/Menu'
import FullBackground from '../components/FullBackground'
import MovingText from '../components/MovingText'
import TextTyped from '../components/TextTyped'

import config from '../data/config'
import socials from '../data/socials'

export default class extends React.Component {

  static getInitialProps () {
    return {
      socials: socials,
      config: config
    }
  }

  render() {
    const { config, socials } = this.props
    const meta = config.meta.index

    return (
      <div className={container}>
        <HeadBloc title={meta.title} description={meta.description} keywords={meta.keywords} />
        <FullBackground />
        <Menu links={socials} style={_verticalMenu} />
        <MovingText beforetext="Hi, I'm "
                    movingtext="Guillaume Kolly"
                    aftertext="."
                    style={movingText} />
        <TextTyped style={texttyped}>
          I’m a <strong>Full Stack Developer</strong> born & raised
          in the French Alps, but I’m currently living in Lyon - France.
          I’m fluent in Node / Meteor / JS / React, but I’m recently
          started experimenting with GraphQL, Redux and Webpack. You can discover
          <Link prefetch href="/resume"><a className={_tag}>my resume here</a></Link>.
          Do not hezitate to <Link prefetch href="/contact"><a className={_tag}>contact me</a></Link>.
          <br/>PS: This website is made with NextJS / ReactJS / Glamor.
        </TextTyped>
      </div>
    )
  }
}

const texttyped = css({
  width: '598px',
  position: 'absolute',
  right: '10%',
  fontSize: '1.1em',
  lineHeight: '1.8em',
  letterSpacing: '-0.3px',
  textAlign: 'justify',
  textJustify: 'inter-word',
  top: 'calc(30% + 4em + 3.2em)',
  color: theme.colors.black,
  '@media(max-width: 1240px)': {
    fontSize: '1em',
    width: '467px',
    top: 'calc(30% + 4em + 4em)',
  },
  '@media(max-width: 640px)': {
    width: '280px',
    top: 'calc(30% + 2em)',
  },
})

const movingText = {
  background: style({
    height: 'calc(100vh)',
    width: 'calc(100vw - 55px)',
    position: 'absolute',
    top: '0',
    left: '50px',
    fontFamily: theme.font.title,
  }),
  beforetext: style({
    position: 'absolute',
    fontSize: '15em',
    right: '28.6%',
    letterSpacing: '-0.07em',
    top: '30%',
    color: theme.colors.almost_white,
    '@media(max-width: 1240px)': { fontSize: '10em', top: '34%', right: '40%' },
    '@media(max-width: 640px)': { fontSize: '8em', top: '21%', right: '20%' },
    '@media(max-width: 440px)': { display: 'none' },
  }),
  fixedtitle: style({
    position: 'absolute',
    fontSize: '6em',
    right: '10%',
    top: '30%',
    letterSpacing: '-6px',
    '@media(max-width: 640px)': { top: '10%' },
  }),
  movingtitle: style({
    color: theme.colors.black,
    letterSpacing: '-6px',
    '@media(max-width: 1240px)': { fontSize: '0.8em', },
    '@media(max-width: 640px)': { fontSize: '0.47em', letterSpacing: '-4px',},
  }),
  movingtitlebackground: theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-70',
    shadow_mouse_pos_y: '80',
  }
}

const container = css({
  height: '100vh',
  width: '100vw',
  position: 'relative',
})
