import './Card.css';
import React from "react";

function Card(props){
    const classess='card '+ props.className;
    return <div className={classess}>
        {props.children}
    </div>
}

export default Card;