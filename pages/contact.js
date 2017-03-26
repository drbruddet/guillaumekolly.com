import React from 'react'
import css from 'next/css'
import { style, merge } from 'glamor'

import HeadBloc from '../components/layout/HeadBloc'
import FullBackground from '../components/FullBackground'
import Input from '../components/Input'
import TextArea from '../components/TextArea'

export default () =>
  <div className={centeredbox}>
    <HeadBloc
      title="Guillaume Kolly | Contact"
      description="Guillaume Kolly | Full stack developer living in Lyon. Contact Me here."
    />
    <FullBackground />
    <div className={formblock}>
      <h1>CONTACT ME</h1>
      <form action="https://formspree.io/guillaume.kolly@gmail.com">
        <Input type="text" name="name" style={name}/>
        <Input type="email" name="email" style={email}/>
        <Input type="text" name="subject" style={subject}/>
        <TextArea name="message" style={message} />
        <input type="hidden" name="_next" value="http://localhost:3000"/>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  </div>

const name = css({ float: 'right', width: '45%' })
const email = css({ float: 'right', width: '45%', marginRight: '10%' })
const subject = css({ width: '100%' })
const message = css({ float: 'none' })

const formblock = css({
  border: 'solid 5px #2b2b2b',
  margin: '0 auto',
  MsTextSizeAdjust: '100%',
  WebkitTextSizeAdjust: '100%',
  position: 'relative',
  padding: '2em',
  width: '30%',
  textAlign: 'center',
  zIndex: '1',
  background: 'transparent',
  color: '#242424',
  zIndex: '1',
  background: '#fff',
  '@media(max-width: 1240px)': {
    padding: '2em',
    width: '50%',
  },
  '@media(max-width: 600px)': {
    padding: '1em',
    width: '100%',
  }
})

const centeredbox = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
})
