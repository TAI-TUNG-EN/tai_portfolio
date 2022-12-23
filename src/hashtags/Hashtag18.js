import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';

import mainImg from '../static/img/hashtags/page/hashtag_18.png'
import prevImg from '../static/img/hashtags/page/hashtag_17.png'
import nextImg from '../static/img/hashtags/page/hashtag_19.png'

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
        title="パックチ苦手"
        description={["小さい頃から食べ物がほとんどないことに自慢していたが、どうしても受け入れないものが一つあります。", "多くの台湾料理にはパックチがデフォルトで入っているので、取るのは必死。", "今年こそ！って毎年パックチ料理を挑戦していたが、", "本当に無理そうなのでもうチャンスを与えません。ごめんなさい。"]}
        mainImg={ mainImg }
        prevImg={ prevImg }
        prevImgPosition="center"
        nextImg={ nextImg }
        nextImgPosition="top"
        currentIndex="hashtag_18"
        prevImgUrl="/hashtags/hashtag_17"
        nextImgUrl="/hashtags/hashtag_19"
      />
    </>
  )

}