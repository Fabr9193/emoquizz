import React from 'react';
import back from '../../back.svg';
import next from '../../next.svg';
import './Gitui.css';

function Gitui() {
  return (
    <div className="Gitui container mx-auto mt-10 ">  
    <div className="text-black text-3xl font-bold">Which Picture is FEAR ?</div>
      <div className="mt-5 mx-auto flex items-center justify-between w-full flex-col md:flex-row">
        <div className="max-w-sm rounded overflow-hidden shadow-lg quizz-card">
          <img className="w-full" src="https://fakeimg.pl/350x400/" alt="Sunset in the mountains"/>
          <img className="flex justify-center mx-auto p-2 mt-2" src={back} width="50" height="50" alt="left"/>
        </div>
        <div className="hidden md:block text-black text-3xl">OR</div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg quizz-card">
          <img className="w-full" src="https://fakeimg.pl/350x400/" alt="Sunset in the mountains"/>
          <img className="flex justify-center mx-auto p-2 mt-2" src={next} width="50" height="50" alt="left"/>
        </div>
      </div>
    </div>
  );
}

export default Gitui;
