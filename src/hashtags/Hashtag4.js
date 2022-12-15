import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_4.png'
import prevImg from '../static/img/hashtags/page/hashtag_3.png'
import nextImg from '../static/img/hashtags/page/hashtag_5.jpg'

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
        title="広告専攻"
        description={["台湾の大学では広告学科専攻で、マーケティングとブランディングを勉強。", "学校でのグループ課題も、メディア代理店でのインターンシップのプロジェクトも、", "ターゲット分析を担当することが多かったがゆえに、人にとても興味があります。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
        prevImgUrl="/hashtags/hashtag_3"
        nextImgUrl="/hashtags/hashtag_5"
      />
    </>
  )

}