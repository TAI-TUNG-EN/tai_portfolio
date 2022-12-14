import React from "react"
import PropTypes from 'prop-types'
import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';

import Cursor from "../Cursor"
import Footer from '../Footer'

const HashtagLayout = ( children ) => {
  return(
    <ParallaxProvider>
      <Cursor />
      { children }
      <Footer />
    </ParallaxProvider>
  )
};

HashtagLayout.propTypes = {
  children: PropTypes.node.isRequired
}

HashtagLayout.defaultProps = {
  bgColor: '',
}

export default HashtagLayout;
