import React from "react";


 const Tech = props => {
     return (
        <div>
            <div onClick={()=> {props.handleClick(props.id)}} id={props.id} >
            <img src={props.src} />
            
            </div>
        </div>
     );
 } 
 export default Tech;