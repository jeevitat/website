import React from 'react';
import './index.css';
import Twitter from './socialimgs/twitter.png';
import Insta from './socialimgs/insta.png';
import Tumblr from './socialimgs/tumblr.png';
import Spotify from './socialimgs/spotify.png';
import Github from './socialimgs/git.png';


function Contact() {
    return (
        <div id="cpage">
            <div id = "cwrap">
                <p id="contactp" >Contact Section! I don't know why you would want to contact me, but if you do, here's a google form that'll let you email me! Also some social media buttons, in case you want to follow me, though I don't post often on most platforms. I'm usually just looking at memes. </p>
                <button><a href="https://twitter.com/jeevitats" target="_blank" rel="noopener noreferrer"><img class="sclbtn" src={Twitter}></img></a></button>
                <button><a href="https://www.instagram.com/streamfantasyhighondropout.tv/" target="_blank" rel="noopener noreferrer"><img class="sclbtn" src={Insta}></img></a></button>
                <button><a href= "https://caramelscones.tumblr.com/" target = "_blank" rel = "noopener noreferrer"><img class="sclbtn" src={Tumblr}></img></a></button>
                <button><a href="https://open.spotify.com/user/jeevitat" target="_blank" rel="noopener noreferrer"><img class="sclbtn" src={Spotify}></img></a></button>
                <button><a href="https://github.com/jeevitat" target="_blank" rel="noopener noreferrer"><img class="sclbtn" src={Github}></img></a></button>
            </div>
            <iframe id = "contactform" src="https://docs.google.com/forms/d/e/1FAIpQLSeWZu5du_6m4Qt972H2VBcpOHXXeqInbExJbTDG1I558hd2rQ/viewform?embedded=true" frameborder="0" >Loading…</iframe>
        </div>
        );
}

export default Contact;