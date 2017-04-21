import React from 'react'
import Particles from 'react-particles-js'

import { theme } from '../components/layout/Theme'
import HeadBloc from '../components/layout/HeadBloc'
import ParallaxBlock from '../components/ParallaxBlock'
import Timeline from '../components/timeline/Timeline'
import ButtonLink from '../components/ButtonLink'
import Menu from '../components/Menu'

import config from '../data/config'
import particles from '../data/particles'
import { experiences, projects, education } from '../data/myresume'
import socials from '../data/socials'

export default class Resume extends React.Component {

  static getInitialProps () {
    return {
      experiences:  experiences,
      projects:     projects,
      education:    education,
      config:       config,
      particles:    particles,
      socials:      socials
    }
  }

  renderSkills() {
    return (
      <p className="skillblock">
        Highly skilled in creating performant&thinsp;
        <strong className="tag">Html</strong>,&thinsp;
        <strong className="tag">Css</strong>,&thinsp;
        <strong className="tag">React components</strong>,
        I play a lot since over than one year with&thinsp;
        <strong className="tag">Meteor</strong>.
        I'm passionate about the 'MERN' stack&thinsp;
        (<strong className="tag">MongoDb</strong>,&thinsp;
        <strong className="tag">ExpressJs</strong>,&thinsp;
        <strong className="tag">ReactJs</strong>,&thinsp;
        <strong className="tag">NodeJs</strong>).
        I also code some backend work using&thinsp;
        <strong className="tag">Ruby On Rails</strong>,&thinsp;
        and enjoy using the term, I know&thinsp;
        <strong className="tag">Shell scripting</strong> to&thinsp;
        make my life easier. Experienced with design, I'm playing a
        lot with <strong className="tag">Illustrator</strong> and&thinsp;
        <strong className="tag">Photoshop</strong>.
        Skilled with css pre-processors and frameworks, like&thinsp;
        <strong className="tag">Bootstrap</strong>,&thinsp;
        <strong className="tag">Semantic-ui</strong>,&thinsp;
        <strong className="tag">Stylus</strong>,&thinsp;
        <strong className="tag">Scss</strong>,&thinsp;
        <strong className="tag">Haml</strong>. I also play with templating
        like <strong className="tag">Jade</strong> /&thinsp;
        <strong className="tag">Blaze</strong>
        &nbsp;with my Meteor apps. I'm fluent with Sql (
        <strong className="tag">MySql</strong> /&thinsp;
        <strong className="tag">PostgreSql</strong>)
        and noSql (<strong className="tag">MongoDb</strong>).
        I believe <strong className="tag">code has to clean</strong>, like
        a design has to be&thinsp;
        <strong className="tag">responsive</strong> and&thinsp;
        <strong className="tag">accessible</strong>.
        I'm fan of <strong className="tag">Git</strong> and use&thinsp;
        <strong className="tag">Github</strong> and&thinsp;
        <strong className="tag">Bitbucket</strong>. Recently,
        I'm learning to play with&thinsp;
        <strong className="tag">Redux</strong>,&thinsp;
        <strong className="tag">Webpack</strong>, and&thinsp;
        <strong className="tag">GraphQl</strong> and I'm loving it!
        <br/><br/>
        I'm <strong className="tag yellow">French native</strong>&thinsp;
        and I'm <strong className="tag yellow">fluent in English</strong>.
        <style jsx>{`
            .skillblock {
              width: 50%;
              margin: 60px auto;
              text-align: center;
              line-height: 1.8em;
              word-wrap: break-word;
              font-size: 1.1em;
              color: ${theme.colors.text};
            }

            @media(max-width: 1240px) {
              .skillblock { width: 70%; }
            }

            @media(max-width: 640px) {
              .skillblock {
                width: 84%;
                text-align: justify;
                text-justify: inter-cluster;
                margin: 30px auto;
              }
            }
        `}</style>
      </p>
    )
  }

  renderFindMe() {
    return (
      <div className="menu">
        <Menu links={socials} />
        <style jsx>{`
            .menu { margin: 30px auto 80px auto; text-align: center; }
        `}</style>
      </div>
    )
  }

  renderTimeline(items) {
    return <Timeline items={items} />
  }

  renderParallaxBackground() {
    return <Particles height="100vh" width="100vw" params={particles} />
  }

  renderParallaxBlock(title, content) {
    return (
      <ParallaxBlock title={title} background={this.renderParallaxBackground()}>
        {content}
      </ParallaxBlock>
    )
  }

  renderMenuIcons() {
    return (
      <div className="menu">
        <ButtonLink table
          url={config.application.cv_pdf_url}
          title="Download CV"
          alt="Download PDF Resume"
          blank={true}
        />
        <ButtonLink table
          url="/contact"
          title="Contact"
          alt="Contact Me"
        />
        <style jsx>{`
            .menu {
              position: fixed;;
              top: 50%;
              left: 3%;
              z-index: 999;
              width: 150px;
            }

            @media(max-width: 640px) {
              .menu {
                top: auto;
                bottom: 1px;
                display: table;
                border-collapse: separate;
                border-spacing: 4px;
                width: 98%;
                left: 1%;
              }
            }
        `}</style>
      </div>
    )
  }

  render() {
    const { config, experiences, projects, education } = this.props
    const meta = config.meta.resume

    return (
      <div>
        <HeadBloc
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
        />
        {this.renderParallaxBlock("01 . Skills", this.renderSkills())}
        {this.renderParallaxBlock("02 . Work Experiences",
          this.renderTimeline(experiences))}
        {this.renderParallaxBlock("03 . Personal Projects",
          this.renderTimeline(projects))}
        {this.renderParallaxBlock("04 . Education",
          this.renderTimeline(education))}
        {this.renderParallaxBlock("05 . Find Me", this.renderFindMe())}
        {this.renderMenuIcons()}
      </div>
    )
  }
}
