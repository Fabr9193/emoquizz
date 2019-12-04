import React from 'react';
import './Quizz.css';
import Card from './Card/'

function Quizz() {
  return (
    <div className="mt-5 mx-auto flex items-center justify-between w-full flex-col md:flex-row">
    <Card></Card>
    <div className="hidden md:block text-black text-3xl">OR</div>
    <Card></Card>
    </div>
  );
}

export default Quizz;
