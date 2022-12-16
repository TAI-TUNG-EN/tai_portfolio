import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'


import cursorCss from './css/cursor.module.scss'
import footerCss from './css/footer.module.scss'

export default function Cursor(cursorTypes){
  useEffect(() => {
    console.log(`cursorTypes: ${cursorTypes.cursorTypes}`);
    document.getElementById(`${cursorCss.cursor}`).innerHTML = cursorTypes.cursorTypes;
    document.getElementById(`${cursorCss.cursor}`).style.marginTop = '0';

    var cursor = document.getElementById(`${cursorCss.cursor}`);
    var cursorinner = document.getElementById(`${cursorCss.cursor2}`);
    var a = document.querySelectorAll('a');
    document.addEventListener('mousemove', function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });

    function cursorAction(els, cursorClass, cursorInnerClass){
      [].forEach.call(els, function(el){
        el.addEventListener('mouseover', () => {
          cursor.classList.add(cursorClass);
          cursorinner.classList.add(cursorInnerClass);
          document.getElementById(`${cursorCss.cursor}`).innerHTML = '👆';
          document.getElementById(`${cursorCss.cursor}`).style.marginTop = '.5rem';
        });
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove(cursorClass);
          cursorinner.classList.remove(cursorInnerClass);
          document.getElementById(`${cursorCss.cursor}`).innerHTML = cursorTypes.cursorTypes;
          document.getElementById(`${cursorCss.cursor}`).style.marginTop = '0';
        });
      });
    }
    cursorAction(a, `${cursorCss.cursor_hover_a}`, `${cursorCss.cursorinnerhover_a}`);
    cursorAction(document.getElementsByClassName(`${footerCss.upper_right_contents_prop_back_to_top}`), `${cursorCss.cursor_hover_a}`, `${cursorCss.cursorinnerhover_a}`)
    cursor.classList.add(`${cursorCss.cursor}`);
    cursorinner.classList.add(`${cursorCss.cursor2}`);

  }, [cursorTypes.cursorTypes])


  return(
    <>
      <div id={cursorCss.cursor}>{cursorTypes.cursorTypes}</div>
      <div id={cursorCss.cursor2}></div>
    </>
  );
}