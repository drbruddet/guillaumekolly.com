import React from 'react'
import css from 'next/css'
import { style } from 'glamor'
import Link from 'next/link'

import HeadBloc from '../components/layout/HeadBloc'
import Menu from '../components/Menu'
import FullBackground from '../components/FullBackground'
import MovingText from '../components/MovingText'
import TextTyped from '../components/TextTyped'

import socials from '../data/socials'
import config from '../data/config'
import { theme, _tag, _verticalMenu } from '../components/layout/Theme'

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
  width: '702px',
  position: 'absolute',
  right: '10%',
  fontSize: '18px',
  lineHeight: '1.7',
  textAlign: 'justify',
  textJustify: 'inter-word',
  top: 'calc(30% + 4em + 3em)'
})

const movingText = {
  background: style({
    height: '100vh',
    width: 'calc(100vw - 50px)',
    position: 'absolute',
    top: '0',
    left: '50px'
  }),
  fixedtitle: style({
    position: 'absolute',
    fontSize: '4em',
    right: '10%',
    top: '30%'
  }),
  movingtitle: style({
    color: theme.colors.text
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
  position: 'relative'
})
