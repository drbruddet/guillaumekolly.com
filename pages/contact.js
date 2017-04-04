import React from 'react'
import css from 'next/css'
import { style } from 'glamor'
import Link from 'next/link'

import HeadBloc from '../components/layout/HeadBloc'
import FullBackground from '../components/FullBackground'
import Menu from '../components/Menu'
import ContactForm from '../components/ContactForm'

import { theme, _tag } from '../components/layout/Theme'
import socials from '../data/socials'

export default class extends React.Component {

  static getInitialProps () {
    return { socials: socials }
  }

  render() {
    const { socials } = this.props

    return (
      <div>
        <HeadBloc title="Guillaume Kolly | Contact"
          description="Guillaume Kolly | Full stack developer living in Lyon. Contact Me here." />
        <section className={css(halfside, left )}>
          <FullBackground />
          <Menu links={socials} style={social} />
          <div className={resume}>
            You can also watch my&nbsp;
            <Link prefetch href="/resume"><a className={_tag}>online resume</a></Link> or&nbsp;
            <Link href="#"><a className={_tag}>download it</a></Link>.
          </div>
        </section>
        <section className={css(halfside, right)}>
          <ContactForm sendTo="guillaume.kolly@gmail.com"/>
        </section>
      </div>
    )
  }
}

// SOCIAL AND RESUME links
const social = {
  component: style({
    textTransform: 'uppercase',
    zIndex: '999',
    position: 'relative',
    top: '50%',
    display: 'block',
    margin: '0 auto',
    textAlign: 'center',
    '@media(max-width: 600px)': { top: 'calc(80px / 2)', }
  }),
  link: style({
    margin: '0 3% 0 0',
    textDecoration: 'none',
    color: theme.colors.black,
    fontSize: '1.2em',
    fontWeight: 'bold',
    ':hover': { textDecoration: 'line-through' },
    '@media(max-width: 1240px)': {
      fontSize: '1em',
      display: 'list-item',
      margin: '10px auto',
    },
    '@media(max-width: 600px)': {
      fontSize: '0.9em',
      margin: '5px auto',
    }
  })
}

const resume = css({
  position: 'relative',
  top: 'calc(50% + 20px)',
  textAlign: 'center',
  '@media(max-width: 600px)': {
    fontSize: '0.8em',
    margin: '5px auto',
    top: '70px',
  }
})

// CONTAINER SETTINGS
const halfside = css({
  width: '50%',
  height: '100vh',
  position: 'absolute',
  top: '0',
  '@media(max-width: 600px)': { width: '100%' }
})

const left = css({
  left: '0',
  background: 'transparent',
  '@media(max-width: 600px)': { height: '160px', }
})

const right = css({
  right: '0',
  background: theme.colors.primary,
  zIndex: '999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media(max-width: 600px)': {
    top: 'calc(160px + 20px)',
    left: '0',
    height: '100%',
    position: 'relative',
  }
})
