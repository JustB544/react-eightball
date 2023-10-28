import React from 'react';
import './EightBall.css';

function EightBall({answers}) {
  return (
    <div className="EightBall" style={{backgroundColor: answers.color}}>
        <h1>{answers.msg}</h1>
    </div>
  );
}

export default EightBall;
