import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

import PageLayout from './components/PageLayout'
import Cursor from './Cursor';
import Footer from './Footer'
import BackTo from './components/BackTo';
import Loading from './components/Loading';
import Sidebar from './components/Sidebar'
import hashtagCss from './css/hashtags.module.scss'
import loadingCss from './css/loading.module.scss'
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

const Block = ({hasImg, hashtag, content, contentPosition}) => {
  if(hasImg){
    return(
      <div className={hashtagCss.hashtag_index_container}>
        <img className={hashtagCss.hashtag_index_img_prop} src={hashtag}></img>
      </div>
    )
  } else {
    return(
      <div className={hashtagCss.hashtag_index_container} style={{alignItems: contentPosition}}>
        <div className={hashtagCss.hashtag_index_content_prop}>{content}</div>
      </div>
    )
  }
  
  
}


export default function Hashtags(){
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if(user){
      console.log("user log in: " + user.uid);
    }
    else{
      navigate("/login");
    }
  })
      
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, [])

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


  return(
    <>
      <Cursor cursorTypes='🐭' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1500'/>
      <PageLayout>
        <section id={hashtagCss.hashtags}>
          <Sidebar sidebarTitle="Enjoy this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👋" emoji_2_text="Hover" style={{top: '0'}} />
          <div className={hashtagCss.hashtags_container}>
            <div className={hashtagCss.back_to_container}>
              <BackTo buttonName="Back to about" url="/about" buttonSize="8rem"/>
            </div>
            <div className={hashtagCss.hashtags_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <Block content=""/>
              <Block hashtag={hashtag_img_1} hasImg={true}/>
              <Block hashtag={hashtag_img_2} hasImg={true}/>
              <Block hashtag={hashtag_img_3} hasImg={true}/>
            </div>
            <div className={hashtagCss.hashtags_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <Block hashtag={hashtag_img_4} hasImg={true}/>
              <Block hashtag={hashtag_img_5} hasImg={true}/>
              <Block content="How should we know a person without the education or work exprience?" contentPosition="flex-start"/>
              <Block content=""/>
            </div>
            <div className={hashtagCss.hashtags_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <Block content="There are 20 hashtags about my personalities, hobbies, preference, and lovely daily life." contentPosition="flex-end"/>
              <Block hashtag={hashtag_img_6} hasImg={true}/>
              <Block hashtag={hashtag_img_7} hasImg={true}/>
              <Block hashtag={hashtag_img_8} hasImg={true}/>
            </div>
            <div className={hashtagCss.hashtags_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <Block hashtag={hashtag_img_9} hasImg={true}/>
              <Block hashtag={hashtag_img_10} hasImg={true}/>
              <Block content=""/>
              <Block hashtag={hashtag_img_11} hasImg={true}/>
            </div>
            <div className={hashtagCss.hashtags_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <Block hashtag={hashtag_img_12} hasImg={true}/>
              <Block content=""/>
              <Block hashtag={hashtag_img_13} hasImg={true}/>
              <Block hashtag={hashtag_img_14} hasImg={true}/>
            </div>
            <div className={hashtagCss.hashtags_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <Block hashtag={hashtag_img_15} hasImg={true}/>
              <Block hashtag={hashtag_img_16} hasImg={true}/>
              <Block hashtag={hashtag_img_17} hasImg={true}/>
              <Block content=""/>
            </div>
            <div className={hashtagCss.hashtags_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <Block content=""/>
              <Block hashtag={hashtag_img_18} hasImg={true}/>
              <Block hashtag={hashtag_img_19} hasImg={true}/>
              <Block hashtag={hashtag_img_20} hasImg={true}/>
            </div>
          </div>

        </section>
        <Footer/>
      </PageLayout>
    </>
    
  )
}