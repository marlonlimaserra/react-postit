import React, {useState} from 'react';
import Postit from "./postit";

function App() {
   
  const [its,setIts] = useState([]);
  const [show,setShow] = useState(true);
  const [opacityOnHover,setOpacityOnHover] = useState(false);
  
  const add = ((rand) => {

    var randColors = ['#d27478','#6d4f80','#f0ec78','#fcdbf6'];
    var backgroundColor = "#fcdbf6";

    if(rand === true){ backgroundColor = randColors[Math.floor(Math.random() * randColors.length)]; }

    var today = new Date();
    var id = today.getTime();
    //Standard object for it to work
    var obj = {
      id:id,
      value:"<p>My description</p>",
      backgroundColor:backgroundColor,
      teste:'',
      position:{x:260,y:35},
      size:{width:206,heigth:203},
      radius:true,
      shadow:true
    };

    setIts([...its,obj]);

  });
   
  
  if(its.length === 0){ 
    
    console.log('Setou inicial');
    setIts([
      { 
        id:'xa1',
        value:"<p>My 1</p>",
        backgroundColor:'#607d8b',
        teste:'',
        position:{x:260,y:35},
        size:{width:206,heigth:203},
        radius:true,
        shadow:true
      },
      {
        id:'xa2',
        value:"<p>My 2</p>",
        backgroundColor:'#f0ec78',
        teste:'',
        position:{x:500,y:35},
        size:{width:206,heigth:203},
        radius:true,
        shadow:true
      },
      { 
        id:'xa3',
        value:"<p>My 3</p>",
        backgroundColor:'#fcdbf6',
        teste:'',
        position:{x:750,y:35},
        size:{width:206,heigth:203},
        radius:true,
        shadow:true
      }
      
    ]);

  }

  
   
  
  return (<div className="app_potit_example">
    
    <button onClick={() => add()}>Add post-it (color Fixed)</button>
    <br/><br/> 
    <button onClick={() => add(true)}>Add post-it (color Random)</button>  <br/> <br/> 


    Show postit:
    <input onClick={(e) => setShow(e.target.checked)} type="checkbox" checked={(show === true ? true:false)}/>

    <br/> <br/> 
    Opacity on hover:
    <input onClick={(e) => setOpacityOnHover(e.target.checked)} type="checkbox" checked={(opacityOnHover === true ? true:false)}/>

    <br/><br/>

    Save:<br/> 
    <textarea value={JSON.stringify(its)} onChange={(e) => {

      try{
        
        var parse = JSON.parse(e.target.value);
        setIts(parse);

      }catch(error){ console.error(error); }

    }}></textarea>
  
    
    <Postit 
    
      onEvent={(event) => {
         
        console.log(event);
        if(event.type !== "delete"){

          var string = JSON.stringify(its);
          var parse = JSON.parse(string);
          parse[event.index][event.prop] = event.value;
          setIts(parse);

        }

        if(event.type === "delete"){

          var string = JSON.stringify(its);
          var parse = JSON.parse(string);
          parse.splice(event.index,1);
          setIts(parse);

        }
        
   
      }} 
      
      data={its} 
      show={show}
      opacityNotHover={(opacityOnHover === true ? 0.5:1)}
    
    />
    
  </div>);

}

export default App;
