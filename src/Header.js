import React from 'react';
import './index.css';
import Image1 from './headerpics/1.jpg';
import Image2 from './headerpics/2.jpg';
import Image3 from './headerpics/3.jpg';
import Image4 from './headerpics/4.jpg';
import Image5 from './headerpics/5.jpg';
import Image6 from './headerpics/6.jpg';
import Slider from './Slider.js';

var sayings = ["Gamer", "Nerd", "Read every tintin comic three times", "Resident Representative of a 5-star animal crossing island", "Coder, perhaps", "Likes Candy", "Made this Website", "Was Color Guard Co-Captian", "Simps for Mario", "Will Work for Polygon.com one day", "Writer", "Aspiring Journalist", "Bibliophile", "Secretly a Weeb", "Loves the TMNT", "Dangerous Stranger"];
var text = sayings[Math.floor((Math.random() * sayings.length))];

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

function Header() {
    return (
        <div>
            <button id="totop"><a href="#top">Top</a></button>
            <h1> Jeevita Cynthia Tharmarajah </h1>
            <h2> {text} </h2>
            <div id="horizontal">
                <button><a href="#about"> About </a></button>
                <button><a href = "#resume"> Resume </a></button>
                <button><a href = "#writings"> Writing </a></button>
                <button><a href = "#videos"> Videos </a></button>
                <button><a href = "#contact"> Contact</a></button>
            </div>
            <div >
            <Slider
                    options={{
                    autoPlay: 3000,
                    pauseAutoPlayOnHover: false,
                    wrapAround: true,
                    fullscreen: true,
                    adaptiveHeight: true,
                    groupCells: true,
                    freeScroll: true,
                    prevNextButtons: false,
                    pageDots: false, 
                    resize: true,

                }}
                >
                {images.map((image, index) => (
                    <div class = "carousel" style={{ width: '400px', height: '500px'}} key={index}>
                            <img src={image} alt="" class="carousel-cell"/>
                    </div>
                ))}
                </Slider>
               </div>
        </div>
    );
}
export default Header ;