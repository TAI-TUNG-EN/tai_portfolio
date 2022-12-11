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
import motenaSeaCss from '../css/works_motena_sea.module.scss'
import banner from '../static/img/works/covers/motena_sea.png'
import motena_sea_1 from '../static/img/works/motena_sea/motena_sea_01.png'
import motena_sea_2 from '../static/img/works/motena_sea/motena_sea_02.png'
import motenaSeaVideo from '../static/img/works/motena_sea/demo02.mp4'



export default function MotenaSea() {
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
        <section id={motenaSeaCss.works_motena_sea}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={motenaSeaCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameJP="にしかげクリニック　アネックス"
              type="Website (Client project with willstyle)" roles={["Design"]} date="2022.10" tool="Adobe XD, Lightroom, Photoshop" 
              url="https://motena-sea.co.jp/" 
              urlTitle="Website"
              bannerImg={banner}
              />
            
            <div className={motenaSeaCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={motenaSeaCss.paragraph_1_title}>未来のために</div>
              <div className={motenaSeaCss.paragraph_1_description_container}>
                <div className={motenaSeaCss.paragraph_1_description_prop}>株式会社<span style={{fontFamily: FONT_EN}}>MOTENA-Sea</span>は水素とバイオ燃料を利用した水素燃料電池船の活用から、パートナー企業と産官学連携のもと、新たなマリンビジネスの在り方を社会に提案していく会社です。事業にまつわるポイントは二つあります。一つは、水素を燃料として使用することで温室効果ガスの排出を大幅に削減し、環境に優しくてサステナビリティを実現すること。そしてもう一つは、従来の客船のイメージを超え、水素燃料電池船を通して新しい事業を提供し人々、社会を繋げていくこと。</div>
                <div className={motenaSeaCss.paragraph_1_description_prop}>官公庁や地方企業・大学との提携も行われますので、事業と会社について紹介し、情報を発信することをメインの目的とし、新規サイト制作させていただく運びになりました。</div>
              </div>
            </div>
            
            <div className={motenaSeaCss.middleImg}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <img src={motena_sea_1} alt="dinasours" className={motenaSeaCss.all_dinasours_prop}></img>
            </div>

            <div className={motenaSeaCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={motenaSeaCss.paragraph_1_title}>サイトを育てていくためのブログシステム</div>
              <div className={motenaSeaCss.paragraph_1_description_container}>
                <div className={motenaSeaCss.paragraph_1_description_prop}>事業の展開と伴い、よく出張しにいかれることをお聞きして、現地でステークホルダーの方とのコミュニケーションや事業に興味を持っている方の声、出張先の出来事など、サイトで発信できるコンテンツもおありとのことなので、今回はお客様が気軽に更新することができるブログシステム（<span style={{fontFamily: FONT_EN}}>WordPress</span>）を導入いたしました。サイト公開後はブログを活用くださっており、事業のきっかけと水素のご紹介をはじめ、現在取り組まれていることについてなどを投稿されています。</div>
              </div>
            </div>

            <div className={motenaSeaCss.middleImg}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              {/* <img src={motena_sea_2} alt="dinasours" className={motenaSeaCss.all_dinasours_prop}></img> */}
              <video controls className={motenaSeaCss.all_dinasours_prop} autoPlay loop>
                <source src={motenaSeaVideo} type="video/mp4"/>
              </video>
            </div>

            <div className={motenaSeaCss.postscript_container}>
              <div className={motenaSeaCss.postscript_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={motenaSeaCss.postscript_paragraph_container}>
                  <div className={motenaSeaCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                </div>
                <div className={motenaSeaCss.postscript_paragraph_container}>
                  <div className={motenaSeaCss.postscript_paragraph_prop}>株式会社<span style={{fontFamily: FONT_EN}}>MOTENA-Sea</span>様のサイトでは、自分がディレクションとデザイン両方担当させていただきました。契約まわりをはじめ、キャッチコピーとコンセプト作り､スケジュール管理など、まだまだ不慣れなことばかりでしたが、サイト制作の難しさと楽しさについて認識をより一層深めることができ、大変勉強させていただいたプロジェクトになりました。</div>
                  <div className={motenaSeaCss.postscript_paragraph_prop}>新しい分野での新しいチャレンジ。お客様が語った事業に対する想い､海の未来へ大きな抱負に感銘を受け、私自身海が大好きこともあり､終始ワクワクな気持ちで制作させていただきました。</div>
                  <div className={motenaSeaCss.postscript_paragraph_prop}>短納期のプロジェクトではありますが、素材のご提供やデザインのご確認など、いつも迅速にご対応いただいたおかげて、無事に公開まで運ぶことができました。これからもサイトを通じて、株式会社<span style={{fontFamily: FONT_EN}}>MOTENA-Sea</span>の事業と海運業界のご発展に少しお力添えできれば嬉しいです。</div>
                </div>
              </div>

              <div className={motenaSeaCss.especially_thanks_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={motenaSeaCss.especially_thanks_contents_container}>
                  <div className={motenaSeaCss.especially_thanks_title_prop}>Project credits</div>
                  <div className={motenaSeaCss.author_details_container}>
                    <div className={motenaSeaCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Project organizer</div>
                    <a className={motenaSeaCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}} href="https://www.willstyle.co.jp" target="_blank">ウィルスタイル株式会社</a>
                    <div className={motenaSeaCss.especially_thanks_description_prop}>本サイトは、ウィルスタイル株式会社に勤める時のプロジェクトです。</div>
                    <div className={motenaSeaCss.especially_thanks_description_prop}>ディレクターとデザイナーとして、英語のキャッチコピーとコンセプト作り、トップと下層ページのデザイン、一部の写真撮影を担当させていただきました。</div>
                    <div className={motenaSeaCss.especially_thanks_description_prop}>プロジェクトメンバーは下記に掲載しております。</div>
                    <div className={motenaSeaCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Account Director : Kousuke Sakaguchi</div>
                    <div className={motenaSeaCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Designer : Tai,tung-en</div>
                    <div className={motenaSeaCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Engineer : Mineo Okuda</div>
                    <div className={motenaSeaCss.especially_thanks_description_prop} style={{fontFamily: FONT_EN}}>Director : Tai,tung-en</div>
                  </div>
                </div>
              </div>

              <div className={motenaSeaCss.shared_gallery_conatiner}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={motenaSeaCss.shared_gallery_contents_conatiner}>
                  <div className={motenaSeaCss.shared_gallery_title_prop}>Be shared on the gallery site</div>
                  <div className={motenaSeaCss.website_details_container}>
                    <a className={motenaSeaCss.website_details_description_prop} href="https://webdesignclip.com/motena-sea/" target="_blank">Web Design Clip</a>
                  </div>
                </div>
              </div>
            </div>

            <WorksBackToAnchor 
              prevUrl="/works/job_homes"
              nextUrl="/works/anotheries"
              containerWidth={width_worksBackToAnchor}/>
          </div>

        </section>
        <Footer />
      </PageLayout>
    </>
  )
}