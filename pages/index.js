import React from 'react'
import Link from 'next/link'

import { theme } from '../components/layout/Theme'
import HeadBloc from '../components/layout/HeadBloc'
import Menu from '../components/Menu'
import FullBackground from '../components/FullBackground'
import MovingText from '../components/MovingText'
import TextTyped from '../components/TextTyped'

import config from '../data/config'
import socials from '../data/socials'

export default class Index extends React.Component {

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
      <div className="container">
        <HeadBloc
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
          config={this.props.config}
        />
        <FullBackground />
        <Menu vertical links={socials} />
        <MovingText
          beforetext="Hi, I'm "
          movingtext="Moving Text"
          aftertext="."
        />
        <TextTyped>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </TextTyped>

        <style jsx>{`
            .container {
              height: 100vh;
              width: 100vw;
              position: relative;
            }
        `}</style>
      </div>
    )
  }
}
