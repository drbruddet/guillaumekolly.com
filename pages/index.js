import React from 'react'
import css from 'next/css'

import HeadBloc from '../components/layout/HeadBloc'
import Menu from '../components/Menu'
import H1 from '../components/utils/H1'
import Paragraph from '../components/utils/Paragraph'
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
        <Menu links={socials} style={social} />
        <MovingText text="I'm" movingtext="Guillaume Kolly" />
        <section className={introduction}>
          <H1 title="Guillaume Kolly"
            style={{ color: '#000', fontSize: '4em' }} />
          <Paragraph>
            Text of the paragraph
          </Paragraph>
        </section>
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

const introduction = css({
  position: 'absolute',
  right: '20%',
  top: '30%',
  border: '1px solid blue',
  zIndex: '-1'
})

const container = css({
  minHeight: '100vh',
  position: 'relative',
})
