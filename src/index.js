import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

const holiday = [
  {
      headerText: 'Italy',
      imageUrl: 'https://www.baiaholiday.com/images/w-1900/h-1200/zc-1/q-80/p?src=https%3A%2F%2Fwww.baiaholiday.com%2Fuploads%2Fimage%2F1567781090802.jpg'
  },
  {
    headerText: 'Spain',
    imageUrl: 'https://www.thesun.co.uk/wp-content/uploads/2020/05/NINTCHDBPICT000311265816.jpg'
}
  ];

  const FrameForImage = (props) => {
    return (
      <div className="frame" >
      <h2 className="frame__header" >
        { props.header }
      </h2>
      <div className="frame__content">
      <img src={ props.image } />
      </div>
      </div>
    );
  };
  
const appContent = (
 <div className="app">
  <FrameForImage
    header={ holiday[0].headerText }
    image={ holiday[0].imageUrl }

    />

     <FrameForImage
    header={ holiday[1].headerText }
    image={ holiday[1].imageUrl }

    />
    
    
    
    
  </div>


);

console.log(appContent);

const rootElement = document.getElementById('react-app');

ReactDOM.render(appContent, rootElement);