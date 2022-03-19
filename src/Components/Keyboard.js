import React, { useState } from "react";
import { list_of_words } from "../five_letter_words";
import toast from "react-hot-toast";

const keyColorDic = {
  A: "#818384",
  B: "#818384",
  C: "#818384",
  D: "#818384",
  E: "#818384",
  F: "#818384",
  G: "#818384",
  H: "#818384",
  I: "#818384",
  J: "#818384",
  K: "#818384",
  L: "#818384",
  M: "#818384",
  N: "#818384",
  O: "#818384",
  P: "#818384",
  Q: "#818384",
  R: "#818384",
  S: "#818384",
  T: "#818384",
  U: "#818384",
  V: "#818384",
  W: "#818384",
  X: "#818384",
  Y: "#818384",
  Z: "#818384",
};

function Keyboard(props) {
  const [keyColor, setKeyColor] = useState(keyColorDic);
  const [disable, setDisable] = useState(false);

  function getFrequency(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
      var character = string.charAt(i);
      if (freq[character]) {
        freq[character]++;
      } else {
        freq[character] = 1;
      }
    }

    return freq;
  }

  const updateGuess = (guess) => {
    if (guess === props.secretWord) {
      const temp = ["#6aaa64", "#6aaa64", "#6aaa64", "#6aaa64", "#6aaa64"];
      for (let i = 0; i < guess.length; i++) {
        keyColorDic[guess.charAt(i).toUpperCase()] = "#6aaa64";
      }

      props.historyColor[props.row] = temp;
      props.setHistoryColor(props.historyColor);

      setTimeout(function () {
        console.log("HERE");
        setKeyColor(keyColorDic);
      }, 3000);

      toast("Splendid!", {
        duration: 10000,
        id: "copy",
        style: {
          fontFamily: "Clear Sans, Helvetica Neue, Arial, sans-serif",
          fontWeight: "bold",
          padding: "10px",
          color: "#121213",
          marginTop: "80px",
        },
      });
      setDisable(true);
    } else {
      const temp = ["", "", "", "", ""];
      const dic = getFrequency(props.secretWord);
      const equal = [false, false, false, false, false];
      for (let i = 0; i < 5; i++) {
        if (guess.charAt(i) === props.secretWord.charAt(i)) {
          keyColorDic[guess.charAt(i).toUpperCase()] = "#6aaa64";
          dic[guess.charAt(i)]--;
          temp[i] = "#6aaa64";
          equal[i] = true;
        }
      }
      for (let i = 0; i < 5; i++) {
        if (guess.charAt(i) in dic && dic[guess.charAt(i)] > 0) {
          dic[guess.charAt(i)]--;
          if (keyColorDic[guess.charAt(i).toUpperCase()] !== "#6aaa64") {
            keyColorDic[guess.charAt(i).toUpperCase()] = "#c9b458";
          }
          temp[i] = "#c9b458";
        } else {
          if (!equal[i]) {
            if (
              keyColorDic[guess.charAt(i).toUpperCase()] !== "#6aaa64" &&
              keyColorDic[guess.charAt(i).toUpperCase()] !== "#c9b458"
            ) {
              keyColorDic[guess.charAt(i).toUpperCase()] = "#3a3a3c";
            }
            temp[i] = "#3a3a3c";
          }
        }
      }

      props.historyColor[props.row] = temp;
      props.setHistoryColor(props.historyColor);
      setTimeout(function () {
        console.log("HERE");
        setKeyColor(keyColorDic);
      }, 3000);
    }
  };

  const handleEnter = () => {
    if (props.idx === 5) {
      var guess = props.history[props.row].join("");
      guess = guess.toLowerCase();
      if (list_of_words.has(guess)) {
        props.flipped[props.row] = !props.flipped[props.row];
        props.setFlipped(props.flipped);
        updateGuess(guess);

        if (props.row !== 5) {
          props.setRow(props.row + 1);
          props.setIdx(0);
        } else {
          props.setRow(0);
          setDisable(true);
          toast(props.secretWord.toUpperCase(), {
            duration: 10000,
            id: "copy",
            style: {
              fontFamily: "Clear Sans, Helvetica Neue, Arial, sans-serif",
              fontWeight: "bold",
              padding: "10px",
              color: "#121213",
              marginTop: "80px",
            },
          });
        }
      } else {
        toast("Not in word list", {
          duration: 2000,
          id: "copy",
          style: {
            fontFamily: "Clear Sans, Helvetica Neue, Arial, sans-serif",
            fontWeight: "bold",
            padding: "10px",
            color: "#121213",
            marginTop: "80px",
          },
        });
      }
    } else {
      toast("Not enough letters", {
        duration: 2000,
        id: "copy",
        style: {
          fontFamily: "Clear Sans, Helvetica Neue, Arial, sans-serif",
          fontWeight: "bold",
          padding: "10px",
          color: "#121213",
          marginTop: "80px",
        },
      });
    }
  };

  return (
    <div>
      <div className="key_row">
        <button
          className="key"
          value={"Q"}
          onClick={() => {
            props.setMove("Q");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["Q"] }}
          disabled={disable}
        >
          Q
        </button>
        <button
          className="key"
          value={"W"}
          onClick={() => {
            props.setMove("W");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["W"] }}
          disabled={disable}
        >
          W
        </button>
        <button
          className="key"
          value={"E"}
          onClick={() => {
            props.setMove("E");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["E"] }}
          disabled={disable}
        >
          E
        </button>
        <button
          className="key"
          value={"R"}
          onClick={() => {
            props.setMove("R");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["R"] }}
          disabled={disable}
        >
          R
        </button>
        <button
          className="key"
          value={"T"}
          onClick={() => {
            props.setMove("T");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["T"] }}
          disabled={disable}
        >
          T
        </button>
        <button
          className="key"
          value={"Y"}
          onClick={() => {
            props.setMove("Y");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["Y"] }}
          disabled={disable}
        >
          Y
        </button>
        <button
          className="key"
          value={"U"}
          onClick={() => {
            props.setMove("U");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["U"] }}
          disabled={disable}
        >
          U
        </button>
        <button
          className="key"
          value={"I"}
          onClick={() => {
            props.setMove("I");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["I"] }}
          disabled={disable}
        >
          I
        </button>
        <button
          className="key"
          value={"O"}
          onClick={() => {
            props.setMove("O");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["O"] }}
          disabled={disable}
        >
          O
        </button>
        <button
          className="key"
          value={"P"}
          onClick={() => {
            props.setMove("P");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["P"] }}
          disabled={disable}
        >
          P
        </button>
      </div>
      <div className="key_row">
        <button
          className="key"
          onClick={() => {
            props.setMove("A");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["A"] }}
          disabled={disable}
        >
          A
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("S");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["S"] }}
          disabled={disable}
        >
          S
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("D");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["D"] }}
          disabled={disable}
        >
          D
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("F");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["F"] }}
          disabled={disable}
        >
          F
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("G");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["G"] }}
          disabled={disable}
        >
          G
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("H");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["H"] }}
          disabled={disable}
        >
          H
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("J");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["J"] }}
          disabled={disable}
        >
          J
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("K");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["K"] }}
          disabled={disable}
        >
          K
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("L");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["L"] }}
          disabled={disable}
        >
          L
        </button>
      </div>
      <div className="key_row">
        <button
          className="big_key"
          onClick={() => {
            handleEnter();
          }}
          disabled={disable}
        >
          ENTER
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("Z");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["Z"] }}
          disabled={disable}
        >
          Z
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("X");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["X"] }}
          disabled={disable}
        >
          X
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("C");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["C"] }}
          disabled={disable}
        >
          C
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("V");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["V"] }}
          disabled={disable}
        >
          V
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("B");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["B"] }}
          disabled={disable}
        >
          B
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("N");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["N"] }}
          disabled={disable}
        >
          N
        </button>
        <button
          className="key"
          onClick={() => {
            props.setMove("M");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          style={{ backgroundColor: keyColor["M"] }}
          disabled={disable}
        >
          M
        </button>
        <button
          className="big_key"
          onClick={() => {
            props.setDel(true);
            props.setMove("");
            props.setMoveCounter(props.moveCounter + 1);
          }}
          disabled={disable}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
