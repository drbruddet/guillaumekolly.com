import React from 'react'

import HeadBloc from '../components/layout/HeadBloc'
import Menu from '../components/Menu'
import H1 from '../components/utils/H1'
import Paragraph from '../components/utils/Paragraph'
import socials from '../data/socials'

export default class extends React.Component {

  static getInitialProps () {
    return { socials: socials }
  }

  render() {
    return (
      <div>
        <HeadBloc />
        <Menu links={this.props.socials}
          style={{
            display: 'inline-block',
            margin: '10px 10px',
            transformOrigin: 'left top',
            transform: 'rotate(270deg) translateX(-100%)',
            textTransform: 'uppercase',
            textDecoration: 'none'
          }} />
        <H1 title="Guillaume Kolly"
          style={{ color: '#000', fontSize: '4em' }} />
        <Paragraph>
          Text of the paragraph
        </Paragraph>
      </div>
    )
  }
}
