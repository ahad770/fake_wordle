import React from "react";

function Keyboard(props) {
  return (
    <div>
      {console.log(props.del)}
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
          }}
        >
          A
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("S");
          }}
        >
          S
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("D");
          }}
        >
          D
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("F");
          }}
        >
          F
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("G");
          }}
        >
          G
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("H");
          }}
        >
          H
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("J");
          }}
        >
          J
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("K");
          }}
        >
          K
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("L");
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
            if(props.idx === 5){
              props.setRow(props.row + 1);
              props.setIdx(0);
            } else {
              alert("Not enough letters!")
            }
          }}
        >
          ENTER
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("Z");
          }}
        >
          Z
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("X");
          }}
        >
          X
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("C");
          }}
        >
          C
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("V");
          }}
        >
          V
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("B");
          }}
        >
          B
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("N");
          }}
        >
          N
        </button>
        <button
          className="key"
          onClick={() => {
            console.log("M");
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
