import React from 'react'
import css from 'next/css'
import { style } from 'glamor'
import Link from 'next/link'

import HeadBloc from '../components/layout/HeadBloc'
import FullBackground from '../components/FullBackground'
import Menu from '../components/Menu'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'

import { theme, _tag, _button } from '../components/layout/Theme'
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
          <div className={formblock}>
            <h1 className={title}>CONTACT ME</h1>
            <form action="https://formspree.io/guillaume.kolly@gmail.com">
              <Input type="text" name="name" style={name} />
              <Input type="email" name="email" style={email} />
              <Input type="text" name="subject" style={subject} />
              <TextArea name="message" style={message} />
              <input type="hidden" name="_next" value="http://localhost:3000" />
              <Button type="submit" value="Send" style={_button} />
            </form>
          </div>
        </section>
      </div>
    )
  }
}

const name = css({ float: 'right', width: '45%' })
const email = css({ float: 'right', width: '45%', marginRight: '10%' })
const subject = css({ width: '100%' })
const message = css({ float: 'none' })

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

const formblock = css({
  padding: '2em',
  width: '80%',
  margin: '0 auto',
  textAlign: 'center',
  '@media(max-width: 1240px)': {
    padding: '2em',
    width: '80%',
  },
  '@media(max-width: 600px)': {
    padding: '1em',
    width: '90%',
    height: '100%',
  }
})

const title = css({
  fontSize: '400%',
  color: theme.colors.white,
  '@media(max-width: 1240px)': { fontSize: '200%', },
  '@media(max-width: 600px)': { fontSize: '200%', }
})

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
