import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

const appContent = (
 <div className="app">
    <div className="frame" >
    <h1 className="frame__header" >
      some nice picture of cat
    </h1>
    <div className="frame__content">
    <img src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </div>

    </div>
    <div className="frame" >
    <h1 className="frame__header" >
      some nice picture of cat
    </h1>
    <div className="frame__content">
    <img src="https://www.cat-on.com/media/image/e8/3e/58/katzen-kratzbaum-kratzpappe-made-in-germany_800x800.jpg" />
    </div>

    </div>
    <div className="frame" >
    <h1 className="frame__header" >
      some nice picture of cat
    </h1>
    <div className="frame__content">
    <img src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </div>

  </div>
 </div>

);

console.log(appContent);

const rootElement = document.getElementById('react-app');

ReactDOM.render(appContent, rootElement);