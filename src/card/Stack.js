import React from 'react';
import './Stack.css';

function Stack(props) {
    return(
        <div className="Stack">
            {props.children}
        </div>
    )
}

export default Stack;