import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_17.png'
import prevImg from '../static/img/hashtags/page/hashtag_16.png'
import nextImg from '../static/img/hashtags/page/hashtag_18.png'

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
        title="イベントマニア"
        description={["春にはお花見、夏にはフェスや花火大会。", "秋には紅葉巡り、冬にはイルミネーションとクリスマス。", "季節ならではのイベントを全力で楽しめたいタイプです。", "山の日には絶対山登りをして、海の日には必ず海にいくというマイルールもあります。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_17"
        prevImgUrl="/hashtags/hashtag_16"
        nextImgUrl="/hashtags/hashtag_18"
      />
    </>
  )

}