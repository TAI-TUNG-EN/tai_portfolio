import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos'

import PageLayout from './components/PageLayout'
import Cursor from './Cursor';
import Footer from './Footer'
import Loading from './components/Loading';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import aboutCss from './css/about.module.scss'
import loadingCss from './css/loading.module.scss'
import specialContentsImg from './static/img/special_contents.png'
import { images } from './images.ts'
// import avatarImg from './static/img/about_avatar.svg'
import avatarImg from './static/img/about_avatar-min.png'

const BG_COLOR_1 = "#F6F6F6"
const BG_COLOR_2 = "#DBDEE0"


const Exp = ({year, exp_contents}) => {
  var expRender = exp_contents.map(item => <div>{item}</div>);
  return(
    <div className={aboutCss.about_experience_contents}>
      <div className={aboutCss.about_experience_contents_prop}>{ year }</div>
      <div className={aboutCss.about_experience_contents_prop}>{ expRender }</div>
    </div>
  )
}

/* unused function */
function addToRef(toBeAddList){
  [].forEach.call(toBeAddList, function(r){
    r = useRef(null);
  });
  return toBeAddList;
}

function isInViewPort(element, inViewHeight) {
  // Get the bounding client rectangle position in the viewport
  var bounding = element.getBoundingClientRect();

  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
      (bounding.top >= 0 &&
        ((bounding.top + bounding.bottom) / inViewHeight) <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (bounding.top < 0 && bounding.bottom > 0 &&
        (bounding.bottom) <= (window.innerHeight || document.documentElement.clientHeight))
  ) {
      console.log(bounding.top, ', ', bounding.bottom)
      console.log(window.innerHeight)
      return true;
  } else {
      console.log(`Not in the viewport. :(`);
      return false;
  }
}

function scrollToParagraph( scrollToSection, callback ){
  console.log('scroll to paragraph: ', scrollToSection);
  window.scrollTo({
    top: scrollToSection,
    behavior: 'smooth',
  });

  callback();
}

function isKvScrollThrough(element){
  var bounding = element.getBoundingClientRect();
  if(
    bounding.top >= 0 &&
    bounding.left >= 0
    && ((bounding.top + bounding.bottom)/2) <= (window.innerHeight / 6 || document.documentElement.clientHeight / 6)
  ){
    return true;
  }else{
    return false;
  }
}

