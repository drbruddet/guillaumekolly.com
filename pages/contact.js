import React from 'react'
import css from 'next/css'
import { style, merge } from 'glamor'

import HeadBloc from '../components/layout/HeadBloc'

export default () =>
  <div className={centeredbox}>
    <HeadBloc
      title="Guillaume Kolly | Contact"
      description="Guillaume Kolly | Full stack developer living in Lyon. Contact Me here."
    />
    <div className={formblock}>
      <h1>CONTACT ME</h1>
      <form action="https://formspree.io/guillaume.kolly@gmail.com">
        <div className={formstyle.name}>
          <label htmlFor="name"></label>
          <input type="text" name="name" className={formstyle.input} placeholder="name"/>
        </div>
        <div className={formstyle.email}>
          <label htmlFor="email"></label>
          <input type="email" name="_replyto" className={formstyle.input} placeholder="email"/>
        </div>
        <div className={formstyle.subject}>
          <label htmlFor="subject"></label>
          <input type="subject" name="_subject" className={formstyle.input} placeholder="subject"/>
        </div>
        <div className={formstyle.message}>
          <label htmlFor="message"></label>
          <textarea className={textaeramerge} type="text" name="_message" placeholder="message" cols="30" rows="5" required>
          </textarea>
        </div>
        <input type="hidden" name="_next" value="http://localhost:3000"/>
        <div className={formstyle.submit}>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  </div>

const centeredbox = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
})

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
  '@media(max-width: 1240px)': {
    padding: '2em',
    width: '50%',
  },
  '@media(max-width: 600px)': {
    padding: '1em',
    width: '100%',
  }
})

const formstyle = {
  name: style({ float: 'right', width: '45%' }),
  email: style({ float: 'right', width: '45%', marginRight: '10%' }),
  subject: style({ width: '100%' }),
  message: style({ float: 'none' }),

  input: style({
    font: 'inherit',
    margin: '0',
    lineHeight: 'normal',
    background: 'none',
    border: 'none',
	  borderBottom: 'solid 2px #2b2b2b',
	  fontSize: '1em',
	  margin: '0em 0 1.875em 0',
	  padding: '0 0 0.875em 0',
	  width: '100%',
	  WebkitBoxSizing: 'border-box',
	  MozBoxSizing: 'border-box',
	  MsBoxSizing: 'border-box',
	  OBoxSizing: 'border-box',
	  boxSizing: 'border-box',
	  WebkitTransition: 'all 0.3s',
	  MozTransition: 'all 0.3s',
	  MsTransition: 'all 0.3s',
	  OTransition: 'all 0.3s',
	  transition: 'all 0.3s',
    ':focus': {
      outline: 'none',
      padding: '0 0 0.875em 0',
    }
  }),

  submit: style({ textAlign: 'center' }),
}

const textaeramerge = merge(formstyle.input, {
  height: '150px',
  resize: 'none',
  width: '100%',
  lineHeight: '150%',
  overflow: 'auto',
})
