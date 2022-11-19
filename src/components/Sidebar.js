import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { images } from '../images.ts'
import sidebarCss from '../css/sidebar.module.scss'

const Sidebar = ({ sidebarTitle, emoji_1, emoji_1_text, emoji_2, emoji_2_text, marginTopSetting }) => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;
  const isPad = (width > 768) && (width <= 992);

  let marginTopSize;
  if(isMobile){
    marginTopSize = marginTopSetting;
  }

  return(
    <div id={sidebarCss.sidebar} style={{marginTop: marginTopSize}} >
      <div className={sidebarCss.title_prop}>{ sidebarTitle }</div>
      <div className={sidebarCss.emoji_container}>
        <div className={sidebarCss.emoji_prop}>{ emoji_1 }</div>
        <div className={sidebarCss.emoji_text_prop} style={{color: "#6B89A5"}}>{ emoji_1_text }</div>
      </div>
      <div className={sidebarCss.emoji_container} style={{marginBottom: "2rem"}}>
        <div className={sidebarCss.emoji_prop}>{ emoji_2 }</div>
        <div className={sidebarCss.emoji_text_prop} style={{color: "#945D00"}}>{ emoji_2_text }</div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  sidebarTitle: PropTypes.string,
  emoji_1: PropTypes.string,
  emoji_1_text: PropTypes.string,
  emoji_2: PropTypes.string,
  emoji_2_text: PropTypes.string,
};

Sidebar.defaultProps = {
  sidebarTitle: '',
  emoji_1: '',
  emoji_1_text: '',
  emoji_2: '',
  emoji_2_text: '',
}

export default Sidebar;