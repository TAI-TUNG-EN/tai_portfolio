import logo from './logo.svg';
import './App.css';
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';

import About from './About'
import Works from './Works'
import Hashtags from './Hashtag'
import HashtagPadMobile from './HashtagPadMobile'
import WorksAnotheries from './works/Anotheries'
import WorksEverythingIsGonnaBeAlright from './works/EverythinsIsGonnaBeAlright'
import OrganVoice from './works/OrganVoice'
import Qdinosaur from './works/Qdinosaur'
import SleepWell from './works/SleepWell'
import SurfaceApporel from './works/SurfaceApporel'
import Login from './Login'
import Nishikage from './works/Nishikage'
import JobHomes from './works/JobHomes'
import MotenaSea from './works/MotenaSea'
import Hashtag1 from './hashtags/Hashtag1';
import Hashtag2 from './hashtags/Hashtag2';
import Hashtag3 from './hashtags/Hashtag3';
import Hashtag4 from './hashtags/Hashtag4';
import Hashtag5 from './hashtags/Hashtag5';
import Hashtag6 from './hashtags/Hashtag6';
import Hashtag7 from './hashtags/Hashtag7';
import Hashtag8 from './hashtags/Hashtag8';
import Hashtag9 from './hashtags/Hashtag9';
import Hashtag10 from './hashtags/Hashtag10';
import Hashtag11 from './hashtags/Hashtag11';
import Hashtag12 from './hashtags/Hashtag12';
import Hashtag13 from './hashtags/Hashtag13';
import Hashtag14 from './hashtags/Hashtag14';
import Hashtag15 from './hashtags/Hashtag15';
import Hashtag16 from './hashtags/Hashtag16';
import Hashtag17 from './hashtags/Hashtag17';
import Hashtag18 from './hashtags/Hashtag18';
import Hashtag19 from './hashtags/Hashtag19';
import Hashtag20 from './hashtags/Hashtag20';

const App = () => {

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Login /></>}></Route>
        <Route path="/login" element={<><Login /></>}></Route>
        <Route path="/about" element={<><About /></>}></Route>
        <Route path="/works" element={<><Works /></>}></Route>
        <Route path="/hashtags" element={<><Hashtags /></>}></Route>
        <Route path="/works/nishikage" element={<><Nishikage /></>}></Route>
        <Route path="/works/job_homes" element={<><JobHomes /></>}></Route>
        <Route path="/works/motenaSea" element={<><MotenaSea /></>}></Route>
        <Route path="/works/anotheries" element={<><WorksAnotheries /></>}></Route>
        <Route path="/works/q_dinasour" element={<><Qdinosaur /></>}></Route>
        <Route path="/works/sleep_well" element={<><SleepWell /></>}></Route>
        <Route path="/works/everything_is_gonna_be_alright" element={<><WorksEverythingIsGonnaBeAlright /></>}></Route>
        <Route path="/works/organ_voice" element={<><OrganVoice /></>}></Route>
        <Route path="/works/surface_apparel" element={<><SurfaceApporel /></>}></Route>

        <Route path="/hashtags_mobile" element={<><HashtagPadMobile /></>}></Route>
        <Route path="/hashtags/hashtag_1" element={<><Hashtag1 /></>}></Route>
        <Route path="/hashtags/hashtag_2" element={<><Hashtag2 /></>}></Route>
        <Route path="/hashtags/hashtag_3" element={<><Hashtag3 /></>}></Route>
        <Route path="/hashtags/hashtag_4" element={<><Hashtag4 /></>}></Route>
        <Route path="/hashtags/hashtag_5" element={<><Hashtag5 /></>}></Route>
        <Route path="/hashtags/hashtag_6" element={<><Hashtag6 /></>}></Route>
        <Route path="/hashtags/hashtag_7" element={<><Hashtag7 /></>}></Route>
        <Route path="/hashtags/hashtag_8" element={<><Hashtag8 /></>}></Route>
        <Route path="/hashtags/hashtag_9" element={<><Hashtag9 /></>}></Route>
        <Route path="/hashtags/hashtag_10" element={<><Hashtag10 /></>}></Route>
        <Route path="/hashtags/hashtag_11" element={<><Hashtag11 /></>}></Route>
        <Route path="/hashtags/hashtag_12" element={<><Hashtag12 /></>}></Route>
        <Route path="/hashtags/hashtag_13" element={<><Hashtag13 /></>}></Route>
        <Route path="/hashtags/hashtag_14" element={<><Hashtag14 /></>}></Route>
        <Route path="/hashtags/hashtag_15" element={<><Hashtag15 /></>}></Route>
        <Route path="/hashtags/hashtag_16" element={<><Hashtag16 /></>}></Route>
        <Route path="/hashtags/hashtag_17" element={<><Hashtag17 /></>}></Route>
        <Route path="/hashtags/hashtag_18" element={<><Hashtag18 /></>}></Route>
        <Route path="/hashtags/hashtag_19" element={<><Hashtag19 /></>}></Route>
        <Route path="/hashtags/hashtag_20" element={<><Hashtag20 /></>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
