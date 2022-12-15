import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_11.png'
import prevImg from '../static/img/hashtags/page/hashtag_10.png'
import nextImg from '../static/img/hashtags/page/hashtag_12.png'

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
        title="一人居酒屋"
        description={["お酒とおしゃべりが大好き。", "留学の時に日本語の勉強は半分学校で、半分居酒屋のカンターで行ったと言っても過言ではありません。京都で一番好きな居酒屋「みず色クラブ」が潰れたこと、今でも悲しく思います。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex={1}
        prevImgUrl="/hashtags/hashtag_10"
        nextImgUrl="/hashtags/hashtag_12"
      />
    </>
  )

}