import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_8.png'
import prevImg from '../static/img/hashtags/page/hashtag_7.jpg'
import nextImg from '../static/img/hashtags/page/hashtag_9.png'

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
        title="典型的なB型"
        description={["日本に来て初めて知った、みんなはよく血液型を話題にすること。", "（台湾では星座を語ることが多いです。）", "よくA型と思われますが、実は典型的なB型である自覚があります。", "好奇心旺盛、マイペース、好き嫌いがはっきりなど、血液型分析サイトに書かれた特徴をほぼ当てはまります。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
        prevImgUrl="/hashtags/hashtag_7"
        nextImgUrl="/hashtags/hashtag_9"
      />
    </>
  )

}