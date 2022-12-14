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
import hashtag_img_10 from '../static/img/hashtags/page/hashtag_10.png'
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

const Block = ({hasImg, hashtag, content, contentPosition, pageUrl}) => {
  if(hasImg){
    return(
      <Link className={hashtagPadCss.hashtag_index_container} to={ pageUrl }>
        <img className={hashtagPadCss.hashtag_index_img_prop} src={hashtag}></img>
      </Link>
    )
  } else {
    return(
      <div className={hashtagPadCss.hashtag_index_container} style={{alignItems: contentPosition}}>
        <div className={hashtagPadCss.hashtag_index_content_prop}>{content}</div>
      </div>
    )
  }
}

const HashtagPad = ({currentIndex}) => {
  return(
    <div id={hashtagPadCss.hashtag_pad}>
      <div className={hashtagPadCss.hashtag_pad_container}>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block content=""/>
          <Block hashtag={hashtag_img_1} pageUrl="/hashtags/hashtag_1" hasImg={true}/>
          <Block hashtag={hashtag_img_2} hasImg={true}/>
          <Block hashtag={hashtag_img_3} hasImg={true}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_4} hasImg={true}/>
          <Block hashtag={hashtag_img_5} hasImg={true}/>
          <Block content="" contentPosition="flex-start"/>
          <Block content=""/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block content="" contentPosition="flex-end"/>
          <Block hashtag={hashtag_img_6} hasImg={true}/>
          <Block hashtag={hashtag_img_7} hasImg={true}/>
          <Block hashtag={hashtag_img_8} hasImg={true}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_9} hasImg={true}/>
          <Block hashtag={hashtag_img_10} hasImg={true}/>
          <Block content=""/>
          <Block hashtag={hashtag_img_11} hasImg={true}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_12} hasImg={true}/>
          <Block content=""/>
          <Block hashtag={hashtag_img_13} hasImg={true}/>
          <Block hashtag={hashtag_img_14} hasImg={true}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_15} hasImg={true}/>
          <Block hashtag={hashtag_img_16} hasImg={true}/>
          <Block hashtag={hashtag_img_17} hasImg={true}/>
        </div>
        <div className={hashtagPadCss.hashtag_pad_contents_container}>
          <Block hashtag={hashtag_img_18} hasImg={true}/>
          <Block hashtag={hashtag_img_19} hasImg={true}/>
          <Block hashtag={hashtag_img_20} hasImg={true}/>
        </div>
      </div>
    </div>
  )
}

export default HashtagPad;
