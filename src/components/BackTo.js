import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import { images } from '../images.ts'
import backCss from '../css/back.module.scss'
import PageLayout from './PageLayout';
import arrow from '../static/icons/arrow_left.svg'

export default function BackTo({buttonName, url}){
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;
  const isPad = (width > 768) && (width <= 992);
  const button_name_ref = useRef(null);
  const button_name = button_name_ref.current
  useEffect(()=>{
    if(isMobile){
      document.getElementsByClassName(`${backCss.btn_prop}`)[0].style.display = 'none';
      document.getElementsByClassName(`${backCss.back_btn_contents_container}`)[0].style.width = '1rem';
      document.getElementsByClassName(`${backCss.back_btn_contents_container}`)[0].style.height = '1rem';
      // console.log(document.getElementsByClassName(`${backCss.btn_prop}`)[0]);
    }
    else{
      document.getElementsByClassName(`${backCss.btn_prop}`)[0].style.display = 'unset';
      document.getElementsByClassName(`${backCss.back_btn_contents_container}`)[0].style.width = '6rem';
      document.getElementsByClassName(`${backCss.back_btn_contents_container}`)[0].style.height = 'unset';
    }
  }, []);


  return(
    <div className={backCss.back_btn_container}
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="200"
      data-aos-offset="0"
      data-aos-duration="500"
      data-aos-once="false">
      <Link className={backCss.back_btn_contents_container} to={url}>
        <img className={backCss.arrow_prop} src={arrow}></img>
        <div className={backCss.btn_prop} ref={button_name_ref}>{ buttonName }</div>
      </Link>
    </div>
    
  )
}