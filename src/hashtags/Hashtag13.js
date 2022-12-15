import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_13.jpeg'
import prevImg from '../static/img/hashtags/page/hashtag_12.png'
import nextImg from '../static/img/hashtags/page/hashtag_14.png'

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
        title="コピー本大好き"
        description={["美しい言葉と出会ったら心がグッと刺されたようにときめきます。", "コピー本を読むたび、やはり日本語が好きだって再確認できた。", "実は初めて買った日本語の本もキャッチコピー集でした。", "おすすめは「何度も読みたい広告コピー」と「3秒でハッピーになれる名言セラピー」です。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_13"
        prevImgUrl="/hashtags/hashtag_12"
        nextImgUrl="/hashtags/hashtag_14"
      />
    </>
  )

}