import React from 'react';
import './logospace.css';

function Logospace (props) {
    return (
        <div onClick={() => props.guessHandler(props.id)} key={props.id} className="logos">
     
     <img src={props.image} alt={props.name}></img>
     </div>
    );  
}


export default Logospace;