import React, {Fragment} from "react";


 const Tech = props => {
    //  console.log(props);
     return (
        <div>
            <div onClick={()=> {props.handleClick(props.id)}} id={props.id} >
            <img src={props.src} />
            
            </div>
        </div>
     );
 } 
 export default Tech;