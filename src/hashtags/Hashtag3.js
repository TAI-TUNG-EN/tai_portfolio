import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_3.png'
import prevImg from '../static/img/hashtags/page/hashtag_2.png'
import nextImg from '../static/img/hashtags/page/hashtag_4.png'

export default function Hashtag1() {

  useEffect(()=>{
    window.scrollTo({
    top: 0, 
    behavior: 'smooth'
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

  return(
    <>
      <HashtagTemplate 
        title="日本語オタク"
        description={["いかに日本語と触れ合う時間を増えることができるかを考えて過ごした大学生活。", "留学受験の全盛期は日本語の勉強も兼ねて、字幕を頼らないように、パソコンに紙を貼って字幕を隠した状態でドラマを見ることで友達にドン引きされたこともあります。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
        prevImgUrl="/hashtags/hashtag_2"
        nextImgUrl="/hashtags/hashtag_4"
      />
    </>
  )

}