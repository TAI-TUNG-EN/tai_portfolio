import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import hashtempCss from '../css/hashtag_template.module.scss'

const HashtagTemplate = ({ title, description, hashtagImg, prevImg, nextImg, currentIndex }) => {
  var descriptionRender = description.map(item => <div>{item}</div>);
  return(
    <div></div>
  )
}

// HashtagTemplate.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.array,
//   hashtagImg: PropTypes.string,
//   prevImg: PropTypes
// }

// HashtagTemplate.propTypes = {

// }

export default HashtagTemplate;