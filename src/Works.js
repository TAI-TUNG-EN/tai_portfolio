import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from './components/PageLayout'
import Cursor from './Cursor';
import Footer from './Footer'
import Loading from './components/Loading';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import worksCss from './css/works.module.scss'
import loadingCss from './css/loading.module.scss'
import index_anotheries from './static/img/works/indexs/anotheries.jpg'
import index_everything from './static/img/works/indexs/everything.png'
import index_organ from './static/img/works/indexs/organ_voice.JPG'
import index_dinasour from './static/img/works/indexs/dinosaur.png'
import index_sleep from './static/img/works/indexs/sleep_well.png'
import index_surface from './static/img/works/indexs/surface.png'


const Projects = ({name, type, roles, img, imgWidth, imgHeight, descriptionContainerHeight, descriptionPositonChoice, url, positionFinTuning}) => {
  var roleRender = roles.map(item => <div className={worksCss.description_contents_prop}>{item}</div>);
  const description_ref = useRef(null);
  const description_anchor = description_ref.current;

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

  useEffect(() => {
    const len = document.getElementsByClassName(`${worksCss.project_img_prop}`).length;
    for(let i = 0; i < len; i++){
      document.getElementsByClassName(`${worksCss.project_img_container_prop}`)[i].addEventListener('mouseover', ()=>{
        document.getElementsByClassName(`${worksCss.description_container}`)[i].style.opacity = '1';
        document.getElementsByClassName(`${worksCss.description_container}`)[i].style.transition = 'all .3s ease-in-out';
      })
      document.getElementsByClassName(`${worksCss.project_img_container_prop}`)[i].addEventListener('mouseleave', ()=>{
        document.getElementsByClassName(`${worksCss.description_container}`)[i].style.opacity = '0';
        document.getElementsByClassName(`${worksCss.description_container}`)[i].style.transition = 'all .3s ease-in-out';
      })
    }
  }, []);

  if(isMobile){
    positionFinTuning = 0;
  }

  return(
    <div className={descriptionPositonChoice} style={{marginLeft: positionFinTuning}}>
      <div className={worksCss.project_img_and_name_container} >
        <Link className={worksCss.project_img_container_prop} style={{width: imgWidth, height: imgHeight}} to={url}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-once="false">
          <img src={img} className={worksCss.project_img_prop} style={{width: imgWidth, height: imgHeight}} alt={name} ></img>
          <div className={worksCss.bg_white} style={{width: imgWidth, height: imgHeight}}></div>
        </Link>
        <div className={worksCss.project_name} style={{width: imgWidth}}>{ name }</div>
      </div>
      <div className={worksCss.description_container} style={{height: descriptionContainerHeight}} ref={description_ref}>
        <div className={worksCss.decription_contents_container}>
          <div className={worksCss.description_title_prop}>Type.</div>
          <div className={worksCss.description_contents_container}>
            <div className={worksCss.description_contents_prop}>{ type }</div>
          </div>
        </div>
        <div className={worksCss.decription_contents_container}>
          <div className={worksCss.description_title_prop}>Role.</div>
          <div className={worksCss.description_contents_container}>
            { roleRender }
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Works(){
  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }, []);



  return(
    <>
      <Cursor cursorTypes='👋' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1500'/>
      <PageLayout>
        <section id={worksCss.works}>
          <Navbar />
          <Sidebar sidebarTitle="Enjoy this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👋" emoji_2_text="Hover" style={{top: '0'}} />

          <div className={worksCss.declaration_container}>
            <div className={worksCss.declaration_contents_container}>
              <div className={worksCss.text_prop}>制作会社に勤めた時の実績は契約の関係で掲載できないので、</div>
              <div className={worksCss.text_prop}>対面にてご説明させていただけたら幸いです。</div>
            </div>
          </div>
          

          <div className={worksCss.works_container}>
            <div className={worksCss.works_contents_container}>
              <Projects name="Anotheries" type="Website (Side project)" 
                        roles={["Direction, Writing, Project Management,", "Design, Photography"]} 
                        img={index_anotheries} 
                        imgWidth="29.27rem" imgHeight="18.29rem" 
                        descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}
                        url="/works/anotheries"/>

              <Projects name="Q dinosaur" type="Line sticker (Side project)" 
                        roles={["Design (illustration)"]} 
                        img={index_dinasour}
                        imgWidth="29.27rem" imgHeight="18.29rem" 
                        descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_left}`}
                        url="/works/q_dinasour"/>

              <Projects name="SLEEP WELL" type="Application design (School project)" 
                        roles={["Direction, Project Management, Design"]} 
                        img={index_sleep} 
                        imgWidth="29.27rem" imgHeight="18.29rem" 
                        descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}
                        url="/works/sleep_well"/>

              <Projects name="Everything’s Gonna Be Alright" type="Music video" 
                        roles={["Design (illustration), Animation"]} 
                        img={index_everything} 
                        imgWidth="29.27rem" imgHeight="18.29rem" 
                        descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_left}`}
                        url="/works/everything_is_gonna_be_alright"
                        />

              <Projects name="臓器の夜間問診" type="Exhibition (School project)" 
                        roles={["Direction, Project Management,","Design, Photography "]} 
                        img={index_organ} 
                        imgWidth="29.27rem" imgHeight="18.29rem" 
                        descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_right}`}
                        url="/works/organ_voice"
                        />

              <Projects name="SurfAce Apparel" type="Runway animation" 
                        roles={["Project Management, Animation"]} 
                        img={index_surface} 
                        imgWidth="29.27rem" imgHeight="18.29rem" 
                        descriptionContainerHeight="18.29rem" descriptionPositonChoice={`${worksCss.project_container_left}`}
                        url="/works/surface_apparel"/>


            </div>
          </div>
        </section>
        <Footer/>
      </PageLayout>
    </>
    
  )
}