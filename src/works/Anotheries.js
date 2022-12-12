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
import anotheriesCss from '../css/works_anotheries.module.scss'
import loadingCss from '../css/loading.module.scss'
import { images } from '../images.ts'
import banner from '../static/img/works/covers/anotheries.png'
import anotheries_1 from '../static/img/works/anotheries/anotheries_01.png'
import anotheries_2 from '../static/img/works/anotheries/anotheries_top.png'
import anotheries_3 from '../static/img/works/anotheries/anotheries_contact_form.png'
import anotheries_photo_1 from '../static/img/works/anotheries/anotheries_02.png'
import anotheries_photo_2 from '../static/img/works/anotheries/anotheries_03.png'
import anotheries_photo_3 from '../static/img/works/anotheries/anotheries_04.png'
import show_page_1 from '../static/img/works/anotheries/show_page_1.png'
import show_page_2 from '../static/img/works/anotheries/show_page_2.png'
import show_page_3 from '../static/img/works/anotheries/show_page_3.png'
import show_page_4 from '../static/img/works/anotheries/show_page_4.png'

export default function Anotheries() {
    let width_worksBackToAnchor = 'calc(60% + 8rem)';

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
    
    var paragraphTwoDescriptionMargin = '2.5rem';
    if(isMobile){
        width_worksBackToAnchor = '80%'
        paragraphTwoDescriptionMargin = '0';
    } else if(isPad){
        width_worksBackToAnchor = '75%'
        paragraphTwoDescriptionMargin = '1rem';
    } else{
        width_worksBackToAnchor = 'calc(60% + 8rem)'
        paragraphTwoDescriptionMargin = '3rem'
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
    return (
        <>
            <Cursor cursorTypes='👀' />
            <Loading bg_style={loadingCss.loader_works} loadingTimeControl='1000'/>
            <PageLayout>
                <section id={anotheriesCss.works_anotheries}>
                    <Sidebar sidebarTitle="Explore this page" emoji_1="⬇️" emoji_1_text="Scroll" emoji_2="👀" emoji_2_text="View" marginTopSetting="2rem"/>
                    <div className={anotheriesCss.kv_container}>
                        <ProjectKvLayout
                            kv_column_direction="column"
                            nameEN="Anotheries"
                            type="Website (Side project)" roles={["Direction, Writing, Project Management,", "Art Direction, Design, Photography "]} date="2022.08-now" 
                            tool="Xmind, Figma, Lightroom, Photoshop" 
                            url="https://yihanyozikua.github.io/anotheries/" urlTitle="Website"
                            bannerImg={banner} bannerImgPosition="center 90%"/>

                        <div className={anotheriesCss.paragraph_1_container}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-once="false">
                            <div className={anotheriesCss.paragraph_1_title}>思い出からもう一つの旅へ</div>
                            <div className={anotheriesCss.paragraph_1_description_container}>
                                <div className={anotheriesCss.paragraph_1_description_prop}>
                                    AnotheriesはAnotherとmemoriesの意味に合わせた造語です。一つ一つ旅の思い出を集め、次の旅のきっかけになります。
                                </div>
                                <div className={anotheriesCss.paragraph_1_description_prop}>「思い出からもう一つの旅へ」をコンセプトにしました。</div>
                                <br></br>
                                <div className={anotheriesCss.paragraph_1_description_prop}>元々旅行が好きな私たちは、よく自分のSNSで旅行の情報と写真をシェアします。そして少しつづ周りの人から「この間シェアしたところに行きました」、「行く前に書いてあった経験談をチェックしてよかった」などの声をもらえるようになって、私たちの旅行の思い出が、他の人と繋いでいることにシンプルに嬉しく思いました。もっと多くの人の役に立ちたい、しかし、SNSだとシェアの仕方と届ける人に限りがあるので、サイト制作することになりました。</div>
                                <div className={anotheriesCss.paragraph_1_description_prop}>写真と言葉を通して、私たちが旅先で見たもの、感じたことを共有し、共感を持ってもらい、人々と繋ぎたいと思います。</div>
                            </div>
                        </div>


                        <div className={anotheriesCss.paragraph_1_container}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-once="false">
                            <div className={anotheriesCss.paragraph_1_title}>
                                旅行サイトほど情報満載ではないけど、SNS投稿より伝えたいことがある
                            </div>
                            <div className={anotheriesCss.paragraph_1_description_container}>
                                
                                <div className={anotheriesCss.paragraph_1_description_prop}>Anotheriesを制作する上での課題が二つあります。一つは、現行の旅行サイトと違う視点で旅行先を紹介すること。もう一つは、人の共感を得ること。</div>
                                <div className={anotheriesCss.paragraph_1_description_prop}>インターネットに旅行紹介のコンテンツは既にたくさんあるので、そうみたいにアクセスからモデルコースまで詳しく紹介したくないです。でも、自分のSNSのようなただの感想シェアになるのも、少し物足りなさが感じます。加え、旅行に求めるものは人それぞれあって、綺麗な景色、美味しいご飯、友達との楽しい時間、いざ出してみるとキリがないので、人の共感を得ることはそもそも難しいことではあります。</div>
                                <div className={anotheriesCss.paragraph_1_description_prop}>そこで私たちが考えていたのは、インターネットで載せていない､実際に訪れた私たちだけ知っていること、試して良かったと思う遊び方などを文章にして、エッセイを読む感覚で紹介するという解決策です。実のエピソードと気持ちを共有することで共感してもらい、文章に工夫しながら、旅をより一層楽しめるように、経験談を通して、ユーザーにとって有意義の情報を提供することを心掛けしています。</div>
                            </div>
                        </div>





                        <div className={anotheriesCss.middleImg}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-once="false">
                            <img src={anotheries_1} alt="dinasours" className={anotheriesCss.all_dinasours_prop}></img>
                        </div>


                        <div className={anotheriesCss.paragraph_1_container}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-once="false">
                            <div className={anotheriesCss.paragraph_1_title}>目の前に広がる景色がそのまま</div>
                            <div className={anotheriesCss.paragraph_1_description_container}>
                                <div className={anotheriesCss.paragraph_1_description_prop}>サイトに掲載する写真は全て私たち自ら撮影したものになります。リアルさを伝えつつ、ちゃんとした綺麗な写真を撮ることを心掛けして、主体と周りのバランスを意識しながら、ストーリー性のある構図を考えたり、その場で感じた光や空気感をできるたげ残せるようにレタッチの力加減を調整したり、一枚一枚に私たちのこだわりが詰まっています。</div>
                            </div>
                        </div>
                        

                        <div className={anotheriesCss.photo_container}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-once="false">
                            <div className={anotheriesCss.photo_contents_container}>
                                <img src={anotheries_photo_1} className={anotheriesCss.photo_prop}></img>
                                <img src={anotheries_photo_2} className={anotheriesCss.photo_prop}></img>
                                <img src={anotheries_photo_3} className={anotheriesCss.photo_prop}></img>
                            </div>
                        </div>


                        <div className={anotheriesCss.paragraph_2_container}>
                            <div className={anotheriesCss.paragraph_2_contents_container}>

                                <div className={anotheriesCss.paragraph_2_each_container}
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-offset="0"
                                    data-aos-duration="300"
                                    data-aos-once="false">
                                    <div className={anotheriesCss.paragraph_2_text_container}>
                                        <div className={anotheriesCss.paragraph_2_title}>写真を際立たせる余白感</div>
                                        <div className={anotheriesCss.paragraph_2_description}>
                                            写真がメインになるサイトなので、カラフルで見せる一方、ごちゃつきにならないように、サイズ感、余白の調整に気をつけています。
                                        </div>
                                        <div className={anotheriesCss.paragraph_2_description}>
                                            彩りの写真を際立たせながら、旅の余裕感を感じてもらいたくて、背景色を薄くして、余白も多めに取っています。
                                        </div>
                                    </div>
                                    <div className={anotheriesCss.paragraph_2_img_container}>
                                        <img src={ anotheries_2 } className={anotheriesCss.paragraph_2_img_prop}></img>
                                    </div>
                                </div>

                                
                                <div className={anotheriesCss.paragraph_2_each_container}
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-offset="0"
                                    data-aos-duration="300"
                                    data-aos-once="false">
                                    <div className={anotheriesCss.paragraph_2_text_container}>
                                        <div className={anotheriesCss.paragraph_2_title}>さりげない遊び心</div>
                                        <div className={anotheriesCss.paragraph_2_description}>
                                        旅の楽しさとワクワク感が伝わるため、写真の動きにこだわってデザインする他、お問い合わせフォームの写真はサイトに未公開のものにして、お問い合わせ完了ページでユーザーにプレゼントするのも私たちささやかな遊び心です。
                                        </div>
                                    </div>
                                    <div className={anotheriesCss.paragraph_2_img_container}>
                                        <img src={ anotheries_3 } className={anotheriesCss.paragraph_2_img_prop}></img>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className={anotheriesCss.paragraph_1_container}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-once="false">
                            <div className={anotheriesCss.paragraph_1_title}>更新しやすさを重視したテンプレートづくり</div>
                            <div className={anotheriesCss.paragraph_1_description_container}>
                                <div className={anotheriesCss.paragraph_1_description_prop}>しっかりこのサイトを育てていきたいと思い、公開後も定期的に更新する予定です。更新しやすさを考慮し、下層デザインはいくつかのパターンを作成し、テンプレート化しました。今後追加する際には写真とテキストのボリュームによって、適正なテンプレートを選んで投稿するだけなので簡単です。</div>
                            </div>
                        </div>
                        

                        <div className={anotheriesCss.show_page_container}>
                            <div className={anotheriesCss.show_page_contents_container}>
                                <img src={show_page_1} className={anotheriesCss.show_page_prop}></img>
                                <img src={show_page_2} className={anotheriesCss.show_page_prop}></img>
                                <img src={show_page_3} className={anotheriesCss.show_page_prop}></img>
                                <img src={show_page_4} className={anotheriesCss.show_page_prop}></img>
                            </div>
                        </div>

                        <div className={anotheriesCss.postscript_container}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-once="false">
                            <div className={anotheriesCss.postscript_contents_container}>
                                <div className={anotheriesCss.postscript_paragraph_container}>
                                    <div className={anotheriesCss.postscript_paragraph_title_prop}>制作の振り返り</div>
                                </div>
                                <div className={anotheriesCss.postscript_paragraph_container}>
                                    <div className={anotheriesCss.postscript_paragraph_prop}>どこに行っても、カメラを持っている私たちがいる。</div>
                                    <div className={anotheriesCss.postscript_paragraph_prop}>せっかくたくさん調べて行ってきた旅だから、せっかくたくさんの写真を撮っていた旅だから。</div>
                                    <div className={anotheriesCss.postscript_paragraph_prop}>
                                    どうやって私たちが好きなことを人の役に立つことにするのか、考えながら手を動かしてみたら、今のAnotheriesが生まれました。
                                    </div>
                                    <div className={anotheriesCss.postscript_paragraph_prop}>ここで紹介したのは、人々が憧れる絶景ではない、でも、心を揺さぶる景色。</div>
                                    <div className={anotheriesCss.postscript_paragraph_prop}>私たちの旅先との出会い、かけがえのない思い出はあなたにとって、素敵な旅のきっかけになりますように。</div>
                                </div>
                            </div>

                        <div className={anotheriesCss.especially_thanks_container}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-offset="0"
                            data-aos-duration="300"
                            data-aos-once="false">
                            <div className={anotheriesCss.especially_thanks_contents_container}>
                                <div className={anotheriesCss.especially_thanks_title_prop}>Especially thanks</div>
                                <div className={anotheriesCss.especially_thanks_description_prop}>Engineering</div>
                                <div className={anotheriesCss.especially_thanks_description_prop}>Hsiao, Yi-Han</div>
                            </div>
                        </div>
                        </div>

                        <WorksBackToAnchor 
                            prevUrl="/works/motenaSea"
                            nextUrl="/works/q_dinasour"
                            containerWidth={width_worksBackToAnchor}/>
                    </div>
                </section>
                <Footer />
            </PageLayout>
        </>
    )
}






