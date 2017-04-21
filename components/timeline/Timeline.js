import React from 'react'
import PropTypes from 'prop-types'

import TimelineItem from './TimelineItem'
import { theme } from '../layout/Theme'

const propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string
}

const defaultProps = {
  type:   ""
}

const renderTimelineItems = (items, type) => {
  return items.map( (item, i) => {
    switch (type) {
      case "right":
        return <TimelineItem key={i} item={item} side='right' />
        break
      case "left":
        return <TimelineItem key={i} item={item} side='left' />
        break
      default:
        return (i % 2 === 0)
          ? <TimelineItem key={i} item={item} side='right' />
          : <TimelineItem key={i} item={item} side='left' />
        break
    }
  })
}

const Timeline = (props) =>
  <div>
    <div className='container'>
      <div className='containerbefore' />
      {renderTimelineItems(props.items, props.type)}
    </div>

    <style jsx>{`
      .container {
        width: 80%;
        padding: 50px 0;
        margin: 50px auto;
        position: relative;
        overflow: hidden;
      }

      .containerbefore {
        content: '';
        position: absolute;
        background: ${theme.colors.time_line};
        top: 0;
        left: 50%;
        margin-left: -1px;
        width: 2px;
        height: 100%;
        z-index: 1;
      }

      @media screen and (max-width: 768px) {
        .containerbefore { left: 8px; }
      }
    `}</style>
  </div>

Timeline.propTypes = propTypes
Timeline.defaultProps = defaultProps
export default Timeline
