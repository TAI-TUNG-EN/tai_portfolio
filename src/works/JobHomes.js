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
import jobHomesCss from '../css/works_job_homes.module.scss'
import banner from '../static/img/works/covers/job_homes.png'
import job_homes_1 from '../static/img/works/job_homes/job_homes_01.png'
import job_homes_2 from '../static/img/works/job_homes/job_homes_02.png'
import job_homes_3 from '../static/img/works/job_homes/job_homes_03.png'
import job_homes_4 from '../static/img/works/job_homes/job_homes_04.png'
import job_homes_5 from '../static/img/works/job_homes/job_homes_05.png'
import job_homes_6 from '../static/img/works/job_homes/job_homes_06.png'
import job_homes_7 from '../static/img/works/job_homes/job_homes_07.png'
import job_homes_8 from '../static/img/works/job_homes/job_homes_08.png'
import job_homes_9 from '../static/img/works/job_homes/job_homes_09.png'
import job_homes_10 from '../static/img/works/job_homes/job_homes_10.png'


export default function JobHomes() {

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
        <section id={jobHomesCss.works_job_homes}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" colorEmoji="#945D00"/>
          <div className={jobHomesCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column-reverse"
              names={["株式会社じょぶ"]}
              type="Website (Client project with willstyle)" roles={["Design"]} date="2022.05" tool="Adobe XD" 
              url="https://job-homes.com/" 
              urlTitle="Website"
              bannerImg={banner}
              />

            <div className={jobHomesCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={jobHomesCss.paragraph_1_title}>暮らすための家づくり</div>
              <div className={jobHomesCss.paragraph_1_description_container}>
                <div className={jobHomesCss.paragraph_1_description_prop}>株式会社じょぶは大阪に事務所を構えておられる工務店です。土地探しからアフターケアまで、一貫したサービスを展開しており、こだわりの素材・設計・施工をご提案されるのは特徴です。今回は顧客層と重要視されているポイントの変化と伴い、内容の見直し、サイトイメージのブラッシュアップも必要とされ、サイトリニューアルのご依頼をいただきました。</div>
                <br></br>
                <div className={jobHomesCss.paragraph_1_description_prop}>現行サイトの情報整理をはじめ、固定ページの分け方とタイトル名の変更、更新ページのカテゴリ選定を手がけております。ビジュアル的には、顧客層に合わせて、スタイリッシュで落ち着きのあるテイストに。また、お家を建てるだけではなく、建ててからその後の暮らしも大切にされていることで、生活のシーンを想像させるような写真をご提案いたしました。</div>
              </div>
            </div>
            



            <div className={jobHomesCss.middleImg}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <img src={job_homes_1} alt="dinasours" className={jobHomesCss.all_dinasours_prop}></img>
            </div>

            <div className={jobHomesCss.middleImg}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <img src={job_homes_2} alt="dinasours" className={jobHomesCss.all_dinasours_prop}></img>
              <div className={jobHomesCss.img_description_prop}>（左）サイトリニュアル提案資料・（右）写真撮影イメージ</div>
            </div>

            <div className={jobHomesCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={jobHomesCss.paragraph_1_title}>ひとつひとつのパーツで「らしさ」を伝える</div>
              <div className={jobHomesCss.paragraph_1_description_container}>
                <div className={jobHomesCss.paragraph_1_description_prop}>今回のサイトリニューアルでは、コンセプトを固める上でお打ち合わせを重ねさせていただきました。その中で、「ナチュラルで高性能」「建築家設計の実績」「土地探しからサポート」「暮らすための家づくり」といったキーワードが挙げられ、家づくりへのこだわりがとても伝わってきました。</div>
                <br></br>
                <div className={jobHomesCss.paragraph_1_description_prop}>そんな想いを応えるサイトになるよう、暮らしを感じさせる写真選びから、施工事例をページ上段で大きくアピールし、家づくりの流れを掲載するなど、コンテンツの流れと見せ方を工夫しております。デザイン面では、顧客層に合わせて少し高級感を出せるために、余白感を意識し、レイアウトをシンプルにしたり、フォントとアイコンはスタイリッシュなものを使用したりしております。配色ではベースカラーのライトグレーに差し色のブルー。これは、施工事例で青空の見える開放感のあるお家が多く建てられたことからイメージしています。どの部分を切り取っても、株式会社じょぶの「らしさ」に溢れたサイトが出来上がりました。</div>
              </div>
            </div>
            



            <div className={jobHomesCss.show_design_draft_container}>
              <div className={jobHomesCss.show_design_draft_contents_container}>
                <img src={ job_homes_3 } className={jobHomesCss.show_design_draft_upper_img_prop}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false"
                ></img>
                <img src={ job_homes_4 } className={jobHomesCss.show_design_draft_upper_img_prop}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false"
                ></img>
              </div>
            </div>

            <div className={jobHomesCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={jobHomesCss.paragraph_1_title}>サイトから「人」を感じられる</div>
              <div className={jobHomesCss.paragraph_1_description_container}>
                <div className={jobHomesCss.paragraph_1_description_prop}>株式会社じょぶのもう一つの強みは、「女性建築士による奥様目線の家づくり」です。使い勝手の良い家事動線や子育てしやすい間取りの実現、株式会社じょぶのスタッフだからこそできること。また、技術面以外、優しいお人柄もよく称賛されたようで、今回のサイトリニューアルにあたって、「人」をアピールすることもポイントになります。</div>
                <br></br>
                <div className={jobHomesCss.paragraph_1_description_prop}>今後スタッフさんの入れ替わりを配慮し、お客様が気軽にページ更新できるシステム（WordPress）を導入しております。スタッフさんの家づくりに対する想いはもちろん、手がけた実績とブログも合わせてご紹介できるよう、該当記事と紐づける仕様になっております。また、お人柄を感じていただくため、コンテンツに暮らしのこだわりと趣味の追加をご提案いたしました。</div>
              </div>
            </div>
            


            <div className={jobHomesCss.show_design_draft_container}>
              <div className={jobHomesCss.show_design_draft_contents_container}>
                <img src={ job_homes_5 } className={jobHomesCss.show_design_draft_bottom_img_prop}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false"
                ></img>
                <img src={ job_homes_6 } className={jobHomesCss.show_design_draft_bottom_img_prop}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="100"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false"
                ></img>
              </div>
            </div>

            <div className={jobHomesCss.paragraph_1_container}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-once="false">
              <div className={jobHomesCss.paragraph_1_title}>目的別のお問い合わせフォーム</div>
              <div className={jobHomesCss.paragraph_1_description_container}>
                <div className={jobHomesCss.paragraph_1_description_prop}>住宅のご依頼を検討されている方、情報収集したい方、お家を建てられた方。サイトに訪れた方々のニーズに沿って、それぞれお問い合わせフォームを用意いたしました。フォームは4つもありますので、サイト内でごちゃつきにならないように、一つのページにまとめております。より分かりやすくするため、手順は2ステップに分けて、お問い合わせ項目を選んだら該当フォームに遷移させ、内容をご記入いただく仕様になっております。</div>
              </div>
            </div>
            

            <div className={jobHomesCss.show_page_container}>
              <div className={jobHomesCss.show_page_contents_container}>
                <img src={job_homes_7} className={jobHomesCss.show_page_prop}></img>
                <img src={job_homes_8} className={jobHomesCss.show_page_prop}></img>
                <img src={job_homes_9} className={jobHomesCss.show_page_prop}></img>
                <img src={job_homes_10} className={jobHomesCss.show_page_prop}></img>
              </div>
            </div>

            <div className={jobHomesCss.postscript_container}>
              <div className={jobHomesCss.postscript_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={jobHomesCss.postscript_paragraph_container}>
                  <div className={jobHomesCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                </div>
                <div className={jobHomesCss.postscript_paragraph_container}>
                  <div className={jobHomesCss.postscript_paragraph_prop}>このプロジェクトに参加した時に、私はまだコロナで日本に入国できず、台湾でテレワークをしていました。制作期間で直接お客様とお会いできないことに残念な気持ちがいっぱいですが、オンラインお打ち合わせを通して、アイデアを提案したり、意見をすり合わせしたり、撮影をご担当くださったパートナー様と写真のイメージをご共有したりすること、私にとってはとても貴重な体験になりました。</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>日本に入国後、サイト公開後のごあいさつで初めて事務所にお伺いしました。こだわりの内装と家具、デザインされた動線、家づくりをする上で大切にされているポイントがそのまま。</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>そして、スタッフの皆様に暖かく接していただき、「素敵なホームページをありがとう」と言っていただいた時、とても嬉しくて、仕事のやり甲斐を感じた瞬間でした。</div>
                  <div className={jobHomesCss.postscript_paragraph_prop}>どうか読み手に株式会社じょぶ様の家づくりへのこだわり、お優しい人柄が伝わるWebサイトでありますように。</div>
                </div>
              </div>
              



              
              <div className={jobHomesCss.especially_thanks_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={jobHomesCss.especially_thanks_contents_container}>
                  <div className={jobHomesCss.especially_thanks_title_prop}>Project credits</div>
                  <div className={jobHomesCss.author_details_container}>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Project organizer</div>
                    <a className={jobHomesCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}} href="https://www.willstyle.co.jp" target="_blank">ウィルスタイル株式会社</a>
                    <div className={jobHomesCss.especially_thanks_description_prop}>本サイトは、ウィルスタイル株式会社に勤める時のプロジェクトです。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>デザイナーとして、トップと下層ページのデザインを担当させていただきました。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>プロジェクトメンバーは下記に掲載しております。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Account Director : Kousuke Sakaguchi</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Designer : Tai,tung-en</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Engineer : Taku Matsumura / Chiho Rokukawa</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Director : Mariko Nishizawa</div>
                  </div>
                  <div className={jobHomesCss.author_details_container}>
                    <div className={jobHomesCss.especially_thanks_description_prop}>Project organizer</div>
                    <a className={jobHomesCss.especially_thanks_description_prop} style={{textDecoration: 'underline'}} href="https://knotphotography.jp/" target="_blank">株式会社KNOT様</a>
                    <div className={jobHomesCss.especially_thanks_description_prop}>今回の撮影には株式会社KNOT様（以下、「KNOT様」）にご協力いただきました。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>KNOT様は「一生の宝ものになる写真」をコンセプトに、姫路市のフォトスタジオを拠点としご活躍されております。</div>
                    <div className={jobHomesCss.especially_thanks_description_prop}>ウィルスタイル株式会社のパートナー様として撮影をご担当いただきました。</div>
                  </div>
                </div>
              </div>

              <div className={jobHomesCss.shared_gallery_conatiner}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={jobHomesCss.shared_gallery_contents_conatiner}>
                  <div className={jobHomesCss.shared_gallery_title_prop}>Thanks for sharing</div>
                  <div className={jobHomesCss.website_details_container}>
                    <a className={jobHomesCss.website_details_description_prop} href="https://responsive-jp.com/12271.html" target="_blank">RESPONSIVE WEB DESIGN JP</a>
                    <a className={jobHomesCss.website_details_description_prop} href="https://cmsdesign.jp/cms/wordpress/job-homes/" target="_blank">cmsdesign</a>
                  </div>
                </div>
              </div>
            </div>

            <WorksBackToAnchor 
              prevUrl="/works/nishikage"
              nextUrl="/works/motenaSea"
              containerWidth={width_worksBackToAnchor}/>
          </div>
        </section>
        <Footer />
      </PageLayout>
    </>
  )
}