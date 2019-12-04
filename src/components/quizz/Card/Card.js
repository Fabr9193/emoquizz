import React from 'react';
//import image from '';
import back from '../../../back.svg';
import next from '../../../next.svg';
import genImg from '../genImg';
import './Card.css';

function Card(props) {
  const img = genImg; // get the image from a bank 
  const isLeftOrRight = props.isLeftOrRight;
  const correct = this.state.correct;
  return (
    <div className="Card">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={img} alt="Emotion"/> 
          <img className="flex justify-center mx-auto p-2 mt-2" src={isLeftOrRight='left' ? back : next } width="50" height="50" alt="left"/>
        </div>
    </div>
  );
}

export default Card;
