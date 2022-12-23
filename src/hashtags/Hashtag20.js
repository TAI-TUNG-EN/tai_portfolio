import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_20.png'
import prevImg from '../static/img/hashtags/page/hashtag_19.png'
import nextImg from '../static/img/hashtags/page/hashtag_1.jpg'

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
        title="ヨガ部員"
        description={["普通の常温ヨガからハンモックを使うエアリアルヨガまでやっています。", "きっかけはテレワークによる運動不足を解消するためでしたが、今は生活の一部になって、毎週欠かさずに通っています。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_20"
        prevImgUrl="/hashtags/hashtag_19"
        nextImgUrl="/hashtags/hashtag_1"
      />
    </>
  )

}