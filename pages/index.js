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
        />
        <FullBackground />
        <Menu vertical links={socials} />
        <MovingText
          beforetext="Hi, I'm "
          movingtext="Guillaume Kolly"
          aftertext="."
        />
        <TextTyped>
          I’m a <strong>FULL STACK DEVELOPER</strong> born & raised in the
          French Alps, but I’m currently working in Lyon - France. I’m fluent
          in the Javascript Stack ( Meteor / Node / Html / Css / React ) and
          I’ve recently started experimenting with Webpack, Redux, GraphQL.
          I’m a tech enthusiast constantly improve my skills and stay
          up-to-date with new methods and technology. Writing readable, elegant
          and clean code is as important as making a clean design.
          You can take a look on&nbsp;
          <Link prefetch href="/resume"><a className="tag">my resume</a></Link>
          &nbsp;for more, and do not hesitate to&nbsp;
          <Link prefetch href="/contact"><a className="tag">contact me</a></Link>.
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
