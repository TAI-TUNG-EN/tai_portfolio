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

const Block = ({hasImg, hashtag, content}) => {
  if(hasImg){
    return(
      <div className={hashtagCss.hashtag_index_container}>
        <img className={hashtagCss.hashtag_index_img_prop} src={hashtag}></img>
      </div>
    )
  } else {
    return(
      <div className={hashtagCss.hashtag_index_container}>
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
            <div className={hashtagCss.hashtags_contents_container}>
              <Block content=""/>
              <Block hashtag={hashtag_img_1} hasImg={true}/>
              <Block hashtag={hashtag_img_2} hasImg={true}/>
              <Block hashtag={hashtag_img_3} hasImg={true}/>
            </div>
          </div>

        </section>
        {/* <Footer/> */}
      </PageLayout>
    </>
    
  )
}