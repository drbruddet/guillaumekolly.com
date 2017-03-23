import React from 'react'
import css from 'next/css'
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
          text="I'm"
          movingtext="Guillaume Kolly"
          style={backgroundSize} />
        <TextTyped style={text}>
          I’m a full stack developer born and raised in the French Alps,
          but I’m currently living in Lyon - France. I’m fluent in
          Node / Meteor / JS / React, but I’m recently started
          experimenting with GraphQL, Redux and Webpack. I also
          have skills with Photoshop / Illustrator. Do not hezitate
          to <Link href="#"><a>contact me</a></Link>.
        </TextTyped>
      </div>
    )
  }
}

const backgroundSize = css({
  height: '100vh',
  width: 'calc(100vw - 30px)',
  position: 'absolute',
  top: '0',
  left: '30px',
})

const social = css({
  display: 'inline-block',
  margin: '5px 10px',
  transformOrigin: 'left top',
  transform: 'rotate(270deg) translateX(-100%)',
  textTransform: 'uppercase',
  zIndex: '1',
  textDecoration: 'none'
})

const text = css({
  width: '602px',
  position: 'absolute',
  right: '10%',
  top: 'calc(30% + 4em + 4em)'
})

const container = css({
  height: '100vh',
  width: '100vw',
  position: 'relative',
})
