import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import PageLayout from '../components/PageLayout'
import Cursor from '../Cursor';
import Footer from '../Footer'
import Loading from '../components/Loading';
import ProjectKvLayout from '../components/ProjectKvLayout'
import WorksBackToAnchor from '../components/WorksBackToAnchor'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import banner from '../static/img/works/covers/sleep_well.png'
import sleepCss from '../css/works_sleep.module.scss'
import loadingCss from '../css/loading.module.scss'
import sleep_1 from '../static/img/works/sleep_well/sleep_well_01_1.png'
import sleep_2 from '../static/img/works/sleep_well/sleep_well_01_2.png'
import sleep_3 from '../static/img/works/sleep_well/sleep_well_02_1.png'
import sleep_4 from '../static/img/works/sleep_well/sleep_well_02_2.png'
import sleep_5 from '../static/img/works/sleep_well/sleep_well_03_1.png'
import sleep_6 from '../static/img/works/sleep_well/sleep_well_03_2.png'
import color_1 from '../static/img/works/sleep_well/color_1.png'
import color_2 from '../static/img/works/sleep_well/color_2.png'
import { images } from '../images.ts'

export default function SleepWell(){
  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";
  
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
  const isPad = (width > 768) && (width <= 992);
  let width_worksBackToAnchor = '70%';
  if(isMobile){
    width_worksBackToAnchor = '80%'
  } else if(isPad){
    width_worksBackToAnchor = '75%'
  } else{
    width_worksBackToAnchor = '70%'
  }

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
      <Cursor cursorTypes='👀' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1000'/>
      <PageLayout>
        <section id={sleepCss.works_sleep}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={sleepCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameEN="SLEEP WELL"
              type="Application design (School project)" roles={["Direction, Project Management,", "Design"]} 
              date="2018.10-2018.12" tool="Xmind, Adobe XD" 
              url="http://tuip2t5.weebly.com/" urlTitle="Project site"
              comment={<div className={sleepCss.project_kv_comment_prop}>
                <span style={{fontFamily: FONT_EN}}>※Project site</span>
                は
                <span style={{fontFamily: FONT_EN}}>weebly</span>
                で作成したもので、
                <span style={{fontFamily: FONT_EN}}>SSL</span>
                を設置しておらず、閲覧できない恐れがあります。（
                <span style={{fontFamily: FONT_EN}}>Safari</span>
                にでご覧いただけます。）
              </div>}
              bannerImg={banner}/>
            
            <div className={sleepCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={sleepCss.paragraph_1_title}>今日からぐっすり寝よう</div>
              <div className={sleepCss.paragraph_1_description_container}>
                <div className={sleepCss.paragraph_1_description_prop}><span style={{fontFamily: FONT_EN}}>SLEEP WELL</span>は名前の通り、より良い睡眠を取るためにお手伝いする睡眠管理アプリです。</div>
                <div className={sleepCss.paragraph_1_description_prop}>現行他社のアプリですでに提供されているアラーム、データ分析、睡眠サポート、カスタマイズ設定以外、朝活任務、睡眠日記、テーマ変更など、実用かつ面白みのある機能を加えることで、アプリの使用意欲を高め、より良い睡眠を取れることに繋がります。</div>
              </div>
            </div>


            <div className={sleepCss.reason_container}>
              <div className={sleepCss.reason_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">

                <div className={sleepCss.reason_contents_each_container}>
                  <div className={sleepCss.reason_title_prop} style={{fontFamily: FONT_EN}}>Why</div>
                  <div className={sleepCss.reason_description_container}>
                    <div className={sleepCss.reason_description_prop}>◆睡眠問題による生活習慣病</div>
                    <div className={sleepCss.reason_description_prop}>◆若者の徹夜問題</div>
                    <div className={sleepCss.reason_description_prop}>◆ストレスが睡眠の質に影響を与える</div>
                  </div>
                </div>

                <div className={sleepCss.reason_contents_each_container}>
                  <div className={sleepCss.reason_title_prop} style={{fontFamily: FONT_EN}}>What</div>
                  <div className={sleepCss.reason_description_container}>
                    <div className={sleepCss.reason_description_prop}>◆現行アプリの機能統合</div>
                    <div className={sleepCss.reason_description_prop}>◆データを通して睡眠の質を可視化</div>
                    <div className={sleepCss.reason_description_prop}>◆早寝早起きへの意識づくり</div>
                  </div>
                </div>
                
                <div className={sleepCss.reason_contents_each_container}>
                  <div className={sleepCss.reason_title_prop} style={{fontFamily: FONT_EN}}>Who</div>
                  <div className={sleepCss.reason_description_container}>
                    <div className={sleepCss.reason_description_prop}>◆<span style={{fontFamily: FONT_EN}}>15~25</span>歳の学生</div>
                    <div className={sleepCss.reason_description_prop}>◆睡眠問題を抱える</div>
                    <div className={sleepCss.reason_description_prop}>◆健康・体調管理に努める</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={sleepCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={sleepCss.paragraph_1_title}>睡眠にまつわる悩みを一つのアプリで完結</div>
              <div className={sleepCss.paragraph_1_description_container}>
                <div className={sleepCss.paragraph_1_description_prop}>現行アプリの機能統合は<span style={{fontFamily: FONT_EN}}>SLEEP WELL</span>の大きな特徴です。</div>
                <div className={sleepCss.paragraph_1_description_prop}>◆寝つきが悪い</div>
                <div className={sleepCss.paragraph_1_description_prop}>睡眠日記で気持ちを整理したり、ホワイトノイズの曲で心をリラックスしたり、眠りにつきやすい状態になることを手伝う機能を充実します。</div>
                <div className={sleepCss.paragraph_1_description_prop}>◆寝る時間が足りない</div>
                <div className={sleepCss.paragraph_1_description_prop}>睡眠時間を把握やすいため、毎日の睡眠状況を記録し、睡眠時間は<span style={{fontFamily: FONT_EN}}>6</span>時間未満だとリマインドの通知が来るようにします。</div>
                <div className={sleepCss.paragraph_1_description_prop}>◆良い睡眠習慣をつけたい</div>
                <div className={sleepCss.paragraph_1_description_prop}>睡眠状況を可視化する以外、朝活任務の機能で任務を設定し、達成したらインセンティブとしてテーマの購入で使えるポイントを配布することで、早寝早起きの動機づけを高めます。</div>
              </div>
            </div>

            <div className={sleepCss.app_show_container}>
              <div className={sleepCss.show_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={sleepCss.show_contents_container}>
                  <div className={sleepCss.show_img_container}>
                    <img className={sleepCss.show_img_prop} src={sleep_1} alt="sleep_app_1"></img>
                    <img className={sleepCss.show_img_prop} src={sleep_2} alt="sleep_app_2"></img>
                  </div>

                  <div className={sleepCss.show_description_container}>
                    <div className={sleepCss.show_description_title_prop}>わかりやすいデータ分析</div>
                    <div className={sleepCss.show_description_contents_container}>
                      <div className={sleepCss.show_description_contents_prop}>就寝・睡眠時間、浅い眠りと深い眠りの割合を詳しく記録し、図で表現します。</div>
                      <div className={sleepCss.show_description_contents_prop}>睡眠時間のデータに基づき、睡眠効率を算出し、睡眠の質を可視化します。</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={sleepCss.show_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={sleepCss.show_contents_container}>
                  <div className={sleepCss.show_img_container}>
                    <img className={sleepCss.show_img_prop} src={sleep_3} alt="sleep_app_1"></img>
                    <img className={sleepCss.show_img_prop} src={sleep_4} alt="sleep_app_2"></img>
                  </div>
                  <div className={sleepCss.show_description_container}>
                    <div className={sleepCss.show_description_title_prop}>スマートアラーム</div>
                    <div className={sleepCss.show_description_contents_container}>
                      <div className={sleepCss.show_description_contents_prop}>音と振動で、睡眠段階を判断し、浅い眠りの時間帯にアラームを起動させることで、ストレスフリーの起床を実現します。</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={sleepCss.show_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={sleepCss.show_contents_container}>
                  <div className={sleepCss.show_img_container}>
                    <img className={sleepCss.show_img_prop} src={sleep_5} alt="sleep_app_5"></img>
                    <img className={sleepCss.show_img_prop} src={sleep_6} alt="sleep_app_6"></img>
                  </div>
                  <div className={sleepCss.show_description_container}>
                    <div className={sleepCss.show_description_title_prop}>朝活任務で早寝早起きの生活に</div>
                    <div className={sleepCss.show_description_contents_container}>
                      <div className={sleepCss.show_description_contents_prop}>朝ご飯を作る、ランニングなど、朝活任務を設定し、達成したらポイントが貯まるシステムで、早寝早起きの意欲を高める効果を狙います。</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={sleepCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false"
              style={{marginTop: '0'}}>
              <div className={sleepCss.paragraph_1_title}>使用シーンに配慮した色味</div>
              <div className={sleepCss.paragraph_1_description_container}>
                <div className={sleepCss.paragraph_1_description_prop}>ユーザーが寝る前にお部屋で睡眠アプリを開く使用シーンを想定し、ベッドライトで照らした少し暗めの空間でも目の負担をかけないように、暗めの紫をメインカラーとして使用しました。</div>
                <div className={sleepCss.paragraph_1_description_prop}>紫は冷静、落ち着く、リラックスのイメージがあり、良い睡眠に繋がる効果があると考えられます。</div>
              </div>
              <div className={sleepCss.color_container}>
                <img src={color_1} className={sleepCss.color_prop}></img>
                <img src={color_2} className={sleepCss.color_prop}></img>
              </div>
            </div>
            


            <div className={sleepCss.prototype_container}>
              <div className={sleepCss.prototype_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={sleepCss.prototype_title_prop}>Prototype</div>
                <iframe className={sleepCss.prototype_prop} src="https://xd.adobe.com/embed/c82ed3f5-d277-4d05-8ee5-67f4a493fe9e-9d7d/" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>

            
            

            <div className={sleepCss.postscript_container}>
              <div className={sleepCss.postscript_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={sleepCss.postscript_paragraph_container}>
                  <div className={sleepCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                </div>
                <div className={sleepCss.postscript_paragraph_container}>
                  <div className={sleepCss.postscript_paragraph_prop}>「<span style={{fontFamily: FONT_EN}}>SLEEP WELL</span>」は授業の課題で制作した作品ですが、<span style={{fontFamily: FONT_EN}}>Case study</span>をはじめ、<span style={{fontFamily: FONT_EN}}>Functional map、UI flow、Flow chat</span>で情報アーキテクチャを整理し、ワイヤーフレームとモックアップを通してデザインを作り、最後はプロトタイプを使用し、ターゲットユーザーにテストを実施しました。</div>
                  <div className={sleepCss.postscript_paragraph_prop}>こうして一連のデザインプロセスをしっかり行い、試行錯誤しながら制作することが私にとってとても貴重な経験であり、サービスデザインの深さと面白さを感じるきっかけになりました。</div>
                  <div className={sleepCss.postscript_paragraph_prop}>健康と睡眠に意識を向けるつもりなのに、課題や趣味、つい他のことを優先して、睡眠の質が二の次になってしまいます。私たちが抱えた悩みをもとに、同世代の方の共通課題を洗い出し、それをテーマにして、サービスを作りました。</div>
                </div>                

              </div>
              <div className={sleepCss.especially_thanks_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={sleepCss.especially_thanks_contents_container}>
                  <div className={sleepCss.especially_thanks_title_prop}>Especially thanks</div>
                  <div className={sleepCss.especially_thanks_description_prop}>Group member</div>
                  <div className={sleepCss.especially_thanks_description_prop}>徐晨星</div>
                  <div className={sleepCss.especially_thanks_description_prop}>溫子儀</div>
                </div>
              </div>
            </div>

          
            <WorksBackToAnchor 
              prevUrl="/works/q_dinasour"
              nextUrl="/works/everything_is_gonna_be_alright"
              containerWidth={width_worksBackToAnchor}/>
          </div>

          
          
        </section>
        <Footer />
      </PageLayout>
    </>
  );
}




