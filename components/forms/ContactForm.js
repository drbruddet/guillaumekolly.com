import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '../layout/Theme'

import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'

const propTypes = {
  sendTo: PropTypes.string.isRequired
}

const ContactForm = (props) =>
  <div className='formblock'>
    <h1 className='title'>CONTACT ME</h1>
    <form action={props.sendTo} method="POST">
      <Input name type="text" name="name" style='name' />
      <Input email type="email" name="email" style='email' />
      <Input subject type="text" name="subject" style='subject' />
      <TextArea message name="message" />
      <input type="hidden" name="_next" value="/" />
      <Button type="submit" value="Send" />
    </form>

    <style jsx>{`
      .formblock {
        padding: 2em;
        width: 80%;
        margin: 0 auto;
        text-align: center;
      }

      .title {
        font-size: 400%;
        color: ${theme.colors.white}
      }

      @media screen and (max-width: 1240px) {
        .formblock { padding: 2em; width: 80%; }
        .title { font-size: 200%; }
      }

      @media screen and (max-width: 640px) {
        .formblock { padding: 1em; width: 90%; height: 100%; }
      }
    `}</style>
  </div>

ContactForm.propTypes = propTypes
export default ContactForm
