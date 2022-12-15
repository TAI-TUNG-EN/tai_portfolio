import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_7.jpg'
import prevImg from '../static/img/hashtags/page/hashtag_6.png'
import nextImg from '../static/img/hashtags/page/hashtag_8.png'

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
        title="毎日自炊"
        description={["平日では晩ごはんと明日の弁当作りは30分で完結させます。", "週末ではレシピ本を参照しながら手を込んだ料理を挑戦します。", "最近は冷凍スープにはまっております。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
        prevImgUrl="/hashtags/hashtag_6"
        nextImgUrl="/hashtags/hashtag_8"
      />
    </>
  )

}