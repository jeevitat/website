import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import Writings from './Writings.js';
import Resume from './Resume.js';
import About from './About.js';
import Videos from './Videos.js';
import Contact from './Contact.js';
import $ from "jquery";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <h2 id = "about"> Who am I </h2>
        <About />
        <h2 id = "resume">Cool stuff to brag about so you'll think I'm cool</h2>
        <Resume />
        <div id = "wrap">
        <h2 id="writings"> Writings </h2>
        <Writings />
        </div>
        <h2 id="videos"> Videos </h2>
        <Videos />
        <h2 id="contact">Contact Me </h2>
        <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);


(function ($, document) {

    // get tallest tab__content element
    let height = -1;

    $('.tab__content').each(function () {
        height = height > $(this).outerHeight() ? height : $(this).outerHeight();
        $(this).css('position', 'absolute');
    });

    // set height of tabs + top offset
    $('[data-tabs]').css('min-height', height + 40 + 'px');

}($, document));
