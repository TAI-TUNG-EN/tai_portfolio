import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_16.png'
import prevImg from '../static/img/hashtags/page/hashtag_15.jpg'
import nextImg from '../static/img/hashtags/page/hashtag_17.png'

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
        title="Apple製品愛用者"
        description={["これは多くな方に共感してもらえると思います。", "初めはiPhone、次はMacBookとiPad、イヤホン買う時そろそろ別のものにしようと思い、いろいろ試したけど、結局AirPods Proを購入。", "もうアップルの沼から離れません。今はApple watchを狙っています。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_16"
        prevImgUrl="/hashtags/hashtag_15"
        nextImgUrl="/hashtags/hashtag_17"
      />
    </>
  )

}