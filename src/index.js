import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

const appContent = (
 <div className="app">
   <h1>HOLIDAY!!</h1>
    
    <div className="frame" >
    <h2 className="frame__header" >
      Italy
    </h2>
    <div className="frame__content">
    <img src="https://www.baiaholiday.com/images/w-1900/h-1200/zc-1/q-80/p?src=https%3A%2F%2Fwww.baiaholiday.com%2Fuploads%2Fimage%2F1567781090802.jpg" />
    </div>

    </div>
    <div className="frame" >
    <h2 className="frame__header" >
      Spain
    </h2>
    <div className="frame__content">
    <img src="https://www.thesun.co.uk/wp-content/uploads/2020/05/NINTCHDBPICT000311265816.jpg" />
    </div>

    </div>
    <div className="frame" >
    <h2 className="frame__header" >
      Thailand
    </h2>
    <div className="frame__content">
    <img src="https://lh3.googleusercontent.com/proxy/E4oXXMTtUGRYDByW-ttx1QAR-qhMTCeoOB23b7ulPWxH_K4oMbIQpPZV9cD_SARbi41Zg51IgXf2OuMPFmaOnOGZA8tNKZ0G6eNNA69cRLH0ot77XCGCnyAI9RnYPVPpVeL6C4Nfc8S3HIyXf1Svgnw6DrPOpN_ATIR9qdqyFro78lHDOhp1aL7Q5rLTMob77c8y0OvlbA" />
    </div>
    </div>
    <div className="frame" >
    <h2 className="frame__header" >
      Japan
    </h2>
    <div className="frame__content">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/pKdnHO-O5d4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    
  </div>


);

console.log(appContent);

const rootElement = document.getElementById('react-app');

ReactDOM.render(appContent, rootElement);