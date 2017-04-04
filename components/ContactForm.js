import React, { PropTypes } from 'react'
import css from 'next/css'

import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'

import { theme, _button } from './layout/Theme'

const propTypes = {
  sendTo: PropTypes.string.isRequired,
  style: PropTypes.object
}

const sendToAddress = (email) => "https://formspree.io/" + email

const ContactForm = (props) =>
  <div className={css(formblock, props.style)}>
    <h1 className={title}>CONTACT ME</h1>
    <form action={sendToAddress(props.sendTo)} method="POST">
      <Input type="text" name="name" style={name} />
      <Input type="email" name="email" style={email} />
      <Input type="text" name="subject" style={subject} />
      <TextArea name="message" style={message} />
      <input type="hidden" name="_next" value="http://localhost:3000" />
      <Button type="submit" value="Send" style={_button} />
    </form>
  </div>

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

const name = css({ float: 'right', width: '45%' })
const email = css({ float: 'right', width: '45%', marginRight: '10%' })
const subject = css({ width: '100%' })
const message = css({ float: 'none' })

ContactForm.propTypes = propTypes
export default ContactForm
