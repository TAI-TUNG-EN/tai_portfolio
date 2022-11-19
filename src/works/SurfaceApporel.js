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
import banner from '../static/img/works/covers/surface.png'
import surfaceCss from '../css/works_surface.module.scss'
import loadingCss from '../css/loading.module.scss'
import surface_1 from '../static/img/works/surfAce_apparel/surface_01.png'
import surface_2 from '../static/img/works/surfAce_apparel/surface_02.png'
import surface_3 from '../static/img/works/surfAce_apparel/surface_03.png'
import surface_4 from '../static/img/works/surfAce_apparel/surface_04.png'
import surface_7 from '../static/img/works/surfAce_apparel/surface_05.png'
import surface_video_1 from '../static/img/videos/surface_stage.mp4'
import surface_video_2 from '../static/img/videos/main_comp.mp4'
import { images } from '../images.ts'

export default function SurfaceApporel(){
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
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1000'/>
      <PageLayout>
        <section id={surfaceCss.works_surface}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={surfaceCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameEN="SurfAce Apparel"
              type="Runway animation" roles={["Project Management, Design , Animation"]} date="2018.10-2018.12" tool="After Effects, Photoshop" url="https://store.line.me/stickershop/product/14468519" urlTitle="Watch the video"
              bannerImg={banner}
              urlNeed='false'/>

            <div className={surfaceCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={surfaceCss.paragraph_1_title}>サーフィンをはじめ､マリンスポーツするための水着</div>
              <div className={surfaceCss.paragraph_1_description_container}>
                <div className={surfaceCss.paragraph_1_description_prop}>この作品は、<span style={{fontFamily: FONT_EN}}>CAMPUS COLLECTION IN TAIWAN 2018</span>で登場したスポーツ水着ブランド<span style={{fontFamily: FONT_EN}}>SurfAce Apparel</span>のために作られたランウェイ動画です。</div>
                <div className={surfaceCss.paragraph_1_description_prop}><span style={{fontFamily: FONT_EN}}>SurfAce Apparel</span>は台湾とスイスのハーフの女の子が立ち上げたブランドで、<span style={{fontFamily: FONT_EN}}>Surf</span>（サーフィン）<span style={{fontFamily: FONT_EN}}> + Ace</span>（エース）という意味しています。全ての女の子がきれいな水着を着て、自信満々でサーフィンボードに立てるという願いを込めて、機能と安全性を重視しつつ、シンプルのシルエットに鮮やかでカラフルな色みと相まって、海で写真映えする水着が作っておられています。</div>
              </div>
            </div>

            <div className={surfaceCss.show_project_container}>
              <div className={surfaceCss.show_project_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={surfaceCss.show_project_row}>
                  <img src={surface_1} className={surfaceCss.show_project_img_prop}></img>
                  <img src={surface_2} className={surfaceCss.show_project_img_prop}></img>
                </div>
              </div>
            </div>


            <div className={surfaceCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={surfaceCss.paragraph_1_title}>夏の風情が漂う動画に</div>

              <div className={surfaceCss.paragraph_1_description_container}>
                <div className={surfaceCss.paragraph_1_description_prop}>動画ではカラフルな水着を引き立てるために､爽やかな白と水色をメインカラーとして使用しました。海、青い空、砂浜の要素を入れることで夏を連想させ、そこで<span style={{fontFamily: FONT_EN}}>SurfAce Apparel</span>の水着を着用しているモデルさんが登場し、背景の動画合わせたら、まるで夏の海辺が目の前に広がっているようなステージになりました。</div>
                <div className={surfaceCss.paragraph_1_description_prop}>動きにはロゴのデザインに合わせて、手書きのエフェクトと流動性のある波のあしらいを加えました。後半では海で開催される夏の音楽祭をイメージし、オーディオウェブとネオンカラーを使用し、夏ならではの賑やかさを表現しています。</div>
              </div>
            </div>

            <div className={surfaceCss.show_project_container}>
              <div className={surfaceCss.show_project_contents_container} style={{width:'55%'}}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={surfaceCss.show_project_row}>
                  <img src={surface_3} className={surfaceCss.show_project_img_prop}></img>
                  <img src={surface_4} className={surfaceCss.show_project_img_prop}></img>
                </div>
              </div>
            </div>
          
            <div className={surfaceCss.animation_container}>
              <div className={surfaceCss.animation_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={surfaceCss.video_container}>
                  <div className={surfaceCss.title_prop}>Full animation</div>
                  <video controls className={surfaceCss.animation_prop}>
                    <source src={surface_video_2} type="video/mp4"/>
                  </video>
                </div>
                <div className={surfaceCss.video_container}>
                  <div className={surfaceCss.title_prop}>SurfAce Apparel stage</div>
                  <video controls className={surfaceCss.animation_prop}>
                    <source src={surface_video_1} type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>

            <div className={surfaceCss.present_img_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <img src={surface_7} alt="SurfAce Present by" className={surfaceCss.pieces_prop}></img>
            </div>

            <div className={surfaceCss.present_by_text_container}>
              <div className={surfaceCss.present_by_text_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={surfaceCss.present_by_text_prop}>
                  <span style={{fontFamily: FONT_EN}}>CAMPUS COLLECTION</span>は大阪が発祥で、ランウェイ、ダンスと音楽のパフォーマンス、コスメ展示などを含めたファションイベントです。出演者から運営スタッフまで全部学生が携わるのが特徴で、大阪をはじめ、海外を含めて<span style={{fontFamily: FONT_EN}}>15</span>都市での開催実績があります。
                </div>
              </div>
            </div>

            <div className={surfaceCss.postscript_container}>
            <div className={surfaceCss.postscript_contents_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">

              <div className={surfaceCss.postscript_paragraph_container}>
                <div className={surfaceCss.postscript_paragraph_title_prop}>制作の振り返り</div>
              </div>
              <div className={surfaceCss.postscript_paragraph_container}>
                <div className={surfaceCss.postscript_paragraph_prop}>
                  <span style={{fontFamily: FONT_EN}}>SurfAce Apparel</span>
                  の動画を制作していた日々を思い返せば、
                  <span style={{fontFamily: FONT_EN}}>After Effects</span>
                  で秒刻みの手作業をする時間でした。ショーで登場されるモデルさんと服の雰囲気の確認しながら、音楽のを聞き倒してリズムを把握し、如何に服、音楽、動画を調和し、このステージを映えさせるのかをひたすら考えていました。
                </div>
                <br></br>
                <div className={surfaceCss.postscript_paragraph_prop}>イベント当日、ステージはまだ暗いまま音楽が流され、</div>
                <div className={surfaceCss.postscript_paragraph_prop}>パッと後ろのクリーンに映された動画で会場を照らし、ショーが始まる。</div>
                <div className={surfaceCss.postscript_paragraph_prop}>なんていう幸せな光景だなあ、その時の感動は一生忘れません。</div>
              </div>
              <br></br>
              <div className={surfaceCss.postscript_paragraph_container}>
                <div className={surfaceCss.postscript_paragraph_prop}>当時はとても誇らしく、納得した作品だと思いましたが、今見返してみると海と夏だけではなく、もっとブランドのコンセプトに沿って、サーフィンなどマリンスポーツの要素を入れたらより良いかと、いくつかの反省点がありました。</div>
                <div className={surfaceCss.postscript_paragraph_prop}>過去の作品を見ながら「こうすればよかった」「今ならこうもできる」など、ブラッシュアップのアイデアを次々と生み出します。これがものづくりの人たち、誰かも通る道でしょうか。</div>
              </div>
            </div>
          </div>

          
            <WorksBackToAnchor 
                prevUrl="/works/organ_voice"
                nextUrl="/works/anotheries"
                containerWidth={width_worksBackToAnchor}/>
          </div>
          
          
          
        </section>
        <Footer />
      </PageLayout>
    </>
  );
}










