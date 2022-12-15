import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import { HiArrowLongLeft } from "react-icons/hi2"
import hashtempCss from '../css/hashtag_template.module.scss'
import PageLayout from '../components/PageLayout'
import Cursor from '../Cursor';
import Sidebar from '../components/Sidebar'
import BackTo from '../components/BackTo';
import Footer from '../Footer'
import HashtagPad from './HashtagPad'
import indexEntryButtonImg from '../static/img/hashtags/mobileIndexEntry.png'


const HashtagTemplate = ({ title, description, mainImg, prevImg, nextImg, currentIndex, prevImgPosition, nextImgPosition, prevImgUrl, nextImgUrl }) => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
  const SidebarHashtagTemplate = () => {
    if(isMobile){
      return(
        <></>
      )
    }else {
      return(
        <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="🐭" emoji_2_text="View" marginTopSetting="2rem"/>
      )
    }
  }

  var descriptionRender = description.map(item => <div>{item}</div>);
  return(
    <>
      <Cursor cursorTypes='🐭' />
      <PageLayout>
        <SidebarHashtagTemplate/>
        <section id={hashtempCss.hashtag_template}>
          <Link to="/hashtags_mobile" className={hashtempCss.index_entry_button_img_container}>
            <img src={indexEntryButtonImg} className={hashtempCss.index_entry_button_img_prop}></img>
          </Link>
          <div className={hashtempCss.hashtag_template_container}>
            <div className={hashtempCss.back_to_container}>
              {/* <BackTo buttonName="Back to list" url="/hashtags" buttonSize="8rem"/> */}
              <Link to="/hashtags" className={hashtempCss.back_to_about_prop}><HiArrowLongLeft/>&ensp;Back to list</Link>
            </div>
            <div className={hashtempCss.left_container}>
              <div className={hashtempCss.left_top_container}>
                <div className={hashtempCss.title_prop}># { title }</div>
                <div className={hashtempCss.description_prop}>{ description }</div>
              </div>
              <div className={hashtempCss.left_bottom_container}>
                <div className={hashtempCss.pad_conatainer}>
                  <HashtagPad currentIndex={currentIndex} padSize="10%"/>
                </div>
              </div>
            </div>

            <div className={hashtempCss.right_container}>
              <Link to={prevImgUrl} className={hashtempCss.prev_next_img_prop}>
                <img src={ prevImg } style={{objectPosition: prevImgPosition}} className={hashtempCss.link_img_prop}></img>
              </Link>
              <img src={ mainImg } className={hashtempCss.main_img_prop}></img>
              <Link to={nextImgUrl} className={hashtempCss.prev_next_img_prop}>
                <img src={ nextImg } style={{objectPosition: nextImgPosition}} className={hashtempCss.link_img_prop}></img>
              </Link>
            </div>

          </div>
        </section>
        <Footer />
      </PageLayout>
    </>
  )
}

// HashtagTemplate.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.array,
//   mainImg: PropTypes.string,
//   prevImg: PropTypes
// }

// HashtagTemplate.propTypes = {

// }

export default HashtagTemplate;