import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_14.png'
import prevImg from '../static/img/hashtags/page/hashtag_13.jpeg'
import nextImg from '../static/img/hashtags/page/hashtag_15.jpg'

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
        title="被写体にもなれる"
        description={["こう見えて、実は小さい頃の夢はモデルになることでした。", "しかし、そんな願いを叶えずに、鏡に映っている現実を見ながらそのまま大人になりました。", "それでも、心の中にモデル魂まだ残っていたようで、大学時代からカメラを練習したい友達の被写体になったり、今もたまに写真を撮ってもらっています。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
        prevImgUrl="/hashtags/hashtag_13"
        nextImgUrl="/hashtags/hashtag_15"
      />
    </>
  )

}