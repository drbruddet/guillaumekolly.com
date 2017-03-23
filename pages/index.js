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

export default class extends React.Component {

  static getInitialProps () {
    return { socials: socials }
  }

  render() {
    const { socials } = this.props

    return (
      <div className={container}>
        <HeadBloc />
        <FullBackground />
        <Menu links={socials} style={social} />
        <MovingText
          beforetext="Hi, I'm "
          movingtext="Guillaume Kolly"
          aftertext="."
          style={movingText} />
        <TextTyped style={texttyped}>
          I’m a <strong>Full Stack Developer</strong> born & raised
          in the French Alps, but I’m currently living in Lyon - France.
          I’m fluent in Node / Meteor / JS / React, but I’m recently
          started experimenting with GraphQL, Redux and Webpack. I also
          have skills with Photoshop / Illustrator. Do not hezitate
          to <Link href="#"><a>contact me</a></Link>. <br/>
          PS: This website is made with NextJS / ReactJS / Glamor.
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
    width: 'calc(100vw - 30px)',
    position: 'absolute',
    top: '0',
    left: '30px'
  }),
  fixedtitle: style({
    position: 'absolute',
    fontSize: '4em',
    right: '10%',
    top: '30%'
  }),
  movingtitle: style({
    color: '#2b2b2b'
  }),
  movingtitlebackground: 'rgba(99, 231, 175, 0.8)'
}

const social = {
  component: style({
    display: 'inline-block',
    margin: '5px 10px',
    transformOrigin: 'left top',
    transform: 'rotate(270deg) translateX(-100%)',
    textTransform: 'uppercase',
    zIndex: '1',
    textDecoration: 'none'
  }),
  link: style({
    margin: '0 10px 0 0',
    textDecoration: 'none',
    color: '#000',
    ':hover': {
      textDecoration: 'line-through'
    }
  })
}

const container = css({
  height: '100vh',
  width: '100vw',
  position: 'relative'
})
