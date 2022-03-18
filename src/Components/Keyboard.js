import React from "react";
import {list_of_words} from "../five_letter_words";

function Keyboard(props) {
  const handleEnter = () => {
    if(props.idx === 5){
      var guess = props.history[props.row].join('');
      guess = guess.toLowerCase();
      if(list_of_words.has(guess)){
        props.setRow(props.row + 1);
        props.setIdx(0);
        console.log('valid guess')
      } else {
        alert("Invalid Guess, not a word in the set!")
      }
    } else {
      alert("Not enough letters!")
    }
  }

  return (
    <div>
      <div className="key_row">
        <button
          className="key"
          value={"Q"}
          onClick={() => {
            //console.log("Q");
            props.setMove('Q');
          }}
        >
          Q
        </button>
        <button
          className="key"
          value={"W"}
          onClick={() => {
            //console.log("W");
            props.setMove('W');
          }}
        >
          W
        </button>
        <button
          className="key"
          value={"E"}
          onClick={() => {
            //console.log("E");
            props.setMove('E');
          }}
        >
          E
        </button>
        <button
          className="key"
          value={"R"}
          onClick={() => {
            //console.log("R");
            props.setMove('R');
          }}
        >
          R
        </button>
        <button
          className="key"
          value={"T"}
          onClick={() => {
            //console.log("T");
            props.setMove('T');
          }}
        >
          T
        </button>
        <button
          className="key"
          value={"Y"}
          onClick={() => {
            //console.log("Y");
            props.setMove('Y');
          }}
        >
          Y
        </button>
        <button
          className="key"
          value={"U"}
          onClick={() => {
            //console.log("U");
            props.setMove('U');
          }}
        >
          U
        </button>
        <button
          className="key"
          value={"I"}
          onClick={() => {
            //console.log("I");
            props.setMove('I');
          }}
        >
          I
        </button>
        <button
          className="key"
          value={"O"}
          onClick={() => {
            //console.log("O");
            props.setMove('O');
          }}
        >
          O
        </button>
        <button
          className="key"
          value={"P"}
          onClick={() => {
            //console.log("P");
            props.setMove('P');
          }}
        >
          P
        </button>
      </div>
      <div className="key_row">
        <button
          className="key"
          onClick={() => {
            console.log("A");
            props.setMove('A');
          }}
        >
          A
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("S");
            props.setMove('S');
          }}
        >
          S
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("D");
            props.setMove('D');
          }}
        >
          D
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("F");
            props.setMove('F');
          }}
        >
          F
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("G");
            props.setMove('G');
          }}
        >
          G
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("H");
            props.setMove('H');
          }}
        >
          H
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("J");
            props.setMove('J');
          }}
        >
          J
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("K");
            props.setMove('K');
          }}
        >
          K
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("L");
            props.setMove('L');
          }}
        >
          L
        </button>
      </div>
      <div className="key_row">
        <button
          className="big_key"
          onClick={() => {
            console.log("Enter");
            handleEnter();
          }}
        >
          ENTER
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("Z");
            props.setMove('Z');
          }}
        >
          Z
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("X");
            props.setMove('X');
          }}
        >
          X
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("C");
            props.setMove('C');
          }}
        >
          C
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("V");
            props.setMove('V');
          }}
        >
          V
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("B");
            props.setMove('B');
          }}
        >
          B
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("N");
            props.setMove('N');
          }}
        >
          N
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("M");
            props.setMove('M');
          }}
        >
          M
        </button>
        <button
          className="big_key"
          onClick={() => {
            console.log("Delete");
            //props.setIdx(props.idx - 1);

            props.setDel(true);
            props.setMove('');
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
