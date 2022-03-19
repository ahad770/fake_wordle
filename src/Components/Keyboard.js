import React from "react";
import {list_of_words} from "../five_letter_words";
import toast from 'react-hot-toast';

function Keyboard(props) {
  function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};

  const updateGuess = (guess) => {
    if(guess === props.secretWord){
      const temp = ['#6aaa64', '#6aaa64', '#6aaa64', '#6aaa64', '#6aaa64']
      props.historyColor[props.row] = temp;
      props.setHistoryColor(props.historyColor);
      toast("Splendid!")

    } else {
      const temp = ['','','','',''];
      const dic = getFrequency(props.secretWord);
      const equal = [false, false, false, false, false];
      for(let i = 0; i < 5; i++){
        if(guess.charAt(i) === props.secretWord.charAt(i)){
          dic[guess.charAt(i)]--;
          temp[i] = '#6aaa64';
          equal[i] = true;
        }
      }
      for(let i = 0; i < 5; i++){
        if(guess.charAt(i) in dic && dic[guess.charAt(i)] > 0){
          dic[guess.charAt(i)]--;
          temp[i] = '#c9b458';
        } else {
          if(!equal[i]) {
            temp[i] = '#3a3a3c';
          }
        }
      }
      props.historyColor[props.row] = temp;
      props.setHistoryColor(props.historyColor);
    }
  }

  const handleEnter = () => {
    if(props.idx === 5){
      var guess = props.history[props.row].join('');
      guess = guess.toLowerCase();
      if(list_of_words.has(guess)){
        props.setRow(props.row + 1);
        props.setIdx(0);
        console.log('valid guess')
        updateGuess(guess);
        // Figure which spots have colors

      } else {
        toast("Invalid Guess, not a word in the set!")
      }
    } else {
      toast("Not enough letters!", {
        duration: 1000,
        id: "copy",
        style: {
          border: '1px solid #713200',
          padding: '5px',
          color: '#713200',
          marginTop: '80px'
        }
      });
      
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          A
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("S");
            props.setMove('S');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          S
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("D");
            props.setMove('D');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          D
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("F");
            props.setMove('F');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          F
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("G");
            props.setMove('G');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          G
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("H");
            props.setMove('H');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          H
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("J");
            props.setMove('J');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          J
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("K");
            props.setMove('K');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          K
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("L");
            props.setMove('L');
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          Z
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("X");
            props.setMove('X');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          X
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("C");
            props.setMove('C');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          C
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("V");
            props.setMove('V');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          V
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("B");
            props.setMove('B');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          B
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("N");
            props.setMove('N');
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          N
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("M");
            props.setMove('M');
            props.setMoveCounter(props.moveCounter + 1);
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
            props.setMoveCounter(props.moveCounter + 1);
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
