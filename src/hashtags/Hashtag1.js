import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import HashtagTemplate from '../components/HashtagTemplate';
import Cursor from '../Cursor';
import Footer from '../Footer'

import mainImg from '../static/img/hashtags/page/hashtag_1.jpg'
import prevImg from '../static/img/hashtags/page/hashtag_20.png'
import nextImg from '../static/img/hashtags/page/hashtag_2.png'

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
      <Cursor cursorTypes='🐭' />
      <HashtagTemplate 
        title="シェアハウス5年目"
        description={["共同生活と国際交流が得意。", "今まではアメリカ､中国､韓国､フランス､イギリス､フィンランド､メキシコ､リトアニア､日本出身の子とひとつ屋根の下に生活したことがあり、違う言語が飛び交う生活を楽しんでいます。"]}
        hashtagImg={ mainImg }
        prevImg={ prevImg }
        nextImg={ nextImg }
        currentIndex={1}
      />
    </>
  )

}