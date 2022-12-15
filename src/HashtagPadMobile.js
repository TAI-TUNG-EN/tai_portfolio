import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import AOS from 'aos'

import hashtagPadMobileCss from './css/hashtag_pad_mobile.module.scss'
import PageLayout from './components/PageLayout'
import BackTo from './components/BackTo';
import HashtagPad from './components/HashtagPad'

const HashtagPadMobile = () => {

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

  const navigate = useNavigate();

  if(isMobile){
    return(
      <>
        <PageLayout>
          <section id={hashtagPadMobileCss.hashtag_pad_mobile}>
            <div>
              <Link to={-1} className={hashtagPadMobileCss.close_window}></Link>
            </div>
            <HashtagPad  padSize="22%"/>
          </section>
        </PageLayout>
      </>
    )
  } else {
    navigate("/hashtags");
  }
  
}

export default HashtagPadMobile;
