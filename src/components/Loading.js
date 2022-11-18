import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
// import imagesLoaded from 'imagesloaded'

// const imagesLoaded = require('imagesloaded');
// Preload images
// const preloadImages = (selector = 'img') => {
//   return new Promise((resolve) => {
//       imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
//   });
// };

import loadingCss from '../css/loading.module.scss'

const Loading = ({bg_style, loadingTimeControl}) => {

  setTimeout(() => {
    document.getElementById(`${bg_style}`).style.opacity = 0;
    document.getElementById(`${bg_style}`).style.zIndex = -10;
    document.getElementById(`${bg_style}`).style.transition = 'all .3s ease-in-out';
  }, loadingTimeControl);
  

  return(
    <div id={bg_style}>
    </div>
  )
  
}

export default Loading;