export default function About() {

  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 6000)
  // }, [])
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);
      
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])


  
  const kv_ref = useRef(null);
  const kv_ref_1 = useRef(null);
  const kv_ref_2 = useRef(null);
  const paragraph_ref = useRef(null);
  const paragraph_anchor_ref = useRef(null);
  const paragraph_ref_1 = useRef(null);
  const paragraph_ref_2 = useRef(null);
  const paragraph_ref_3 = useRef(null);
  const paragraph_ref_4 = useRef(null);
  const self_intro_img_ref = useRef(null);
  const circle_1_ref = useRef(null);
  const circle_2_ref = useRef(null);
  const name_ref = useRef(null);
  const description_1_ref = useRef(null);
  const description_2_ref = useRef(null);
  const description_3_ref = useRef(null);
  const description_4_ref = useRef(null);
  const exp_ref = useRef(null);
  const view_works_button_container_ref = useRef(null);
  const view_works_button_ref = useRef(null);
  const view_works_button_text_1_ref = useRef(null);
  const view_works_button_text_2_ref = useRef(null);
  const loading_ref = useRef(null);

  const self_intro_ref = useRef(null);
  const special_contents_ref = useRef(null);
  const view_works_ref = useRef(null);
  let isFirstScrollDown = true;

  const [width, setWidth] = useState(window.innerWidth);
  const [kvParallax, setKvParallax] = useState([0, 0]);
  const [footerParallax, setFooterParallax] = useState([0, 0]);


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

  useEffect(()=>{
    if(!isMobile){
      console.log('PC');
      setKvParallax([0, -500]);
    }else{
      console.log('mobile');
      setKvParallax([0, 0]);
    }
  }, [])

  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }, []);

  // if scroll down
  useEffect(() => {
    console.log(isFirstScrollDown);
    const kv = kv_ref.current;
    const kv_list = [ kv_ref_1.current, kv_ref_2.current ];
    const paragraph_anchor = paragraph_ref_1.current.getBoundingClientRect().top + window.scrollY
    const paragraph = paragraph_ref.current
    const paragraph_list = [ paragraph_ref_1.current, paragraph_ref_2.current, paragraph_ref_3.current, paragraph_ref_4.current ]
    const self_intro_img_anchor = self_intro_img_ref.current
    const circle_1 = circle_1_ref.current
    const circle_2 = circle_2_ref.current
    const name_anchor = name_ref.current
    const description_1 = description_1_ref.current
    const description_2 = description_2_ref.current
    const description_3 = description_3_ref.current
    const description_4 = description_4_ref.current
    const exp_anchor = exp_ref.current
    const view_works_button_bg = view_works_button_ref.current
    const view_works_button_text_1 = view_works_button_text_1_ref.current
    const view_works_button_text_2 = view_works_button_text_2_ref.current

    const self_intro = self_intro_ref.current
    const special_contents = special_contents_ref.current
    const view_works = view_works_ref.current

    // ========== view my works button animation =========
    document.getElementsByClassName(`${aboutCss.about_view_my_works_button_link}`)[0].addEventListener('mouseover', ()=>{
      view_works_button_bg.style.width = '12rem';
      view_works_button_bg.style.height = '12rem';
      view_works_button_text_1.style.color = 'white';
      view_works_button_text_2.style.color = 'white';
      view_works_button_bg.style.transition = 'all .4s ease-in-out'
    })
    document.getElementsByClassName(`${aboutCss.about_view_my_works_button_link}`)[0].addEventListener('mouseleave', ()=>{
      view_works_button_bg.style.width = '0rem';
      view_works_button_bg.style.height = '0rem';
      view_works_button_text_1.style.color = '#282D2F';
      view_works_button_text_2.style.color = '#282D2F';
      view_works_button_bg.style.transition = 'all .4s ease-in-out'
    })

    // ========== paragraph scroll to animation ==========
    const paragraph_offsetTop = document.getElementsByClassName(`${aboutCss.about_paragragh_contents_sec}`)[0].offsetTop;
    console.log(paragraph_offsetTop);


    window.onscroll = function (e) {
      /* if first scroll down, then direactly scroll to paragraph */ 
      if(isFirstScrollDown){
        console.log('first scroll');
        scrollToParagraph(300, () => {
          isFirstScrollDown = false;
        });
      }
      /* kv animation */
      if(isKvScrollThrough(kv_list[0])){ 
        console.log('down & kv through');

        [].forEach.call(kv_list, function(el){
          el.style.opacity = '0';
          el.style.transition = 'all 1s ease-in-out';
        });
      }
      else if(this.oldScroll > this.scrollY){
        console.log('up');
        
        [].forEach.call(kv_list, function(el){
          el.style.opacity = '1';
          el.style.transition = 'all .3s ease-in-out';
        });
      }
      else{
        console.log('not moving');
      }
      this.oldScroll = this.scrollY;
      
      /* circle animation */
      if(isInViewPort(self_intro_img_anchor, 2.8)){
        circle_1.style.transform = 'rotate(0deg)';
        circle_1.style.marginLeft = '0';
        circle_1.style.opacity = '1';
        circle_1.style.transition = 'all 1s ease-in-out'
        setTimeout(()=>{
          circle_2.style.transform = 'rotate(0deg)';
          circle_2.style.marginLeft = '-6rem';
          circle_2.style.opacity = '1';
          circle_2.style.transition = 'all 1s ease-in-out' 
        }, 200)
      }
      else{
        circle_1.style.transform = 'rotate(-45deg)';
        circle_1.style.marginLeft = '-5rem';
        circle_1.style.opacity = '0';
        circle_1.style.transition = 'all .3s ease-in-out'
        setTimeout(()=>{
          circle_2.style.transform = 'rotate(-45deg)';
          circle_2.style.marginLeft = '-8rem';
          circle_2.style.opacity = '0';
          circle_2.style.transition = 'all .3s ease-in-out'
        }, 200)
      }

      /* self intro name */
      const description_list = [ name_anchor, description_1, description_2, description_3, description_4 ]
      if(!isMobile){
        if(isInViewPort(self_intro_img_anchor, 1.5)){
          [].forEach.call(description_list, function(des){
            des.style.opacity = '1';
            des.style.transition = 'all .7s ease-in-out';
          })
        } else{
          [].forEach.call(description_list, function(des){
            des.style.opacity = '0';
            des.style.transition = 'all .7s ease-in-out';
          })
        }
      }else{

      }

      /* exp animation */
      if(isInViewPort(exp_anchor, 7)){
        exp_anchor.style.opacity = '1';
        exp_anchor.style.transition = 'all .7s ease-in-out';
      }else{
        exp_anchor.style.opacity = '0';
        exp_anchor.style.transition = 'all .7s ease-in-out';
      }
    }
    
  }, [])
  
  const loading_anchor = loading_ref.current;

  function handleImageLoaded(){
    console.log('Finished loading');
  }

  return(
    <>
      <Cursor cursorTypes='👀' />
      <Loading bg_style={loadingCss.loader_about} loadingTimeControl='3000' ref={loading_ref}/>
      <PageLayout>
        <section id={aboutCss.about}>
          <Navbar />

          <div className={aboutCss.about_kv_container}>
            <div className={aboutCss.about_kv_contents} ref={kv_ref}>
              <div className={aboutCss.about_kv_contents_prop_container}>
                <span className={aboutCss.about_kv_contents_prop} ref={kv_ref_1}>All in design</span>
                <span className={aboutCss.about_kv_contents_prop} ref={kv_ref_2}>All for our beautiful days</span>
              </div>
            </div>
          </div>

          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" />

          <div className={aboutCss.about_paragragh_container} ref={paragraph_ref}>
            <Parallax className={aboutCss.about_paragraph_contents} translateY={kvParallax} speed={-10}>
              <div className={aboutCss.about_paragragh_contents_sec_container}>
                <div className={aboutCss.about_paragragh_contents_sec} ref={paragraph_ref_1}>
                  <span ref={paragraph_anchor_ref}>もう見慣れていたあのポスターも、</span>
                  <span>毎日開いては閉じてのあのアプリも。</span>
                  <span>ビジュアル的なもの、そうではないもの、</span>
                  <span>私たちの行動や体験、あたりまえに繰り返している日常、</span>
                  <span>実は全てがデザインされています。</span>
                  


                </div>
                <div className={aboutCss.about_paragragh_contents_sec} ref={paragraph_ref_2}>
                  <span>だから私は信じている。</span>
                  <span>物事をデザインするのによって私たちの生活をよくすること。</span>
                </div>
                <div className={aboutCss.about_paragragh_contents_sec} ref={paragraph_ref_3}>
                  <span>だから私は考えている。</span>
                  <span>何かブラッシュアップできることがないか。</span>
                  <span>何か新しいアイデアを生み出せるではないか。</span>
                </div>
                <div className={aboutCss.about_paragragh_contents_sec} ref={paragraph_ref_4}>
                  <span>今までも、これからも、より良い明日のために、</span>
                  <span>精度と質の高いデザインを追求し続けます。</span>
                </div>
              </div>
              
            </Parallax>
          </div>

          <div className={aboutCss.about_self_intro_container} ref={self_intro_ref}>
            <Parallax className={aboutCss.about_self_intro_contents}>
              <div className={aboutCss.about_self_intro_contents_container}>
                <img src={avatarImg} alt="tai_avatar" className={aboutCss.about_self_intro_img} ref={self_intro_img_ref} onLoad = {handleImageLoaded()}></img>
                <div className={aboutCss.about_self_intro_right_section_container}>
                  <div className={aboutCss.about_self_intro_circle_container}>
                    <div className={aboutCss.about_self_intro_circle_contents_container}>
                      <div className={aboutCss.about_self_intro_circle_prop} ref={circle_1_ref}>日本語</div>
                      <div className={aboutCss.about_self_intro_circle_prop} ref={circle_2_ref}>ものづくり</div>
                    </div>
                  </div>
                  <div className={aboutCss.about_self_intro_paragraph_container}>
                    <div className={aboutCss.about_self_intro_paragraph_name} ref={name_ref}>Tai, Tung-En</div>
                    <div className={aboutCss.about_self_intro_paragraph_description_container}>
                      <span ref={description_1_ref} className={aboutCss.about_self_intro_paragraph_description_prop}>1997年台湾生まれ。日本語への熱意で来日。</span>
                      <span ref={description_2_ref} className={aboutCss.about_self_intro_paragraph_description_prop}>留学を経て、語学力を活かせながら、大好きなものづくりに携わる仕事をしたいと思い、Webデザイナーとして制作会社へ入社。</span>
                      <span ref={description_3_ref} className={aboutCss.about_self_intro_paragraph_description_prop}>全てのデザインに理由があることを信じ、見た目もロジックも納得してもらえるようなデザインに励んでおります。</span>
                      <span ref={description_4_ref} className={aboutCss.about_self_intro_paragraph_description_prop}>今までは飲食・工務店・クリニック・スポーツジムから化学材料・金属めっきメーカーまで、幅広い分野でWebデザインをしております。デザイン以外、ディレクションとマーケティング、写真撮影も携わっております。</span>
                    </div>
                  </div>
                  <div className={aboutCss.about_underline_div}></div>
                  <div className={aboutCss.about_experience_container} ref={exp_ref}>
                    <Exp year="2021年" exp_contents={["ウィルスタイル株式会社","Webデザイナー新卒入社"]}/>
                    <Exp year="2020年" exp_contents={["台湾国立政治大学卒業","広告学科､デジタルコンテンツ学位取得"]}/>
                    <Exp year="2019年" exp_contents={["京都同志社大学留学"]}/>
                    <Exp year="2018年" exp_contents={["出版社 ハースト・コーポレーション", "コスモポリタン編集部インターンシップ", <br></br>, "メディア代理店 dentsu X","企画部インターンシップ"]}/>
                    <Exp year="2015年" exp_contents={["台湾国立政治大学入学"]}/>
                  </div>
                </div>
                
              </div>
            </Parallax>
          </div>

          <div className={aboutCss.about_special_contents_container} ref={special_contents_ref}>
            <div className={aboutCss.about_special_contents_prop_container}>
              <div className={aboutCss.about_special_contents_title}>Special content - #hashtags of me</div>
              <a href="https://yihanyozikua.github.io/tai_portfolio_hashtags/" className={aboutCss.about_special_contents_white_box_sec_container}>
                <img src={specialContentsImg} className={aboutCss.special_contents_img_prop}></img>
              </a>
            </div>
          </div>

          <div className={aboutCss.about_view_my_works_button_container} ref={view_works_ref}>
            <div className={aboutCss.about_view_my_works_button_prop_container}>
              <Link to="/works" className={aboutCss.about_view_my_works_button_link}>
                <div className={aboutCss.about_view_my_works_contents}>
                  <div className={aboutCss.about_view_my_works_contents_prop} ref={view_works_button_text_1_ref}>Hover to</div>
                  <div className={aboutCss.about_view_my_works_contents_prop} ref={view_works_button_text_2_ref}>View my Works</div>
                </div>
                <div className={aboutCss.about_view_my_works_button_hover_bg} ref={view_works_button_ref}> </div>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </PageLayout>
    </>
    
  )

  
}