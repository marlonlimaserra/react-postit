import React from 'react';

function DeletePostit(props){
   
  return (
  <div className="deletePostit">
    <div className="deletePostitInternal">
        <div className="tittleDelete_postit">Deseja mesmo deletar?</div>
        <div className="bts_delete_postit">
            <button onClick={() => { props.close(); }}>Não</button>
            <button onClick={() => { props.delete(); }}>Sim</button>
        </div>
    </div>
  </div>);

}

export default DeletePostit;
