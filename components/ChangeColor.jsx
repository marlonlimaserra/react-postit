import React from 'react';

import { CirclePicker  } from 'react-color';

function ChangeColor(props){
   
  return (
  <div className="changeColorPostit">
     
        <div> 
            <div><CirclePicker color={props.value.backgroundColor} onChangeComplete={(e) => props.change(e.hex) }/></div>
        </div>

  </div>);

}

export default ChangeColor;
