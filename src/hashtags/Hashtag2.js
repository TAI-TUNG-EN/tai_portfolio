import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_2.png'
import prevImg from '../static/img/hashtags/page/hashtag_1.jpg'
import nextImg from '../static/img/hashtags/page/hashtag_3.png'

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
        title="台湾出身"
        description={["台湾生まれ台湾育ち､24年間台湾で生活を送りました。", "南国の島で、暖かいのは気温と、今時珍しい義理人情である。", "回りやすい町、安くて美味しいご飯、数えきれない台湾の魅力をぜひプレゼンテーションさせてください！"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
        prevImgUrl="/hashtags/hashtag_1"
        nextImgUrl="/hashtags/hashtag_3"
      />
    </>
  )

}