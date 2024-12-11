import React, { useEffect, useState }  from 'react';
import img1 from '../assets/images/temp1.png';
import img2 from '../assets/images/temp2.png';
import scene2 from '../assets/images/scene2.jpg';
import scene2color from '../assets/images/scene2-color.jpg';
import scene3 from '../assets/images/scene3.jpg';
import scene3color from '../assets/images/scene3-color.jpg';



import scene5 from '../assets/images/scene5.jpg';
import scene5color from '../assets/images/scene5-color.jpg';

import scene6 from '../assets/images/scene6.jpg';
import scene6color from '../assets/images/scene6-color.jpg';



import scene8 from '../assets/images/scene8.jpg';
import scene8color from '../assets/images/scene8-color.jpg';

import bubble1 from '../assets/images/mushroom.png';
import bubble2 from '../assets/images/bok-choy.png';
import bubble3 from '../assets/images/drumstick.png';
import bubble4 from '../assets/images/cabbage.png';
import bubble5 from '../assets/images/califlower.png';
import bubble6 from '../assets/images/lamb.png';
import bubble7 from '../assets/images/scallop.png';
import bubble8 from '../assets/images/beef.png';
import bubble9 from '../assets/images/chicken_heart.png';
import bubble10 from '../assets/images/woodear.png';



import Hover from './hover.js';
import file from '../assets/interview/text.txt';

const Element = () => {
   
    const [textArray, setTextArray] = useState([]);

  useEffect(() => {
    fetch(file) 
      .then(response => response.text())
      .then(data => {
        const lines = data.split('%');
        console.log(lines); 
        setTextArray(lines.slice(0, 15)); 
        console.log(textArray[2]);
      })
      .catch(error => console.error('Error reading the file:', error));
  }, []);


    return (
        <div className="min-h-screen flex items-center justify-center relative">
             
        {/* <Bubble text={text1}/> */}
            <div className="grid sm:grid-cols-3 md:grid-cols-5 p-4 gap-2">
                <Hover img1={img1} img2={img2} bubble={bubble4} text={textArray[0]} />
                <Hover img1={scene2} img2={scene2color} bubble={bubble2} text={textArray[1]} />
                <Hover img1={scene3} img2={scene3color} bubble={bubble3} text={textArray[2]}/>
                <Hover img1={img1} img2={img2} bubble={bubble6} text={textArray[3]}/>
                <Hover img1={scene5} img2={scene5color} bubble={bubble5} text={textArray[4]}/>
                <Hover img1={scene6} img2={scene6color} bubble={bubble1} text={textArray[5]}/>
                <Hover img1={img1} img2={img2} bubble={bubble7} text={textArray[6]}/>
                <Hover img1={scene8} img2={scene8color} bubble={bubble8} text={textArray[7]}/>
                <Hover img1={img1} img2={img2} bubble={bubble9} text={textArray[8]}/>
                <Hover img1={img1} img2={img2} bubble={bubble10} text={textArray[9]}/>
                <Hover img1={img1} img2={img2} bubble={bubble1} text={textArray[10]}/>
                <Hover img1={img1} img2={img2} bubble={bubble1} text={textArray[11]}/>
                <Hover img1={img1} img2={img2} bubble={bubble1} text={textArray[12]}/>
                <Hover img1={img1} img2={img2} bubble={bubble1} text={textArray[13]}/>
                <Hover img1={img1} img2={img2} bubble={bubble1} text={textArray[14]}/>
            </div>
        </div>
    );
};

export default Element;
