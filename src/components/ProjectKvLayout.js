import React, { useEffect, useRef, useState }  from 'react'
import PropTypes from 'prop-types'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom'
import AOS from 'aos';


import Cursor from '../Cursor'
import Footer from '../Footer'
import BackTo from './BackTo';
import projectKvCss from '../css/project_kv_layout.module.scss'
import arrow from '../static/icons/arrow_up_right.svg'



export default function ProjectKvLayout ({ kv_column_direction, names, type, roles, date, tool, bannerImg, bannerHeight, bannerImgPosition, url, urlTitle, urlNeed, comment}){
  console.log(kv_column_direction);
  var roleRender = roles.map(item => <div className={projectKvCss.detailed_info_prop_contents}>{item}</div>);
  var nameRender = names.map(item => <div>{item}</div>);
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    if(urlNeed == 'false'){
      document.getElementsByClassName(`${projectKvCss.detailed_info_right_container}`)[0].style.display = 'none';
    }
  }, []);
  
  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";

  return(
    <div className={projectKvCss.project_kv}>
      <BackTo buttonName="Back to list" url="/works" buttonSize="7rem"/>
      <div className={projectKvCss.kv_container} style={{flexDirection: kv_column_direction}}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
        data-aos-duration="500"
        data-aos-once="false">
        <div className={projectKvCss.info_container}>
          <div className={projectKvCss.project_name_prop}>
            {nameRender}
          </div>
          <div className={projectKvCss.detailed_info_container}>
            <div className={projectKvCss.detailed_info_left_container}>
              <div className={projectKvCss.detailed_info_each_container}>
                <div className={projectKvCss.detailed_info_prop_title}>Type.</div>
                <div className={projectKvCss.detailed_info_prop_contents}>{ type }</div>
              </div>
              <div className={projectKvCss.detailed_info_each_container}>
                <div className={projectKvCss.detailed_info_prop_title}>Role.</div>
                { roleRender }
              </div>
              <div className={projectKvCss.detailed_info_each_container}>
                <div className={projectKvCss.detailed_info_prop_title}>Date.</div>
                <div className={projectKvCss.detailed_info_prop_contents}>{ date }</div>
              </div>
              <div className={projectKvCss.detailed_info_each_container}>
                <div className={projectKvCss.detailed_info_prop_title}>Tool.</div>
                <div className={projectKvCss.detailed_info_prop_contents}>{ tool }</div>
              </div>
            </div>
            {/* <div>{ urlRender }</div> */}
            <div className={projectKvCss.detailed_info_right_container}>
              <div className={projectKvCss.detailed_info_right_contents_container}>
                <a href={ url } className={projectKvCss.url_prop} target="_blank">{ urlTitle }</a>
                <img src={ arrow } className={projectKvCss.arrow_prop}></img>
              </div>
            </div>
          </div>
        
          <div>{ comment }</div>
        </div>
        
        <div className={projectKvCss.banner_container}>
          <img src={ bannerImg } alt={ names } className={projectKvCss.banner_img_prop} style={{objectPosition: bannerImgPosition, height: bannerHeight}}></img>
        </div>
      </div>
    </div>
  )
}