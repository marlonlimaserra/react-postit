  
import React from "react";
import Postit from "./components/Postit.jsx"; 
import './css/main.css';

function Marlon(props) {
 
    var show = true; 
    var opacityNotHover = 1;
    
    if(typeof props.show === "boolean"){ show = props.show; } 
    if(typeof props.opacityNotHover === "number"){ opacityNotHover = props.opacityNotHover; }

    const sendEvent = ((e) => {
  
        var id = undefined;
        if(props.id !== undefined){ id = props.id; }
        if(props.onEvent !== undefined){ if(typeof props.onEvent === "function"){ props.onEvent(e); }}

    });

    
    
    return (
    <React.Fragment>
        {

            (opacityNotHover !== 1) &&
            <React.Fragment> <style>{' .resize-postit{ opacity:'+opacityNotHover+'; } .resize-postit:hover{ opacity:1; } '}</style> </React.Fragment>

        }
        {
            (show === true) &&
            props.data.map((value,index) => {

                return(<Postit sendEvent={(e) => sendEvent(e)} value={value} key={value.id} index={index} />)
                
            })

        }
    </React.Fragment>);
    
  }
  
  export default Marlon;
  