import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import hashtagPadCss from '../css/hashtag_pad.module.scss'
import hashtag_img_1 from '../static/img/hashtags/page/hashtag_1.jpg'
import hashtag_img_2 from '../static/img/hashtags/page/hashtag_2.png'
import hashtag_img_3 from '../static/img/hashtags/page/hashtag_3.png'
import hashtag_img_4 from '../static/img/hashtags/page/hashtag_4.png'
import hashtag_img_5 from '../static/img/hashtags/page/hashtag_5.jpg'
import hashtag_img_6 from '../static/img/hashtags/page/hashtag_6.png'
import hashtag_img_7 from '../static/img/hashtags/page/hashtag_7.jpg'
import hashtag_img_8 from '../static/img/hashtags/page/hashtag_8.png'
import hashtag_img_9 from '../static/img/hashtags/page/hashtag_9.png'
import hashtag_img_10 from '../static/img/hashtags/page/hashtag_10.jpg'
import hashtag_img_11 from '../static/img/hashtags/page/hashtag_11.png'
import hashtag_img_12 from '../static/img/hashtags/page/hashtag_12.png'
import hashtag_img_13 from '../static/img/hashtags/page/hashtag_13.jpeg'
import hashtag_img_14 from '../static/img/hashtags/page/hashtag_14.png'
import hashtag_img_15 from '../static/img/hashtags/page/hashtag_15.jpg'
import hashtag_img_16 from '../static/img/hashtags/page/hashtag_16.png'
import hashtag_img_17 from '../static/img/hashtags/page/hashtag_17.png'
import hashtag_img_18 from '../static/img/hashtags/page/hashtag_18.png'
import hashtag_img_19 from '../static/img/hashtags/page/hashtag_19.png'
import hashtag_img_20 from '../static/img/hashtags/page/hashtag_20.png'

const Block = ({hasImg, hashtag, content, contentPosition, pageUrl, padWidth, padHeight, indexID}) => {
  if(hasImg){
    return(
      <Link className={hashtagPadCss.hashtag_index_container} to={ pageUrl } style={{width: padWidth}} id={indexID}>
        <img className={hashtagPadCss.hashtag_index_img_prop} src={hashtag}></img>
      </Link>
    )
  } else {
    return(
      <div className={hashtagPadCss.hashtag_index_container} style={{alignItems: contentPosition, width: padWidth }}>
        <div className={hashtagPadCss.hashtag_index_content_prop}>{content}</div>
      </div>
    )
  }
}

const HashtagPad = ({currentIndex, padWidth}) => {
  console.log(currentIndex);
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
  useEffect(()=>{
    if(!isMobile && !isPad){
      document.getElementById(currentIndex).style.opacity = '1';
    }
  }, []);
  
  return(
    <div id={hashtagPadCss.hashtag_pad}>
      <div className={hashtagPadCss.hashtag_pad_container}>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block content="" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_1} pageUrl="/hashtags/hashtag_1" hasImg={true} indexID="hashtag_1" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_2} pageUrl="/hashtags/hashtag_2" hasImg={true} indexID="hashtag_2" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_3} pageUrl="/hashtags/hashtag_3" hasImg={true} indexID="hashtag_3" padWidth={padWidth}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_4} pageUrl="/hashtags/hashtag_4" hasImg={true} indexID="hashtag_4" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_5} pageUrl="/hashtags/hashtag_5" hasImg={true} indexID="hashtag_5" padWidth={padWidth}/>
          <Block content="" contentPosition="flex-start" padWidth={padWidth}/>
          <Block content="" padWidth={padWidth}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block content="" contentPosition="flex-end" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_6} pageUrl="/hashtags/hashtag_6" hasImg={true} indexID="hashtag_6" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_7} pageUrl="/hashtags/hashtag_7" hasImg={true} indexID="hashtag_7" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_8} pageUrl="/hashtags/hashtag_8" hasImg={true} indexID="hashtag_8" padWidth={padWidth}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_9} pageUrl="/hashtags/hashtag_9" hasImg={true} indexID="hashtag_9" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_10} pageUrl="/hashtags/hashtag_10" hasImg={true} indexID="hashtag_10" padWidth={padWidth}/>
          <Block content="" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_11} pageUrl="/hashtags/hashtag_11" hasImg={true} indexID="hashtag_11" padWidth={padWidth}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_12} pageUrl="/hashtags/hashtag_12" hasImg={true} indexID="hashtag_12" padWidth={padWidth}/>
          <Block content="" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_13} pageUrl="/hashtags/hashtag_13" hasImg={true} indexID="hashtag_13" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_14} pageUrl="/hashtags/hashtag_14" hasImg={true} indexID="hashtag_14" padWidth={padWidth}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_15} pageUrl="/hashtags/hashtag_15" hasImg={true} indexID="hashtag_15" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_16} pageUrl="/hashtags/hashtag_16" hasImg={true} indexID="hashtag_16" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_17} pageUrl="/hashtags/hashtag_17" hasImg={true} indexID="hashtag_17" padWidth={padWidth}/>
          <Block content="" padWidth={padWidth}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block content="" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_18} pageUrl="/hashtags/hashtag_18" hasImg={true} indexID="hashtag_18" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_19} pageUrl="/hashtags/hashtag_19" hasImg={true} indexID="hashtag_19" padWidth={padWidth}/>
          <Block hashtag={hashtag_img_20} pageUrl="/hashtags/hashtag_20" hasImg={true} indexID="hashtag_20" padWidth={padWidth}/>
        </div>
      </div>
    </div>
  )
}

export default HashtagPad;
