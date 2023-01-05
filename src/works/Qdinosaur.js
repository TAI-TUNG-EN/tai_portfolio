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
    width_worksBackToAnchor = 'calc(60% + 8rem)'
  } else{
    width_worksBackToAnchor = 'calc(60% + 8rem)'
  }

  useEffect(() => {
    if(isMobile){
      document.getElementById('design_show_to_reverse').style.flexDirection = 'column';

    }else if(isPad){
      document.getElementById('design_show_to_reverse').style.flexDirection = 'column';

    }else{
      document.getElementById('design_show_to_reverse').style.flexDirection = 'row-reverse';
    }
  }, []);

  
  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }, []);

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
        <section id={dinasourCss.works_dinasour}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" colorEmoji="#945D00"/>
          <div className={dinasourCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column-reverse"
              names={["Q dinosaur恐恐龍"]}
              type="LINE sticker (Side project)" roles={["Design (illustration)"]} date="2020.10-2020.12" tool="Adobe illustratior"
              url="https://store.line.me/stickershop/product/14468519" 
              urlTitle="Sticker page"
              bannerImg={banner}
              // bannerHeight='22vh'
              />
          
            <div className={dinasourCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={dinasourCss.paragraph_1_title}>Q dinosaur makes chat room a cozy place</div>
              <div className={dinasourCss.paragraph_1_description_container}>
                <div className={dinasourCss.paragraph_1_description_prop}>「人に褒めてもらった時」、「ご飯を誘いたい時」、「何かをお願いする時」、表情が見えない文字のやりとりだけで、少し物足りない感じがします。</div>
                <div className={dinasourCss.paragraph_1_description_prop}>そういう時、一つスタンプをつけることで、会話の雰囲気や相手を受けた印象が大きく変わる場合もあります。</div>
                <div className={dinasourCss.paragraph_1_description_prop}>もっと日常的に使いやすいスタンプがほしいという願いは、今回スタンプ制作のきっかけになりました。</div>
                <br></br>
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

            <div className={dinasourCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={dinasourCss.paragraph_1_title}>可愛さだけではなく、実用性も高いスタンプへ</div>
              <div className={dinasourCss.paragraph_1_description_container}>
                <div className={dinasourCss.paragraph_1_description_prop}>「恐恐」に、二つの取り組みをしました。</div>
                <div className={dinasourCss.paragraph_1_description_prop}>◆現行スタンプのCase studyを行ったり、スタンプを求める会話のシーンとタイミングを中心に周りの人にヒアリングしたり、ユーザーのニーズに応えるスタンプを作成しました。</div>
                <div className={dinasourCss.paragraph_1_description_prop}>◆外国人の方にも使いやすいように、あえて文字を加えずに、表情と身振りだけで気持ちを伝えることを心掛けていました。</div>
              </div>
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
                  <div className={dinasourCss.design_intro_description_prop}>意外と困っている会話シーンも対応することがポイントです。</div>
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
                  <div className={dinasourCss.postscript_paragraph_prop}>元々口下手な私は、表情が見えない文字のやりとりがとても苦手で、「ちゃんと伝わっているのか」と、メッセージを送る度に心配しています。そんな時、いつも私を助けてくれるのはスタンプでした。表情豊かなスタンプをつけることで、より私の口調や表情が伝わるような気がします。</div>
                </div>
                <br></br>
                <div className={dinasourCss.postscript_paragraph_container}>
                  <div className={dinasourCss.postscript_paragraph_prop}>「こういう時、この表情のスタンプがほしい！」</div>
                  <div className={dinasourCss.postscript_paragraph_prop}>「32個スタンプの中にどうしても使わないのがあるのでもったいない...」</div>
                  <div className={dinasourCss.postscript_paragraph_prop}>もっと日常的で、無駄のないスタンプを作りたくて、自分的に使いやすそうなものをはじめ、周りの人にスタンプをつけたい会話やタイミングをヒアリングし、「恐恐」を描きました。</div>
                </div>
                <br></br>
                <div className={dinasourCss.postscript_paragraph_container}>
                  <div className={dinasourCss.postscript_paragraph_prop}>自分のスタンプを作って、リリースすることは、意外と大変でした。口座情報と審査資料の準備、各スタンプのキーワード設定など、手配しないといけないことがたくさんあります。</div>
                  <div className={dinasourCss.postscript_paragraph_prop}>でも、実際に公開した後、「可愛い」や「使いやすい」などの声をもらった時、本当に嬉しくて、作ってよかったとやりがいを感じました。</div>
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