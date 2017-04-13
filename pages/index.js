import React from 'react'
import { css, style } from 'next/css'
import Link from 'next/link'

import { theme, _tag } from '../components/layout/Theme'
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
        <HeadBloc
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
        />
        <FullBackground />
        <Menu links={socials} style={verticalMenu} />
        <MovingText
          beforetext="Hi, I'm "
          movingtext="Guillaume Kolly"
          aftertext="."
          style={movingText}
        />
        <TextTyped style={texttyped}>
          I’m a <strong>FULL STACK DEVELOPER</strong> born & raised in the
          French Alps, but I’m currently working in Lyon - France. I’m fluent
          in the Javascript Stack ( Meteor / Node / Html / Css / React ) and
          I’ve recently started experimenting with Webpack, Redux, GraphQL.
          I’m a tech enthusiast constantly improve my skills and stay
          up-to-date with new methods and technology. Writing readable, elegant
          and clean code is as important as making a clean design.
          You can take a look on&nbsp;
          <Link prefetch href="/resume"><a className={_tag}>my resume</a></Link>
          &nbsp;for more, and do not hesitate to&nbsp;
          <Link prefetch href="/contact"><a className={_tag}>contact me</a></Link>.
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
  lineHeight: '1.5em',
  letterSpacing: '-0.3px',
  textAlign: 'justify',
  textJustify: 'inter-word',
  top: 'calc(30% + 7.2em)',
  color: theme.colors.black,
  '@media(max-width: 1240px)': {
    fontSize: '1em',
    width: '467px',
    top: 'calc(30% + 4em + 4em)'
  },
  '@media(max-width: 640px)': {
    width: '335px',
    top: 'calc(30% + 2.3em)',
    right: '9%',
    marginBottom: '20px'
  },
  '@media(max-width: 440px)': {
    minWidth: '240px',
    width: 'calc(80%)',
    top: 'calc(10% + 2.5em)',
    right: '5%',
    fontSize: '0.8em'
  },
})

const movingText = {
  background: style({
    height: '100vh',
    width: 'calc(100vw - 55px)',
    position: 'absolute',
    top: '0',
    left: '55px',
    fontFamily: theme.font.title,
    '@media(max-width: 640px)': { left: '30px', width: 'calc(100vw - 30px)' }
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
    '@media(max-width: 640px)': { top: '20%', fontSize: '3em' },
    '@media(max-width: 440px)': { top: '0', right: '5%', letterSpacing: '0' },
  }),
  movingtitle: style({
    color: theme.colors.black,
    display: 'inline-block',
    letterSpacing: '-6px',
    '@media(max-width: 1240px)': { fontSize: '0.85em' },
    '@media(max-width: 640px)': { letterSpacing: '-3px' },
  }),
  movingtitlebackground: theme.colors.primary,
  animation: {
    transform_mouse_pos_x: '-100',
    transform_mouse_pos_y: '-100',
    shadow_mouse_pos_x: '-70',
    shadow_mouse_pos_y: '80',
  }
}

const verticalMenu = {
  component: css({
    display: 'inline-block',
    margin: '20px 30px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none',
    '@media(max-width: 640px)': {
      whiteSpace: 'nowrap',
      left: '8px',
      top: '10px',
      margin: '0',
      position: 'absolute'
    }
  }),
  link: css({
    margin: '0 10px 0 0',
    fontSize: '140%',
    textDecoration: 'none',
    color: theme.colors.black,
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 640px)': { fontSize: '100%' }
  })
}

const container = css({ height: '100vh', width: '100vw', position: 'relative' })
