import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import Cursor from '../Cursor';
import Footer from '../Footer'
import Loading from '../components/Loading';
import ProjectKvLayout from '../components/ProjectKvLayout'
import WorksBackToAnchor from '../components/WorksBackToAnchor'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import dinasourCss from '../css/works_dinasour.module.scss'
import loadingCss from '../css/loading.module.scss'
import { images } from '../images.ts'
import banner from '../static/img/works/covers/dinosaur.png'
import dinasour_1 from '../static/img/works/dinasour/dinosaur_01.png'
import dinasour_2 from '../static/img/works/dinasour/dinosaur_01_1.png'
import dinasour_3 from '../static/img/works/dinasour/dinosaur_01_2.png'
import dinasour_4 from '../static/img/works/dinasour/dinosaur_02_1.png'
import dinasour_5 from '../static/img/works/dinasour/dinosaur_02_2.png'

export default function Qdinosaur(){
  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";
  let width_worksBackToAnchor = '50%';

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
  if(!isMobile){width_worksBackToAnchor = '50%';}
  else{width_worksBackToAnchor = '80%'}

  useEffect(() => {
    if(!isMobile){
      document.getElementById('design_show_to_reverse').style.flexDirection = 'row-reverse';
    }
  }, []);

  
  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }, []);

  return(
    <>
      <Cursor cursorTypes='👀' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1000'/>
      <PageLayout>
        <section id={dinasourCss.works_dinasour}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={dinasourCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column-reverse"
              nameEN="Q dinosaur"
              nameCN="恐恐龍"
              type="Line sticker (Side project)" roles={["Design (illustration)"]} date="2020.10-2020.12" tool="Adobe illustratior" 
              url="https://store.line.me/stickershop/product/14468519" 
              urlTitle="Sticker page"
              bannerImg={banner}/>
          
            <div className={dinasourCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={dinasourCss.paragraph_1_title} style={{fontFamily: FONT_EN}}>Q dinosaur makes chat room a cozy place</div>
              <div className={dinasourCss.paragraph_1_description_container}>
                <div className={dinasourCss.paragraph_1_description_prop}>「恐恐」は台湾語でちょっと天然バカで愛おしいと思われる人と言います。</div>
                <div className={dinasourCss.paragraph_1_description_prop}>「出来の悪い子ほど可愛い」という言葉のように､「恐恐」は豊かな表情と天然さのあるポーズで癒しの存在になり、メッセージにスパイスを加える役割を果たします。</div>
              </div>
            </div>

            <div className={dinasourCss.all_dinasours_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <img src={dinasour_1} alt="dinasours" className={dinasourCss.all_dinasours_prop}></img>
            </div>


            <div className={dinasourCss.design_intro_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div id='design_show_to_reverse' className={dinasourCss.design_intro_contents_container}>
                <div className={dinasourCss.design_intro_description_container}>
                  <div className={dinasourCss.design_intro_description_title}>恐竜で決めた理由は？</div>
                  <div className={dinasourCss.design_intro_description_prop}>猫や犬など､可愛いらしい動物のスタンプは既にたくさんあります。</div>
                  <div className={dinasourCss.design_intro_description_prop}>印象に残るスタンプを作りたいと思い､あえてマイナーの恐竜を選びました。</div>
                </div>
                <div className={dinasourCss.design_intro_img_container}>
                  <div className={dinasourCss.design_intro_img_content_container}>
                    <img src={dinasour_2} className={dinasourCss.design_intro_img_prop}></img>
                  </div>
                  <div className={dinasourCss.design_intro_img_content_container}>
                    <img src={dinasour_3} className={dinasourCss.design_intro_img_prop}></img>
                  </div>
                </div>
                
              </div>
            </div>


            <div className={dinasourCss.design_intro_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={dinasourCss.design_intro_contents_container}>
                <div className={dinasourCss.design_intro_description_container}>
                  <div className={dinasourCss.design_intro_description_title}>おすすめポイントは？</div>
                  <div className={dinasourCss.design_intro_description_prop}>可愛いだけではなく実用性も高いところがポイントです。</div>
                  <div className={dinasourCss.design_intro_description_prop}>日常会話はもちろん､雰囲気を和ませたい時や気持ちをもっと表したい時に使えるスタンプも用意したので､どんな場面でも大活躍できて、長く使えるスタンプになります。</div>
                </div>
                <div className={dinasourCss.design_intro_img_container}>
                  <div className={dinasourCss.design_intro_img_content_container}>
                    <img src={dinasour_4} className={dinasourCss.design_intro_img_prop}></img>
                  </div>
                  <div className={dinasourCss.design_intro_img_content_container}>
                    <img src={dinasour_5} className={dinasourCss.design_intro_img_prop}></img>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={dinasourCss.postscript_container}>
              <div className={dinasourCss.postscript_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={dinasourCss.postscript_paragraph_container}>
                  <div className={dinasourCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                </div>
                <div className={dinasourCss.postscript_paragraph_container}>
                  <div className={dinasourCss.postscript_paragraph_prop}>元々口下手な私は、表情が見えない文字のやりとりがとても苦手で、「ちゃんと伝わっているのか」と、メッセージを送る度心配しています。そんな時に私を助けてくれてのはスタンプでした。表情豊かなスタンプをつけることで、より私の口調や表情が伝わるような気がします。</div>
                </div>
                <br></br>
                <div className={dinasourCss.postscript_paragraph_container}>
                  <div className={dinasourCss.postscript_paragraph_prop}>「こういう時、この表情のスタンプを使いたい！」</div>
                  <div className={dinasourCss.postscript_paragraph_prop}>「<span style={{fontFamily: FONT_EN}}>32</span>個スタンプの中にどうしても使わないのがあるのでもったいない...」</div>
                  <div className={dinasourCss.postscript_paragraph_prop}>もっと日常的で、無駄のないスタンプを作りたくて、自分的に使いやすそうなものをはじめ、</div>
                  <div className={dinasourCss.postscript_paragraph_prop}>周りの人にスタンプをつけたい会話やタイミングを聞きまくり、「恐恐」を描きました。</div>
                  <div className={dinasourCss.postscript_paragraph_prop}>外国人の友達も使えるように、あえて文字を加えずに、表情と身振りだけで気持ちを伝えることを心掛けていました。 </div>
                </div>
              </div>  
            </div>
          
            <WorksBackToAnchor 
              prevUrl="/works/anotheries"
              nextUrl="/works/sleep_well"
              containerWidth={width_worksBackToAnchor}/>
          </div>


        </section>
        <Footer />
      </PageLayout>
    </>
  );
}