import React from 'react'
import { css, style } from 'next/css'
import Link from 'next/link'

import { theme, _tag } from '../components/layout/Theme'
import HeadBloc from '../components/layout/HeadBloc'
import FullBackground from '../components/FullBackground'
import Menu from '../components/Menu'
import ContactForm from '../components/forms/ContactForm'

import config from '../data/config'
import socials from '../data/socials'

export default class extends React.Component {

  static getInitialProps () {
    return {
      socials: socials,
      config: config
    }
  }

  render() {
    const { socials, config } = this.props
    const meta = config.meta.contact

    return (
      <div>
        <HeadBloc
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
        />
        <section className={css(halfside, left )}>
          <FullBackground />
          <Menu links={socials} style={social} />
          <div className={resume}>
            You can also watch my&nbsp;
            <Link prefetch href="/resume">
              <a className={_tag}>online resume</a>
            </Link>
            &nbsp;or&nbsp;
            <Link href={config.application.cv_pdf_url}>
              <a target="_blank" className={_tag}>download it</a>
            </Link>.
          </div>
        </section>
        <section className={css(halfside, right)}>
          <ContactForm sendTo={config.application.email} style={contactForm} />
        </section>
      </div>
    )
  }
}

const social = {
  component: style({
    textTransform: 'uppercase',
    zIndex: '999',
    position: 'relative',
    top: '50%',
    textAlign: 'center',
    display: 'block',
    margin: '0 auto',
    '@media(max-width: 640px)': { top: '40px' },
  }),
  link: style({
    margin: '0 1% 0 1%',
    textDecoration: 'none',
    color: theme.colors.black,
    fontSize: '1.2em',
    fontWeight: 'bold',
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 1240px)': {
      fontSize: '1em',
      display: 'list-item',
      margin: '10px auto',
    }
  })
}

const resume = css({
  position: 'relative',
  top: 'calc(50% + 20px)',
  textAlign: 'center',
  letterSpacing: '0.024em',
  '@media(max-width: 1240px)': { padding: '0 0.2em' },
  '@media(max-width: 640px)': {
    fontSize: '0.9em',
    margin: '5px auto',
    top: '70px',
  }
})

const halfside = css({
  width: '50%',
  height: '100vh',
  position: 'absolute',
  top: '0',
  '@media(max-width: 640px)': { width: '100%' }
})

const left = css({ left: '0', background: 'transparent' })

const right = css({
  right: '0',
  background: theme.colors.primary,
  zIndex: '999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media(max-width: 640px)': {
    top: '240px',
    left: '0',
    height: '100%',
    position: 'relative',
  },
})

const contactForm = {
  title: style({ fontFamily: theme.font.title, marginBottom: '1.5em' })
}
