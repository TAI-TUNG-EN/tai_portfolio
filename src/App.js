import logo from './logo.svg';
import './App.css';
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';

import About from './About'
import Works from './Works'
import Hashtags from './Hashtag'
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
        <Route path="/hashtags/hashtag_1" element={<><Hashtag1 /></>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
