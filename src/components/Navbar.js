import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

import { images } from '../images.ts'
import navCss from '../css/nav.module.scss'

const Navbar = ({wrapperComponent, ...props}) => {
  const nav_about_ref = useRef(null);
  const nav_works_ref = useRef(null);
  const nav_bar_ref = useRef(null);
  const COLOR_NAV_BG = '#282D2F';

  const Wrapper = wrapperComponent;
  const location = useLocation();

  const nav_bar = nav_bar_ref.current;

  useEffect(() => {
    console.log(document.getElementsByClassName(`${navCss.nav_bar_bg}`)[0].style.marginLeft);
    if((location.pathname == '/about') || (location.pathname == '/')){
      nav_about_ref.current.style.color = 'white';
      nav_works_ref.current.style.color = COLOR_NAV_BG;
      setTimeout(()=>{
        nav_bar_ref.current.style.transform = 'translateX(-3rem)';
        nav_bar_ref.current.style.transition = 'all .4s cubic-bezier(0.71, 0.05, 0.19, 1) 1.1s';
        nav_bar_ref.current.style.width = '6.5rem';
      }, 0);
      
    }
    else if(location.pathname == '/works'){
      nav_works_ref.current.style.color = 'white';
      nav_about_ref.current.style.color = COLOR_NAV_BG;
      setTimeout(()=>{
        nav_bar_ref.current.style.transform = 'translateX(3.5rem)';
        nav_bar_ref.current.style.transition = 'all .4s cubic-bezier(0.71, 0.05, 0.19, 1) 1.5s';
        nav_bar_ref.current.style.width = '6.5rem';
      }, 5)
      
    }
  }, [location.pathname]);


  return(
        <Wrapper {...props}>
          <Link to="/about" className={navCss.nav_prop} ref={nav_about_ref}>About</Link>
          <Link to="/works" className={navCss.nav_prop} ref={nav_works_ref}>Works</Link>
          <div className={navCss.nav_bar_container}>
            <div className={navCss.nav_bar_bg} ref={nav_bar_ref}></div>
          </div>
          
        </Wrapper>
      
    
  )
}

Navbar.propTypes = {
  wrapperComponent: PropTypes.elementType,
};

Navbar.defaultProps = {
  wrapperComponent: 'nav',
};

export default Navbar;