import React from 'react'
import css from 'next/css'

import HeadBloc from '../components/layout/HeadBloc'
import Menu from '../components/Menu'
import H1 from '../components/utils/H1'
import Paragraph from '../components/utils/Paragraph'
import FullBackground from '../components/FullBackground'
import MovingText from '../components/MovingText'
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
        <MovingText text="I'm" movingtext="Guillaume Kolly" />
      </div>
    )
  }
}

const social = css({
  display: 'inline-block',
  margin: '5px 10px',
  transformOrigin: 'left top',
  transform: 'rotate(270deg) translateX(-100%)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  zIndex: '1',
})

const container = css({
  height: '100vh',
  width: '100vw',
  position: 'relative',
})
