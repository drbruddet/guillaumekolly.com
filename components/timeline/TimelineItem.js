import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '../layout/Theme'

const propTypes = {
  item: PropTypes.object.isRequired,
  side: PropTypes.string
}

const defaultProps = {
  side: ""
}

const giveClass = (side) => {
  return side == "right" ? 'timelineblock right' : 'timelineblock left'
}

const TimelineItem = (props) =>
  <div className={giveClass(props.side)}>
    <div className='marker' />
    <div className='timelinecontent'>
      <h3 className='title'>{props.item.title}</h3>
      <span className='subtitle'>{props.item.subtitle}</span>
      <p className='description'>{props.item.description}</p>
    </div>

    <style jsx>{`
      .timelineblock {
        width: calc(50% + 8px);
        width: -webkit-calc(50% + 8px);
        width: -moz-calc(50% + 8px);
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -moz-box-pack: justify;
        justify-content: space-between;
        clear: both;
      }

      .left {
        float: left;
        direction: rtl;
      }

      .right {
        float: right;
      }

      .marker {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid #F5F7FA;
        margin-top: 10px;
        z-index: 888;
        background: ${theme.colors.primary};
      }

      .timelinecontent {
        width: 95%;
        padding: 0 15px;
      }

      .title {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 25px;
        font-weight: 500;
        color: ${theme.colors.time_line_title};
      }

      .subtitle {
        font-size: 15px;
        color: ${theme.colors.light_text};
      }

      .description {
        font-size: 14px;
        line-height: 1.5em;
        word-spacing: 1px;
        color: ${theme.colors.text};
      }

      @media screen and (max-width: 768px) {
        .timelineblock { margin-bottom: 30px; width: 100%; }
        .left { float: none; direction: ltr; }
        .right { float: none; }
      }
    `}</style>
  </div>

TimelineItem.propTypes = propTypes
TimelineItem.defaultProps = defaultProps
export default TimelineItem
