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
        <Menu links={this.props.socials} />
        <H1 title="Guillaume Kolly"
          style={{ color: '#000', fontSize: '4em' }} />
        <Paragraph>
          Text of the paragraph
        </Paragraph>
      </div>
    )
  }
}
