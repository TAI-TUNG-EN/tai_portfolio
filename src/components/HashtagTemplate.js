import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import hashtempCss from '../css/hashtag_template.module.scss'
import PageLayout from '../components/PageLayout'
import Cursor from '../Cursor';
import Sidebar from '../components/Sidebar'
import BackTo from '../components/BackTo';
import Footer from '../Footer'
import HashtagPad from './HashtagPad'

const HashtagTemplate = ({ title, description, mainImg, prevImg, nextImg, currentIndex, prevImgPosition, nextImgPosition }) => {
  var descriptionRender = description.map(item => <div>{item}</div>);
  return(
    <>
      <Cursor cursorTypes='🐭' />
      <PageLayout>
        <section id={hashtempCss.hashtag_template}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="🐭" emoji_2_text="View" marginTopSetting="2rem"/>
          <div className={hashtempCss.hashtag_template_container}>
            <div className={hashtempCss.back_to_container}>
              <BackTo buttonName="Back to list" url="/hashtags" buttonSize="8rem"/>
            </div>
            <div className={hashtempCss.left_container}>
              <div className={hashtempCss.left_top_container}>
                <div className={hashtempCss.title_prop}># { title }</div>
                <div className={hashtempCss.description_prop}>{ description }</div>
              </div>
              <div className={hashtempCss.left_bottom_container}>
                <div className={hashtempCss.pad_conatainer}>
                  <HashtagPad />
                </div>
              </div>
            </div>

            <div className={hashtempCss.right_container}>
              <img src={ prevImg } className={hashtempCss.prev_next_img_prop} style={{objectPosition: prevImgPosition}}></img>
              <img src={ mainImg } className={hashtempCss.main_img_prop}></img>
              <img src={ nextImg } className={hashtempCss.prev_next_img_prop} style={{objectPosition: nextImgPosition}}></img>
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