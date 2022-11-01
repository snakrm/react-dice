import React from "react";

import { reset, rollTheDice } from "./Functions";

export default function Page() {
  return (
    <div>
      <div className=" w-screen bg-black first text-white ">
        <h1 className="font-mono text-6xl">Start Rolling</h1>
        <div className="flex ">
          <div className="pl-96 dice">
            <p className="pl-24 pt-10 pb-5 Player1">Player 1</p>
            <img className="img1" src="/dice6.jpeg" />
          </div>

          <div className="dice">
            <p className="pl-24 pt-10 pb-5 Player2">Player 2</p>
            <img className="img2" src="/dice6.jpeg" />
          </div>
        </div>

        <div className="flex justify-center mt-10 bg-blue-200 ">
          <div className="pr-40 pb-10 pt-5 text-3xl text-black score1">
            <p id="score1">score : 0</p>
          </div>
          <br />
          <div className="pr-10 pb-10 pt-5 text-3xl score1 text-black">
            <p id="score2">score : 0</p>
          </div>
        </div>

        <p className="font-mono text-5xl pt-5" id="result">
          let's start
        </p>

        <button
          type="button"
          className="bg-white text-black px-8 py-3 mt-10 rounded btn1"
          id="btn1"
          onClick={rollTheDice}
        >
          Roll the Dice
        </button>

        <div className="">
          <button
            type="button"
            className="bg-white text-black px-8 py-3 mt-8 mb-10 rounded btn"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
