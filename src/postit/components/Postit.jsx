import React,{useState} from 'react';
import Draggable from 'react-draggable';
import {Resizable} from "re-resizable"; 
import ReactQuill from 'react-quill';
import DeletePostit from "./DeletePostit.jsx";
import ChangeColor from "./ChangeColor.jsx";
import Color from "./../images/color.png";
import Trash from "./../images/trash.png";

function Postit(props){
    
    var value = props.value;
    var [openDelete,setOpendelete] = useState(false);
    var [openChangeColor,setOpenChangeColor] = useState(false);
     
    const deletePostit = (() => {

        props.sendEvent({type:'delete',index:props.index,id:value.id});

    });

    var radius = false;
    var shadow = false;

    if(value.radius === true){ radius = true; }
    if(value.shadow === true){ shadow = true; }

    return (<React.Fragment>
                <Draggable
                    axis="both"
                    handle=".handle_drag_postit"
                    position={{x:value.position.x,y:value.position.y}}
                    grid={[1,1]}
                    scale={1}
                    onStop={(e) => { props.sendEvent({type:'changePosition',index:props.index,value:{x:(e.x-e.offsetX),y:(e.y-e.offsetY)},prop:'position',id:value.id}); }  }
                    defaultClassName={"resize-postit"}
                >
                <Resizable onResizeStop={(e, direction, ref, d) => {

                    var val = {width:value.size.width+d.width,heigth:value.size.heigth+d.height};
                    props.sendEvent({type:'changeSize',index:props.index,value:val,prop:'size',id:value.id});

                }} size={{width:value.size.width,height:value.size.heigth}}>
  
                    <div className={"postit_drag "+(radius === true ? 'postit_drag_border':'')+" "+(shadow === true ? 'postit_drag_shadown':'')} style={{backgroundColor:value.backgroundColor}}>
                        <div className="handle_drag_postit"></div>
                        <ReactQuill id={'quill'+props.index} onChange={(valueQuill) => props.sendEvent({type:'changeContent',index:props.index,value:valueQuill,prop:'value',id:value.id}) } theme="bubble" value={value.value} /> 
                    </div>
                    <div className="div_bottom_postit">
                        <img onClick={() => setOpendelete(true) } className="trashPostit" src={Trash} />
                        <img onClick={() => { setOpenChangeColor(!openChangeColor); }} className="trashPostit" src={Color}  />
                    </div>
                    {

                        (openDelete === true) &&
                        <DeletePostit value={value} delete={() => deletePostit() } close={() => setOpendelete(false) } />

                    }
                    {

                        (openChangeColor === true) &&
                        <ChangeColor change={(e) => {

                            console.log(e);
                            props.sendEvent({type:'changeBackgroundColor',index:props.index,value:e,prop:'backgroundColor',id:value.id});

                        }} value={value} close={() => setOpendelete(false) } />

                    }
                </Resizable>
            </Draggable>
    </React.Fragment>);

}

export default Postit;
