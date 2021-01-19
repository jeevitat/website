import React from 'react';
import './index.css';
import $ from "jquery";

function Writings() {
    return (
        <div>
            <div data-tabs class="tabs">
                <div class="tab">
                    <input type="radio" name="tabgroup" id="tab-1" checked />
                    <label for="tab-1" id = "title">The Exiles</label>
                    <div class="tab__content">
                        <p> The Exiles follows a boy named Riku, who has recently been exiled from his Tribe. The Kahro-Seir is one of five tribes surrounded by a inescapable forest, so getting exiled is a death sentence. However, unbeknowst to the governing body a group of wily teens have managed to survive in the Forest, making a Safe Haven for people like themselves. Riku is just beginning to enjoy his new life, when it's put in danger by a shapeshifting spy. Now he and a few new friends must journey back to the Kahro-Seir, and risk death or capture to try and save their people. </p>
                        <p> I wrote the majorty of the Exiles in the span of two weeks, during a particularly strong manic episode. As a result, there are many inconsistencies and plotholes. Some friends of mine(Trent, Jenna, Amy, Allison) read through it and helped me catch them, so many thanks. However, there are probably still some in there. If you notice any, let me know! Thanks :)</p>
                        <p><a id="writelink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/19-E0ACkdCc3kItVe-G14AJMivQObA93rAvcMTHZrWrw/edit?usp=sharing" > Read the Exiles</a></p>         
                    </div> 
                </div>
                <div class="tab">
                     <input type="radio" name="tabgroup" id="tab-2" />
                     <label for="tab-2" id = "title">Jules & Lenny</label>
                     <div class="tab__content">
                         <p>This work is a series of short stories following a little girl named Jules as she navigates the simple things in life, growing up and understanding people and making friends, alongside her best friend, an eldritch beast from before the dawn of humanity who goes by the name Lenny. Together, they learn what it is to be alive, and how be happy in a society that makes it so easy to be sad. It's written in a childrens style, but it contains themes of identity and trauma, so proceed with caution. Also, this is technically a work in progress, but it's short stories and each individual one i have so far is complete. </p>    
                        <p><a id="writelink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1svnMtb9a4BAgJsaXpCEaFlWjqOMx3i_Abbm_mk0o6XY/edit?usp=sharing" > Read Jules and Lenny</a></p>         
                    </div> 
                </div>
                <div class="tab">
                    <input type="radio" name="tabgroup" id="tab-3" />
                    <label for="tab-3" id = "title">Vaudeville</label>
                    <div class="tab__content">
                        <p>Caleb is about to start his senior year, and things are going really well for him. He has a tight-knit group of friends, an amazing girlfriend, and his medication and therapy has helped him manage his anxiety well. But there's just one thing that's bothering him: Kali Rai. The two of them have been neighbors forever, but recently she's been more active. They used to be friends, but they grew apart. Driven by guilt or curiosity, Caleb reaches out to her again, and ends up trying to solve a mystery that happened almost a decade ago. A coming of age novel about friendship, romance, and tragedy. </p>
                        <p>This story has taken me a particularly long time to write because it strikes close to home. The main character is based largely on myself, or at least on my anxious tendencies.</p>
                        <p><a id = "writelink" target = "_blank" rel = "noopener noreferrer" href = "https://archiveofourown.org/works/22027519/chapters/52569031"> Read Vaudeville </a></p>
                    </div> 
                </div>
                <div class="tab">
                    <input type="radio" name="tabgroup" id="tab-4"  />
                    <label for="tab-4" id = "title">Poetry</label>
                    <div class="tab__content">
                        <p>Not much to say here! I write subpar poetry. It's alright sometimes though! I've been proud of it on occaison. Usually it is written at strange hours, when my mind is on a real tumble. It can end up being almost illegible. Still, I think the more I write the more I'll improve, and I might as well let you read it! i guess. </p>
                        <p><a id = "writelink" target = "_blank" rel = "noopener noreferrer" href = "https://inefficientidiot.tumblr.com/"> Read my Poetry </a></p>
                    </div> 
                </div>
                <div class="tab">
                    <input type="radio" name="tabgroup" id="tab-5" />
                    <label for="tab-5" id = "title">Works in Progress</label>
                    <div class="tab__content">
                        <p>I have a LOT of things I'm in the middle of. Of course, I won't link them here, because I'm still working on them. Obviously. However, I will tell you a bit about them.  </p>
                        <p>I'm working on a book about the sri-lankan american community, though I won't say too much about it. It's sort of a mess right now</p>
                        <p>There's also the story of Prince Unknown, a prince in a parralel world in war, who meets with a girl from our dimension and must figure out a way to stop the war. Or something like that. To be honest, I have a lot of world building and absolutely no idea where the plot will go. I'll see where it takes me. </p>
                        <p>The last WIP is a team up with my friend Jenna. It's a surrealist sci-fi commedy about unnamed protagonist who much travel through 13 increasingly strange planets to find their way home.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Writings;