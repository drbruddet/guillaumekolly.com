import React from 'react'
import css from 'next/css'
import { style } from 'glamor'

import HeadBloc from '../components/layout/HeadBloc'
import Timeline from '../components/Timeline'

import { theme, _tag } from '../components/layout/Theme'
import { experiences, projects, education } from '../data/resume'

export default class extends React.Component {

  static getInitialProps () {
    return {
      experiences:  experiences,
      projects:     projects,
      education:    education,
    }
  }

  render() {
    const { experiences, projects, education } = this.props

    return (
      <div>
        <HeadBloc
          title="Guillaume Kolly | About me"
          description="Guillaume Kolly | Full stack developer living in Lyon. Everything to know about me here."
        />
        <h2 className={title}> 01. Skills </h2>
        <p className={skillBlock}>
          
        </p>
        <h2 className={title}> 02. Work Experiences </h2>
        <Timeline items={experiences} style={timelineStyle} />
        <h2 className={title}> 03. Personal Projects </h2>
        <Timeline items={projects} style={timelineStyle} />
        <h2 className={title}> 04. Education </h2>
        <Timeline items={education} style={timelineStyle} />
      </div>
    )
  }
}

const skillBlock = css({
  width: '50%',
  margin: '60px auto',
  textAlign: 'center',
  lineHeight: '1.8em',
  fontSize: '1.1em',
  color: theme.colors.text,
  //textAlign: 'justify',
  //textJustify: 'inter-word'
})

const yellow = css({
  backgroundColor: theme.colors.trans_secondary,
  ':hover': { backgroundColor: theme.colors.secondary }
})

const timelineStyle = {
  marker: { background: theme.colors.primary },
  title: { color: theme.colors.time_line_title },
  subtitle: { color: theme.colors.light_text },
  description: { color: theme.colors.text },
  containerBefore: { backgroundColor: theme.colors.time_line }
}

const title = css({
  textAlign: 'center',
  textTransform: 'uppercase',
})
