import React from 'react';
import './index.css';
import Image1 from './resimages/cn.PNG';
import Image2 from './resimages/coding.png';
import Image3 from './resimages/chs.jpg';
import Image4 from './resimages/book.jpg';
import Image5 from './resimages/flag.jpg';
import Image6 from './resimages/litmag.PNG';

function Resume() {
    return (
        <div id = "wrapresume">
        <div id="resumecontent">
            <div class="tile">
                <img src={Image1} />
                <div class="text">
                    <p class="animate-text"> I've worked at Code Ninjas for almost two years now! It will officially be two years this coming may. We teach kids aged 7-12 Scratch, Javascript, and then we get into some Lua and C# stuff. It's really fun and the best job I could have :) Besiders working at Polygon.com which I will do one day. </p>
                </div>
            </div>
            <div class="tile">
                <img src={Image2} />
                <div class="text">
                    <p class="animate-text">I like to code! duh. I know Java best, but I have a working knowledge of javascript, HTML, CSS, ReactJS, NodeJS, python, C++, C#, and Lua. I linked my github below, but the only things I have on there are stupid chatbots I made for fun and the code for this website, if I remember to upload them.</p>
                </div>
            </div>
            <div class="tile">
                <img src={Image3} />
                <div class="text">
                    <p class="animate-text"> I did graduate high school, which is impressive considering the amount of work I actually did. I also managed to get into college, but I haven't passed yet so I'll hold off on putting it on my resume. I also did a bunch of clubs and stuff, some of which I will include on my resume because I'm proud of them. </p>
                </div>
            </div>
            <div class="tile">
                <img src={Image4} />
                <div class="text">
                    <p class="animate-text"> The Library Advisory Board was one of the best clubs I did in high school. We planned events for the school library, and in general did nerdy book stuff. This picture isn't of our school library, i just googled 'library aesthetic'  </p>
                </div>
            </div>
                <div class="tile">
                    <img src={Image5} />
                    <div class="text">
                        <p class="animate-text"> I was on the school color guard for FIVE YEARS! I was even co-captain for the last year, though if you ask me Jenna deserved it. Anyway, this was one of the biggest and best expiriences of my teenage existence and it ruled and I have lost the plot.</p>
                    </div>
                </div>
                <div class="tile">
                    <img src={Image6} />
                    <div class="text">
                        <p class="animate-text"> The litmag, and the creative writing class in general, was also a big staple of my high school existence. That sentence was not gramatically correct. But I wrote poetry or short stories and stuff and it was published in a cool looking book with art and it was fun! </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;