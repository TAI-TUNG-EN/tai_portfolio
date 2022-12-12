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
import Sidebar from '../components/Sidebar'
import loadingCss from '../css/loading.module.scss'
import nishikageCss from '../css/works_nishikage.module.scss'
import banner from '../static/img/works/covers/nishikage_photo.jpg'
import nishikage_1 from '../static/img/works/nishikage/nishikage_01.png'
import nishikage_2 from '../static/img/works/nishikage/nishikage_02.png'
import nishikage_3 from '../static/img/works/nishikage/nishikage_03.png'
import nishikage_4 from '../static/img/works/nishikage/nishikage_04.png'
import nishikage_5 from '../static/img/works/nishikage/nishikage_05.png'

export default function Nishikage() {
  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";

  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
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
  let width_worksBackToAnchor = '70%';
  if(isMobile){
    width_worksBackToAnchor = '80%'
  } else if(isPad){
    width_worksBackToAnchor = '75%'
  } else{
    width_worksBackToAnchor = '66%'
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

  window.addEventListener('load', AOS.refresh);
  return(
    <>
      <Cursor cursorTypes='👀' />
      <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1000'/>
      <PageLayout>
        <section id={nishikageCss.works_nishikage}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={nishikageCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameJP="にしかげクリニック　アネックス"
              type="Website (Client project with willstyle)" roles={["Design"]} date="2022.10" tool="Adobe XD, Lightroom, Photoshop" 
              url="https://nishikage-anex.jp/" 
              urlTitle="Website"
              bannerImg={banner}
              />

            <div className={nishikageCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={nishikageCss.paragraph_1_title}>地域のかかりつけ医として</div>
              <div className={nishikageCss.paragraph_1_description_container}>
                <div className={nishikageCss.paragraph_1_description_prop}>にしかげ内科クリニックは神戸市垂水区の内科、糖尿病、腎臓病の専門医で、「患者さんに納得していただける医療」をモットーに、地域に根ざした医療に取り組まれています。今回は分院として新しく開院した「にしかげクリニック アネックス」のWebサイトを作成させていただきました。</div>
                <br></br>
                <div className={nishikageCss.paragraph_1_description_prop}>看板に「糖尿病、腎透析」を書かれており、一見専門クリニックと思われますが、実際にヒアリングさせていただいたところ、診療設備の導入や個室の用意など、人工透析に力を入れるのはもちろんですが、もう一つの想いは、地域のかかりつけ医でありたいこと。</div>
                <div className={nishikageCss.paragraph_1_description_prop}>「体に気になるところがあったらまずご相談を。」「電話やネットで予約しなくてもいいからまず来院してもらいたい。」</div>
                <div className={nishikageCss.paragraph_1_description_prop}>理事長がお打ち合わせで何度もおっしゃっていた言葉。地域に貢献したい想いはとても伝わってきました。</div>
              </div>
            </div>

            <div className={nishikageCss.middleImg}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <img src={nishikage_1} alt="dinasours" className={nishikageCss.all_dinasours_prop}></img>
            </div>

            <div className={nishikageCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={nishikageCss.paragraph_1_title}>患者さんに寄り添うデザイン</div>
              <div className={nishikageCss.paragraph_1_description_container}>
                <div className={nishikageCss.paragraph_1_description_prop}>クリニックのWebサイトをデザインする上で大切にしているのは、不安と疑問を感じさせてないこと。</div>
                <div className={nishikageCss.paragraph_1_description_prop}>コンテンツの配置はできるだけ分かりやすくし、全体的に柔らかい雰囲気が伝わるように、写真選びや色使い、サイトのあしらいに工夫しております。</div>
                <br></br>
                <div className={nishikageCss.paragraph_1_description_prop}>まず、今回は新しく開院されたこともあり、スタッフさんとクリニックの雰囲気を掴んでいただけるような写真をキービジュアルで使用することで、安心感、信頼感を演出。そして色は本院のにしかげ内科のテイストを踏まえ、ベースカラーが明るめの水色に。メインターゲットである近隣地域の患者さんはお年寄りの方が多くいらっしゃることで、アイコンを加えたり、フォントサイズも大きめに調整しました。また、より親和性を感じていただくため、ボタンのデザインは錠剤シートから薬を押し出すイメージをしており、ニューモーフィズムのデザインにしております。</div>
              </div>
            </div>

            <div className={nishikageCss.show_design_draft_container}>
              <div className={nishikageCss.show_design_draft_contents_container}>
                <img src={ nishikage_2 } className={nishikageCss.show_design_draft_upper_img_prop}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false"
                ></img>
                <img src={ nishikage_3 } className={nishikageCss.show_design_draft_upper_img_prop}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false"
                ></img>
              </div>
            </div>

            <div className={nishikageCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={nishikageCss.paragraph_1_title}>情報探しをスムーズになるタブ切り替え</div>
              <div className={nishikageCss.paragraph_1_description_container}>
                <div className={nishikageCss.paragraph_1_description_prop}>今回サイト制作の課題の一つは情報を整理すること。</div>
                <div className={nishikageCss.paragraph_1_description_prop}>診療科目ごとの詳細内容や注意事項、医師のごあいさつと紹介、クリニックの診療時間とアクセス、クリニックのサイトにはたくさんの情報が溢れています。如何に情報を整理、分類することはデザインを起こす前にとても大切な工程です。</div>
                <div className={nishikageCss.paragraph_1_description_prop}>本サイトでは「診療内容」と「医院案内」の大枠を作り、それぞれの詳細ページはタブ切り替えの仕様にしております。同じページでタブ切り替えをすることで、どんな情報があるのを一目瞭然で、前のベージに戻る手間も省け、知りたい情報にスムーズにたどり着けるようにしております。</div>
              </div>
            </div>

            <div className={nishikageCss.show_design_draft_container}>
              <div className={nishikageCss.show_design_draft_contents_container}>
                <img src={ nishikage_4 } className={nishikageCss.show_design_draft_bottom_img_prop}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false"
                ></img>
                <img src={ nishikage_5 } className={nishikageCss.show_design_draft_bottom_img_prop}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false"
                ></img>
              </div>
            </div>

            <div className={nishikageCss.postscript_container}>
              <div className={nishikageCss.postscript_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={nishikageCss.postscript_paragraph_container}>
                  <div className={nishikageCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                </div>
                <div className={nishikageCss.postscript_paragraph_container}>
                  <div className={nishikageCss.postscript_paragraph_prop}>私自身、子供の頃からよく病院のお世話になっている人です。</div>
                  <div className={nishikageCss.postscript_paragraph_prop}>行く前に口コミ調べたり、サイトを見たり、「ここに行って大丈夫かな」と不安になったり。大した病気ではなくても、体のことだから多少神経質になってしまうところもある。そういうシーンは日本に来てからも多く経験しました。</div>
                  <div className={nishikageCss.postscript_paragraph_prop}>患者さんにとって、大事な判断材料になるWebサイト。</div>
                  <div className={nishikageCss.postscript_paragraph_prop}>不安することなく、知りたい情報を明確に掲載し、スムーズにたどり着けるように、</div>
                  <div className={nishikageCss.postscript_paragraph_prop}>行く前に写真でスタッフさんとクリニックの雰囲気を掴めますように、</div>
                  <div className={nishikageCss.postscript_paragraph_prop}>そういう思いを込めて、このサイトを制作いたしました。</div>
                  <div className={nishikageCss.postscript_paragraph_prop}>サイト公開後、院長から「分かりやすかった」と満足している声をいただいた時、本当に心の底から嬉しいと思います。Webサイトを通して、患者さんは安心してご来院いただけますよう、少しでも力添えできたら幸いです。</div>
                </div>
              </div>

              <div className={nishikageCss.especially_thanks_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={nishikageCss.especially_thanks_contents_container}>
                  <div className={nishikageCss.especially_thanks_title_prop}>Project credits</div>
                  <div className={nishikageCss.author_details_container}>
                    <div className={nishikageCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Project organizer</div>
                    <a className={nishikageCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}} href="https://www.willstyle.co.jp" target="_blank">ウィルスタイル株式会社</a>
                    <div className={nishikageCss.especially_thanks_description_prop}>本サイトは、ウィルスタイル株式会社に勤める時のプロジェクトです。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>デザイナーとして、トップと下層ページのデザイン、一部の写真撮影を担当させていただきました。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>プロジェクトメンバーは下記に掲載しております。</div>
                    <div className={nishikageCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Account Director : Kousuke Sakaguchi</div>
                    <div className={nishikageCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Designer : Tai,tung-en</div>
                    <div className={nishikageCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Engineer : Taku Matsumura / Chiho Rokukawa</div>
                    <div className={nishikageCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Director : Yuki Ikezoe</div>
                  </div>
                  <div className={nishikageCss.author_details_container}>
                    <div className={nishikageCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Photography</div>
                    <a className={nishikageCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}} href="https://knotphotography.jp/" target="_blank">株式会社KNOT様</a>
                    <div className={nishikageCss.especially_thanks_description_prop}>今回の撮影には株式会社KNOT様（以下、「KNOT様」）にご協力いただきました。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>KNOT様は「一生の宝ものになる写真」をコンセプトに、姫路市のフォトスタジオを拠点としご活躍されております。</div>
                    <div className={nishikageCss.especially_thanks_description_prop}>ウィルスタイル株式会社のパートナー様として撮影をご担当いただきました。</div>
                  </div>
                </div>
              </div>

              <div className={nishikageCss.shared_gallery_conatiner}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={nishikageCss.shared_gallery_contents_conatiner}>
                  <div className={nishikageCss.shared_gallery_title_prop}>Thanks for sharing</div>
                  <div className={nishikageCss.website_details_container}>
                    <a className={nishikageCss.website_details_description_prop} href="https://webdesignclip.com/nishikage-anex/" target="_blank">Web Design Clip</a>
                  </div>
                </div>
              </div>
            </div>

            
            <WorksBackToAnchor 
              prevUrl="/works/surface_apparel"
              nextUrl="/works/job_homes"
              containerWidth={width_worksBackToAnchor}/>
          </div>
        </section>
        <Footer />
      </PageLayout>
    </>
  )
}