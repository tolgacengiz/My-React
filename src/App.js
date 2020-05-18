import React from 'react';

import holiday from './holiday';
import FrameForImage from './FrameForImage';

class App extends React.Component {
    render () {
        return (
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
    }
}
export default App;