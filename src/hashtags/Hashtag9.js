import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_9.png'
import prevImg from '../static/img/hashtags/page/hashtag_8.png'
import nextImg from '../static/img/hashtags/page/hashtag_10.png'

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
        title="ヨーグルト妖怪"
        description={["特にBifiX依存症、ひどい時には1日一パックのペースで消費。", "冷蔵庫に常備しないと不安で不安で仕方ないです。", "一番の食べ方はカルビーのフルグラ フルーツグラノーラと混ぜて食べます。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_9"
        prevImgUrl="/hashtags/hashtag_8"
        nextImgUrl="/hashtags/hashtag_10"
      />
    </>
  )

}