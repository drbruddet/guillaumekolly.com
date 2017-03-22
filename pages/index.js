import React from 'react'
import css from 'next/css'
import Link from 'next/link'

import HeadBloc from '../components/layout/HeadBloc'
import Menu from '../components/Menu'
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
        <Menu links={socials} style={social} />
        <TextTyped style={textIntroduction} >
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

const social = css({
  display: 'inline-block',
  margin: '5px 10px',
  transformOrigin: 'left top',
  transform: 'rotate(270deg) translateX(-100%)',
  textTransform: 'uppercase',
  textDecoration: 'none'
})

const textIntroduction = css({
  position: 'absolute',
  right: '15%',
  top: '30%',
  width: '30%',
  '@media only screen and (min-width: 200px) and (max-width: 640px)': {
    width: '80%',
    right: '10px',
    top: '20%',
  }
})

const container = css({
  minHeight: '100vh',
  position: 'relative',
})
