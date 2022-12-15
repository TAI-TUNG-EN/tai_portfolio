import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_6.png'
import prevImg from '../static/img/hashtags/page/hashtag_5.jpg'
import nextImg from '../static/img/hashtags/page/hashtag_7.jpg'

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
        title="カメラ女子"
        description={["一眼カメラ歴は7年目､フィルムカメラ歴は5年目に突入。", "記憶が薄れていくもので､この日のこと､この瞬間のことを形に残さなきゃと思いながらシャッターを切っています。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_6"
        prevImgUrl="/hashtags/hashtag_5"
        nextImgUrl="/hashtags/hashtag_7"
      />
    </>
  )

}