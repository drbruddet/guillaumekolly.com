import React, { PropTypes } from 'react'

export default class H1 extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: 'Title H1'
  }

  render() {
    return (
      <h1 {...this.props}>
        {this.props.title}
      </h1>
    )
  }
}
