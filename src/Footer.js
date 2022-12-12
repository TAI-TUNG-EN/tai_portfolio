import { useState, useRef, useEffect } from "react"
import { Link } from 'react-router-dom'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';

import { images } from './images.ts'
import Cursor from './Cursor'
import footerCss from './css/footer.module.scss'
import mailIcon from './static/icons/envelope.svg'
import mediumIcon from './static/icons/medium.svg'
import githubIcon from './static/icons/github.svg'

export default function Footer(){
  const [width, setWidth] = useState(window.innerWidth);
  const [footerParallax, setFooterParallax] = useState([0, 0]);

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

  useEffect(()=>{
    if(isMobile){
      console.log('mobile');
      setFooterParallax([0, 0]);
    }else if(isPad){
      console.log('mobile');
      setFooterParallax([0, 0]);
    }
    else{
      console.log('PC');
      setFooterParallax([50, -50]);
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    });
  }

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a
        href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    );
  }
  function OpenExternalLink({url, ...props}){
    return(
      <a 
        href={url}
        target="_blank">
        {props.children}
      </a>
    );
  }
  
  return(
    <Parallax id={footerCss.footer} translateY={footerParallax} speed={-10}>
      <div className={footerCss.upper_section_container}>
        <div className={footerCss.upper_left_container}>
          <span className={footerCss.upper_left_contents_prop}>After design</span>
          <span className={footerCss.upper_left_contents_prop}>All the best days</span>
        </div>
        <div className={footerCss.upper_right_container}>
          <Link to="/about"><div className={footerCss.upper_right_contents_prop_about}>About</div></Link>
          <div className={footerCss.upper_right_contents_prop_hashtag}><a href="https://tai-tung-en.github.io/tai_portfolio_hashtags/" className={footerCss.upper_right_contents_prop_hashtag}>Special content-Learn me by #hashtags</a></div>
          <Link to="/works"><div className={footerCss.upper_right_contents_prop_works}>Works</div></Link>
          <div className={footerCss.upper_right_contents_prop_back_to_top} onClick={scrollToTop}>Back to top</div>
        </div>
      </div>

      <div className={footerCss.underline_prop}></div>
      
      <div className={footerCss.bottom_section_container}>
        <div className={footerCss.copyright_prop}>©2022Tai, Tung-En</div>
        <div className={footerCss.bottom_right_container}>
          <div className={footerCss.author_container}>
            <div className={footerCss.responsibility_prop}>Presented by</div>
            <div className={footerCss.author_contents}>
              <span className={footerCss.author_emoji}>☺️</span>
              <span className={footerCss.author_name}>Tai, Tung-En (Direction/Design)</span>
              <Mailto email="chloe981219@gmail.com" subject="Greetings from {Please Enter Your Name Here}" body=""><img src={mailIcon} alt="" className={footerCss.author_img}></img></Mailto>
              <OpenExternalLink url="https://chloe981219.medium.com/"><img src={mediumIcon} alt="" className={footerCss.author_img}></img></OpenExternalLink>
            </div>
          </div>
          <div className={footerCss.author_container}>
            <div className={footerCss.responsibility_prop}>Especially thanks</div>
            <div className={footerCss.author_contents}>
              <span className={footerCss.author_emoji}>🥸</span>
              <span className={footerCss.author_name}>Hsiao, Yi-Han (Engineering)</span>
              <OpenExternalLink url="https://github.com/yihanYozikua"><img src={githubIcon} alt="" className={footerCss.author_img}></img></OpenExternalLink>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  )
}