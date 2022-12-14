import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PageLayout from './components/PageLayout'
import Cursor from './Cursor';
import Footer from './Footer'
import Loading from './components/Loading';
import Sidebar from './components/Sidebar'
import hashtagCss from './css/hashtags.module.scss'
import hashtag_img_1 from './static/img/hashtags/page/hashtag_1.jpg'
import hashtag_img_2 from './static/img/hashtags/page/hashtag_2.png'
import hashtag_img_3 from './static/img/hashtags/page/hashtag_3.png'
import hashtag_img_4 from './static/img/hashtags/page/hashtag_4.png'
import hashtag_img_5 from './static/img/hashtags/page/hashtag_5.jpg'
import hashtag_img_6 from './static/img/hashtags/page/hashtag_6.png'
import hashtag_img_7 from './static/img/hashtags/page/hashtag_7.jpg'
import hashtag_img_8 from './static/img/hashtags/page/hashtag_8.png'
import hashtag_img_9 from './static/img/hashtags/page/hashtag_9.png'
import hashtag_img_10 from './static/img/hashtags/page/hashtag_10.png'
import hashtag_img_11 from './static/img/hashtags/page/hashtag_11.png'
import hashtag_img_12 from './static/img/hashtags/page/hashtag_12.png'
import hashtag_img_13 from './static/img/hashtags/page/hashtag_13.jpeg'
import hashtag_img_14 from './static/img/hashtags/page/hashtag_14.png'
import hashtag_img_15 from './static/img/hashtags/page/hashtag_15.jpg'
import hashtag_img_16 from './static/img/hashtags/page/hashtag_16.png'
import hashtag_img_17 from './static/img/hashtags/page/hashtag_17.png'
import hashtag_img_18 from './static/img/hashtags/page/hashtag_18.png'
import hashtag_img_19 from './static/img/hashtags/page/hashtag_19.png'
import hashtag_img_20 from './static/img/hashtags/page/hashtag_20.png'


export default function Hashtags(){
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return(
    <PageLayout>
      <section id={hashtagCss.hashtags}>
        Hashtag page
      </section>
    </PageLayout>
  )
}