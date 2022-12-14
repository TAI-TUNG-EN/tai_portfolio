import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_15.jpg'
import prevImg from '../static/img/hashtags/page/hashtag_14.png'
import nextImg from '../static/img/hashtags/page/hashtag_16.png'

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
        title="気づいたら海へ"
        description={["元気な時も、そうでない時。", "少し沈む時も、そうでない時。", "気づいたら海に向かう自分がいます。", "海が好きすぎて、船に乗って、太平洋まで見に行きました。", "綺麗な水平線に魅せられて、思わず撮ったのはこちらの写真です。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
      />
    </>
  )

}