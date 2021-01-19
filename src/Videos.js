import React from 'react';
import './index.css';


function Videos() {
    return (
        <div>
            <div id = "videoarea">
                <div id="viddiv">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/H5Wh3fQA7dI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/e1Q8GwaMT9c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fM6keqWDCGg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/21z6R-ldxl4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
             </div>
        </div>
     );
}

export default Videos;