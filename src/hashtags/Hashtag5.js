import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_5.jpg'
import prevImg from '../static/img/hashtags/page/hashtag_4.png'
import nextImg from '../static/img/hashtags/page/hashtag_6.png'

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
        title="デジタルコンテンツ"
        description={["大学のダブルメジャー。UIUX､HCIデザインを中心に学ぶ学科です。", "授業中のプロジェクトを通して、リサーチとロジックに基づき、ユーザーニーズを第一に考えデザインを起こすことの大切さを実感しました。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
        prevImgUrl="/hashtags/hashtag_4"
        nextImgUrl="/hashtags/hashtag_6"
      />
    </>
  )

}