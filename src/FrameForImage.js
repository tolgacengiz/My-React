import React from 'react';
import './FrameForImage.css'


const FrameForImage = (props) => {
    return (
      <div className="frame" >
        <h2 className="frame__header" >
          { props.header }
        </h2>
        <div className="frame__content">
        <img src={ props.image } alt='Holiday'/>
        </div>

        {props.children &&  (
          <div className="frame__child">
          { props.children }
        </div>
     
      
        )}

      </div>  

    );
  };

  export default FrameForImage;