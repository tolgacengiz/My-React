import React from 'react';

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

  export default FrameForImage;