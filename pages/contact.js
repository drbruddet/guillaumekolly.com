import React from 'react'
import Link from 'next/link'

import { theme } from '../components/layout/Theme'
import HeadBloc from '../components/layout/HeadBloc'
import FullBackground from '../components/FullBackground'
import Menu from '../components/Menu'
import ContactForm from '../components/forms/ContactForm'

import config from '../data/config'
import socials from '../data/socials'

export default class Contact extends React.Component {

  static getInitialProps () {
    return {
      socials: socials,
      config: config
    }
  }

  render() {
    const { socials, config } = this.props
    const meta = config.meta.contact
    const sendTo = config.application.mailServer + config.application.email

    return (
      <div>
        <HeadBloc
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
        />
        <section className='halfside left'>
          <FullBackground />
          <div className="center">
            <Menu horizontal links={socials} />
            <div className='resume'>
              You can also watch my&nbsp;
              <Link prefetch href="/resume">
                <a className='tag'>online resume</a>
              </Link>
              &nbsp;or&nbsp;
              <Link href={config.application.cv_pdf_url}>
                <a target="_blank" className='tag'>download it</a>
              </Link>.
            </div>
          </div>
        </section>
        <section className='halfside right'>
          <ContactForm sendTo={sendTo} />
        </section>

        <style jsx>{`
          .halfside {
            width: 50%;
            height: 100vh;
            position: absolute;
            top: 0;
          }

          .center {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
          }

          .resume {
            letter-spacing: 0.024em;
            margin-top: 20px;
          }

          .left {
            left: 0;
            background: transparent;
          }

          .right {
            right: 0;
            background: ${theme.colors.primary};
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media(max-width: 1240px) {
            .resume { padding: 0 0.2em; }
          }

          @media(max-width: 840px) {
            .center { height: 400px; }
            .left { margin-top: 0; left: 0; height: 400px; }
            .resume { font-size: 1.2em; }
            .halfside { width: 100%; }
            .right {
              position: relative;
              top: 400px;
              left: 0;
              height: 100%;
              display: inline-flex;
            }
          }

          @media(max-width: 640px) {
            .center { height: 160px; }
            .left { height: 160px; }
            .resume { font-size: 0.9em; }
            .right { top: 160px; }
          }
        `}</style>
      </div>
    )
  }
}
