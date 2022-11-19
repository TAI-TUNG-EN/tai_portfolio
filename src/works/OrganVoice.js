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
import banner from '../static/img/works/covers/organ_voice.jpg'
import organCss from '../css/works_organ.module.scss'
import loadingCss from '../css/loading.module.scss'
import organ_1 from '../static/img/works/organ_voice/organ_voice_01.JPG'
import organ_2 from '../static/img/works/organ_voice/organ_voice_02.jpg'
import organ_3 from '../static/img/works/organ_voice/organ_voice_03.jpg'
import organ_4 from '../static/img/works/organ_voice/organ_voice_04.jpg'
import organ_5 from '../static/img/works/organ_voice/organ_voice_05.jpg'
import organ_6 from '../static/img/works/organ_voice/organ_voice_06.jpg'
import organ_7 from '../static/img/works/organ_voice/organ_voice_07.jpg'
import organ_8 from '../static/img/works/organ_voice/organ_voice_08.jpg'
import { images } from '../images.ts'

export default function OrganVoice(){
  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";
  let width_worksBackToAnchor = '50%';
  
  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }, []);

  // detect device
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
  if(!isMobile){width_worksBackToAnchor = '50%';}
  else{width_worksBackToAnchor = '80%'}


  return(
    <>
      <Cursor cursorTypes='👀' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='loadingTimeControl'/>
      <PageLayout>
        <section id={organCss.works_organ}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={organCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column-reverse"
              nameJP="臓器の夜間問診"
              type="Exhibition (School project)" roles={["Direction, Project Management,", "Design, Photography "]} date="2018.10-2018.12" tool="Illustrator, Photoshop, Lightroom" 
              url="" urlTitle=""
              bannerImg={banner}
              urlNeed='false'/>


            <div className={organCss.paragraph_1_container}>
              {/* <div className={organCss.paragraph_1_title}>大丈夫、あなたは一人じゃない。</div> */}
              <div className={organCss.paragraph_1_description_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">



                <div className={organCss.paragraph_1_description_prop}>「臓器の夜間問診」は政治大学のデザインサークル「<span style={{fontFamily: FONT_EN}}>ITLAB</span>」の年次展示会で展示した作品です。</div>
                <div className={organCss.paragraph_1_description_prop}>
                大学生はよく徹夜や断食ダイエットなどの悪い生活習慣で体調が崩されたりします。「若いから大丈夫！」と言い張って、生活習慣を見直そうとしない人が自分達を含め、周りもたくさんいます。しかし、どんな丈夫な体にも限界があり、耐えられない日もいつか来ること、同世代の大学生に意識してほしいと思い、この作品を作りました。
                </div>
              </div>
              
              <div className={organCss.middleImg}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <img src={organ_1} alt="everything is gonna be alright" className={organCss.pieces_prop} style={{margin: '3rem 0'}}></img>
              </div>

              <div className={organCss.paragraph_1_description_container} style={{marginBottom: '2rem'}}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">

                <div className={organCss.paragraph_1_description_prop}>病みを抱えている臓器たちは人間が眠りにつく間に夜間の問診に行き、本音を吐き出すというイメージをしました。</div>
                <div className={organCss.paragraph_1_description_prop}>
                徹夜で一番ダメージが与えられる肝臓をはじめ、肺、胃、脳、心臓、五つの臓器はそれぞれの悩みがあり、私たちに伝えたいことがあります。その本音をユーモアでちょっとした皮肉さのあるポエムで表現し、写真と相まって、印象的な作品を展示しました。
                </div>
              </div>

              <div className={organCss.middleImg}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <img src={organ_2} alt="everything is gonna be alright" className={organCss.pieces_prop}></img>
              </div>
              <div className={organCss.middleImg}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <img src={organ_3} alt="everything is gonna be alright" className={organCss.pieces_prop}></img>
              </div>
              <div className={organCss.middleImg}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <img src={organ_4} alt="everything is gonna be alright" className={organCss.pieces_prop}></img>
              </div>
              <div className={organCss.middleImg}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <img src={organ_5} alt="everything is gonna be alright" className={organCss.pieces_prop}></img>
              </div>
              <div className={organCss.middleImg}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <img src={organ_6} alt="everything is gonna be alright" className={organCss.pieces_prop}></img>
              </div>


              <div className={organCss.photo_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={organCss.photo_description_container}>
                  <img src={organ_7} alt="everything is gonna be alright" className={organCss.photo_prop}></img>
                  <div className={organCss.description_prop}>臓器たちからのメッセージが書かれた処方箋を注射器のおもちゃに入れて、薬として来場者に持ち帰りいただけます。</div>
                </div>
                <div className={organCss.photo_description_container}>
                  <img src={organ_8} alt="everything is gonna be alright" className={organCss.photo_prop}></img>
                  <div className={organCss.description_prop}>「夜間問診」なのでクリニックの雰囲気をより感じていただくため、作品の紹介をクリニックの玄関によく見かける札にして、作品のコンセプトと説明とともに、注射器の開け方、廃棄方法も掲載します。</div>
                </div>
              </div>


              <div className={organCss.postscript_container}>
                <div className={organCss.postscript_contents_container}>
                  <div className={organCss.postscript_paragraph_container}
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset="0"
                    data-aos-duration="300"
                    data-aos-once="false">
                    <div className={organCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                  </div>
                  <div className={organCss.postscript_paragraph_container}
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset="0"
                    data-aos-duration="300"
                    data-aos-once="false">
                    <div className={organCss.postscript_paragraph_prop}>ちょうど大学<span style={{fontFamily: FONT_EN}}>2</span>年生の頃、インタネットで「爆肝」という言葉が流行っていました。</div>
                    <div className={organCss.postscript_paragraph_prop}>日本語で訳したら、寝る間も惜しんで、身体を休めずに頑張ったら肝臓が爆発してしまうということ。その時は、徹夜＝夢中になることに頑張っている証で、ポジティブな行為として捉えます。</div>
                    <div className={organCss.postscript_paragraph_prop}>何かに夢中になること、本来はとても素敵なことなのに、笑いながら「昨日爆肝したね」を言う同級生を見て、なんか悲しく感じました。身体を壊したら、元の子もないのに。</div>
                  </div>
                  <br></br>
                  <div className={organCss.postscript_paragraph_container}
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset="0"
                    data-aos-duration="300"
                    data-aos-once="false">
                    <div className={organCss.postscript_paragraph_prop}>この作品を通して気づいてほしい、</div>
                    <div className={organCss.postscript_paragraph_prop}>あなたの身体が伝えたい、大事なこと。</div>
                  </div>
                </div>

                <div className={organCss.especially_thanks_container}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false">
                  <div className={organCss.especially_thanks_contents_container}>
                    <div className={organCss.especially_thanks_title_prop}>Especially thanks</div>
                    <div className={organCss.especially_thanks_description_prop}>Illustration</div>
                    <div className={organCss.especially_thanks_description_prop}>Willi</div>
                  </div>
                </div>
              </div>

            </div>
          
            <WorksBackToAnchor 
              prevUrl="/works/everything_is_gonna_be_alright"
              nextUrl="/works/surface_apparel"
              containerWidth={width_worksBackToAnchor}/>
          </div>
          
        </section>
        <Footer />
      </PageLayout>
    </>
  );
}







