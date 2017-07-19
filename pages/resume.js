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
        <a className="tag">Html</a>,&thinsp;
        <a className="tag">Css</a>,&thinsp;
        <a className="tag">React components</a>,
        I play a lot since over than one year with&thinsp;
        <a className="tag">Meteor</a>.
        I'm passionate about the 'MERN' stack&thinsp;
        (<a className="tag">MongoDb</a>,&thinsp;
        <a className="tag">ExpressJs</a>,&thinsp;
        <a className="tag">ReactJs</a>,&thinsp;
        <a className="tag">NodeJs</a>). I love to use the module bundler
        <a className="tag">Webpack</a>,&thinsp;
        and I'm also code some backend work using&thinsp;
        <a className="tag">Ruby On Rails</a>,&thinsp;
        and enjoy using the term, I know&thinsp;
        <a className="tag">Shell scripting</a> to&thinsp;
        make my life easier. Experienced with design, I'm playing a
        lot with <a className="tag">Illustrator</a> and&thinsp;
        <a className="tag">Photoshop</a>.
        Skilled with css pre-processors and frameworks, like&thinsp;
        <a className="tag">Bootstrap</a>,&thinsp;
        <a className="tag">Semantic-ui</a>,&thinsp;
        <a className="tag">Stylus</a>,&thinsp;
        <a className="tag">Scss</a>,&thinsp;
        <a className="tag">Haml</a>. I also play with templating
        like <a className="tag">Jade</a> /&thinsp;
        <a className="tag">Blaze</a>
        &nbsp;with my Meteor apps. I'm fluent with Sql (
        <a className="tag">MySql</a> /&thinsp;
        <a className="tag">PostgreSql</a>)
        and noSql (<a className="tag">MongoDb</a>).
        I believe <a className="tag">code has to clean</a>, like
        a design has to be&thinsp;
        <a className="tag">responsive</a> and&thinsp;
        <a className="tag">accessible</a>.
        I'm fan of <a className="tag">Git</a> and use&thinsp;
        <a className="tag">Github</a> and&thinsp;
        <a className="tag">Bitbucket</a>. Recently,
        I'm learning to play with&thinsp;
        <a className="tag">Redux</a>,&thinsp;
        <a className="tag">React Native</a>, and&thinsp;
        <a className="tag">GraphQl</a> and I'm loving it!
        <br/><br/>
        I'm <a className="tag yellow">French native</a>&thinsp;
        and I'm <a className="tag yellow">fluent in English</a>.

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

            @media screen and (max-width: 1240px) {
              .skillblock { width: 70%; }
            }

            @media screen and (max-width: 640px) {
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
        <Menu horizontal links={socials} />

        <style jsx>{`
            .menu {
              margin: 30px auto 80px auto;
              text-align: center;
            }
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

            @media screen and (max-width: 640px) {
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
          config={this.props.config}
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
