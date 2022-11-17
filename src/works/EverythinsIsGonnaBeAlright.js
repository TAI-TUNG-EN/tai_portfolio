import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AOS from 'aos'

import PageLayout from '../components/PageLayout'
import Loading from '../components/Loading';
import ProjectKvLayout from '../components/ProjectKvLayout'
import WorksBackToAnchor from '../components/WorksBackToAnchor'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import banner from '../static/img/works/covers/everything.png'
import everything_1_anim from '../static/img/works/everything_1_anim.png'
import everythingCss from '../css/works_everything.module.scss'
import loadingCss from '../css/loading.module.scss'
// import mv from '../static/img/videos/Everything_is_gonna_be_alright.mov'
import { images } from '../images.ts'

export default function EverythinsIsGonnaBeAlright(){
  const FONT_EN = "'Outfit', sans-serif";
  const FONT_JP = "'BIZ UDGothic', sans-serif";
  return(
    <>
      <Loading bg_style={loadingCss.loader_works} />
      <PageLayout>
        <section id={everythingCss.works_everything}>
          <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem" />
          <div className={everythingCss.kv_container}>
            <ProjectKvLayout 
              kv_column_direction="column"
              nameEN="Everything’s Gonna Be Alright"
              type="Music video" roles={["Design (illustration), Animation"]} date="2020.03-2020.12" tool="After Effects, Illustrator, Photoshop" url="https://store.line.me/stickershop/product/14468519" urlTitle="Watch the video"
              bannerImg={banner}
              urlNeed='false'/>
            
            <div className={everythingCss.paragraph_1_container}>
              <div className={everythingCss.paragraph_1_title}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">大丈夫、あなたは一人じゃない。</div>
              <div className={everythingCss.paragraph_1_description_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={everythingCss.paragraph_1_description_prop}>
                  「 <span style={{fontFamily: FONT_EN}}>Everything’s gonna be alright.</span> 」は世の中の人に勇気と支えを与えたいという想いで、
                </div>
                <div className={everythingCss.paragraph_1_description_prop}>大学の友人が書き下ろした曲です。</div>
                <br></br>
                <div className={everythingCss.paragraph_1_description_prop}>私たちの頭上は晴れの日ばかりではありません。</div>
                <div className={everythingCss.paragraph_1_description_prop}>生きている上で、追いつけない変化やどうしようもないことに心が折れた日々もたくさんあります。</div>
                <br></br>
                <div className={everythingCss.paragraph_1_description_prop}><span style={{fontFamily: FONT_EN}}>2020</span>年は多くな方にとって、人生のどん底を経験した大変な年だと思います。</div>
                <div className={everythingCss.paragraph_1_description_prop}>たくさん悩んで、泣いて、失って。</div>
                <div className={everythingCss.paragraph_1_description_prop}>それでも、陰で私たちを支えてくれる人が常にそばにいます。</div>
                <div className={everythingCss.paragraph_1_description_prop}>彼らのおかげて、私たちがどれだけ転んでも、つまずいでも、再び立ち上がることができます。</div>
                <br></br>
                <div className={everythingCss.paragraph_1_description_prop}>今日より明日、今年より来年はもっとうまくなるから。</div>
                <div className={everythingCss.paragraph_1_description_prop}>新年の願いを込めて、この曲で伝えたい「<span style={{fontFamily: FONT_EN}}>Everything’s gonna be alright.</span>」</div>
              </div>
              
              <div className={everythingCss.middleImg}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <iframe src="https://drive.google.com/file/d/1ZUUAko2XSh4vspxxYAzZTHuM-ZOicqlz/preview" className={everythingCss.all_dinasours_prop} allow="autoplay"></iframe>
                {/* <video controls muted className={everythingCss.all_dinasours_prop}>
                  <source src={mv} type="video/mp4"/>
                </video> */}
                {/* <img src={everything_1_anim} alt="everything is gonna be alright" className={everythingCss.all_dinasours_prop}></img> */}
              </div>

              <div className={everythingCss.paragraph_2_container}>
                <div className={everythingCss.paragraph_2_contents_container}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-offset="0"
                  data-aos-duration="300"
                  data-aos-once="false">
                  <div className={everythingCss.lyrics_container}>
                    <div className={everythingCss.lyrics_contents_container}>
                      <div className={everythingCss.lyrics_contents_prop} style={{fontFamily: FONT_EN}}>Everything’s gonna be alright.</div>
                      <div className={everythingCss.lyrics_contents_prop}>世界沒有你想的那麼壞</div>
                      <div className={everythingCss.lyrics_contents_prop}>看著遠方的 neon light</div>
                      <div className={everythingCss.lyrics_contents_prop}>靠我的肩讓你依賴</div>
                      <div className={everythingCss.lyrics_contents_prop}>心裡的陰霾 不再存在</div>
                    </div>
                    <div className={everythingCss.lyrics_contents_container}>
                      <div className={everythingCss.lyrics_contents_prop} style={{fontFamily: FONT_EN}}>Everything’s gonna be alright.</div>
                      <div className={everythingCss.lyrics_contents_prop}>世界はあなたが思うほど悪くない</div>
                      <div className={everythingCss.lyrics_contents_prop}>遠く光っているネオンラインを眺めて</div>
                      <div className={everythingCss.lyrics_contents_prop}>肩に寄りかかってもいいよ、頼りにしてもいい</div>
                      <div className={everythingCss.lyrics_contents_prop}>心に　二度と傷つかない</div>
                    </div>
                  </div>
                  <div className={everythingCss.paragraph_2_description_container}>
                    <div className={everythingCss.paragraph_2_description_prop}>癒しのある雰囲気が伝わるため、イラストは淡色を使用し、枠線もなるべく細くしました。</div>
                    <div className={everythingCss.paragraph_2_description_prop}>全体的に薄くなりすぎないように、テクスチャのあるシャドウで立体感を出してみました。</div>
                    <div className={everythingCss.paragraph_2_description_prop}>動画に出てきた蛇と虫はを象徴します。</div>
                    <div className={everythingCss.paragraph_2_description_prop}>私たちのそばにいる仲間はスプレーを持ち、パトロールし、脅威を解消してくれます。</div>
                    <div className={everythingCss.paragraph_2_description_prop}>悩みが出ては消す、出ては消すを繰り返し、時間を重ねていくと、最終的に不安が一掃され、</div>
                    <div className={everythingCss.paragraph_2_description_prop}>花もすくすく育てました。</div>
                  </div>
                </div>
              </div>
            </div>


            <div className={everythingCss.postscript_container}>
              <div className={everythingCss.postscript_contents_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={everythingCss.postscript_paragraph_container}>
                  <div className={everythingCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                </div>
                <div className={everythingCss.postscript_paragraph_container}>
                  <div className={everythingCss.postscript_paragraph_prop}><span style={{fontFamily: FONT_EN}}>2020</span>年<span style={{fontFamily: FONT_EN}}>3</span>月、新型コロナウイルスで私の世界が大きく変わりました。当時、私は京都に留学していて、一人で心細い気持ちでおうち生活を過ごしました。そんな時に、大学の友人に「聞いてほしい曲があるだけど」と、この曲が送られました。</div>
                  <div className={everythingCss.postscript_paragraph_prop}>「世界はあなたが思うほど悪くない」「あなたは一人じゃない」、どの歌詞も心に刺さる言葉ばかり。この曲に合う愛おしくて、暖かい雰囲気が伝わる動画を作ろうと、友達に提案した。</div>
                  <div className={everythingCss.postscript_paragraph_prop}>中国語では「新年新希望」（新年に新しい希望が与える）という言葉があり、この曲を聞いてくれる人にこれからの日々に希望と期待を感じてもらいたくて公開は新年に合わせました。</div>
                </div>
                <br></br>
                <div className={everythingCss.postscript_paragraph_container}>
                  <div className={everythingCss.postscript_paragraph_prop}>本当は年が替わっても、生活が大した変わらないと知っていたんげど、</div>
                  <div className={everythingCss.postscript_paragraph_prop}>君がそばにいるから、少しだけでも良くなると信じたい。</div>
                  <div className={everythingCss.postscript_paragraph_prop}>これからの日々は、もっと素敵なのもでありますように。</div>
                  <div className={everythingCss.postscript_paragraph_prop} style={{fontFamily: FONT_EN}}>Everything’s gonna be alright.</div>
                </div>
              </div>
              <div className={everythingCss.especially_thanks_container}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-once="false">
                <div className={everythingCss.especially_thanks_contents_container}>
                  <div className={everythingCss.especially_thanks_title_prop}>Especially thanks</div>
                  <div className={everythingCss.author_details_container}>
                    <div className={everythingCss.especially_thanks_description_prop}>Lyrics and composing</div>
                    <div className={everythingCss.especially_thanks_description_prop}>Willi</div>
                  </div>
                  <div className={everythingCss.author_details_container}>
                    <div className={everythingCss.especially_thanks_description_prop}>Beat</div>
                    <div className={everythingCss.especially_thanks_description_prop}>Lee</div>
                  </div>
                  <div className={everythingCss.author_details_container}>
                    <div className={everythingCss.especially_thanks_description_prop}>Chorus arrangement</div>
                    <div className={everythingCss.especially_thanks_description_prop}>501莉莉</div>
                  </div>
                  
                </div>
              </div>
            </div>

            
          
            <WorksBackToAnchor 
              prevUrl="/works/sleep_well"
              nextUrl="/works/organ_voice"/>
          </div>
          
        </section>
      </PageLayout>
    </>
  );
}
















