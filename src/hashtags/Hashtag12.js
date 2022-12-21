import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_12.png'
import prevImg from '../static/img/hashtags/page/hashtag_11.png'
import nextImg from '../static/img/hashtags/page/hashtag_13.jpeg'

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
        title="ENFJ"
        description={["心理テストなんて信じないのに、16Personalities性格診断テストだけは信じています。", "毎回毎回当てはまりすぎて逆に怖いくらい。", "直近のテスト結果は（主人公）です。", "ENFJは外向(E)、直観(N)、感情(F)、判断(J)を略しています。", "カリスマ性があり、エネルギッシュな野心家だそうです。", "今成長意欲MAXの私にぴったりな結果です。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_12"
        prevImgUrl="/hashtags/hashtag_11"
        nextImgUrl="/hashtags/hashtag_13"
      />
    </>
  )

}