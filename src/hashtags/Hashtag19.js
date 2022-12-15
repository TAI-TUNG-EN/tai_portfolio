import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_19.png'
import prevImg from '../static/img/hashtags/page/hashtag_18.png'
import nextImg from '../static/img/hashtags/page/hashtag_20.png'

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
        title="香りのある暮らし"
        description={["テレワーク時期、マインドセットのため始まる新習慣。", "香水、キャンドル、アロマ。香りグッズは一式揃っています。", "部屋には常に香りを漂っていることで、気分が和んだりリフレッシュできたりします。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_19"
        prevImgUrl="/hashtags/hashtag_18"
        nextImgUrl="/hashtags/hashtag_20"
      />
    </>
  )

}