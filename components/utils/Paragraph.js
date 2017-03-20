import React from 'react'
import css from 'next/css'

export default ( {children} ) => <p className={p}> {children} </p>

const p = css({
  color: '#000',
  fontSize: '1em',
})
