import React from 'react'
import css from 'next/css'
import { style, merge } from 'glamor'

import HeadBloc from '../components/layout/HeadBloc'
import Timeline from '../components/Timeline'

import experiences from '../data/experiences'

export default class extends React.Component {

  static getInitialProps () {
    return { experiences: experiences }
  }

  render() {
    const { experiences } = this.props

    return (
      <div>
        <HeadBloc
          title="Guillaume Kolly | About me"
          description="Guillaume Kolly | Full stack developer living in Lyon. Everything to know about me here."
        />
        <Timeline items={experiences} style={timelineStyle}/>
      </div>
    )
  }
}

const timelineStyle = {
  marker: {
    background: 'rgba(99, 231, 175, 1)',
  }
}
