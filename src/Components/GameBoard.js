import React, { useEffect, useRef, useState } from "react";
import LetterBox from "./LetterBox";

function GameBoard(props) {  

  return (
    <div className="board">
      {/* {console.log(props.history)} */}
      <div className="row">
        <LetterBox letter={props.history[0][0]} />
        <LetterBox letter={props.history[0][1]} />
        <LetterBox letter={props.history[0][2]} />
        <LetterBox letter={props.history[0][3]} />
        <LetterBox letter={props.history[0][4]} />
      </div>
      <div className="row">
        <LetterBox letter={props.history[1][0]} />
        <LetterBox letter={props.history[1][1]} />
        <LetterBox letter={props.history[1][2]} />
        <LetterBox letter={props.history[1][3]} />
        <LetterBox letter={props.history[1][4]} />
      </div>
      <div className="row">
        <LetterBox letter={props.history[2][0]} />
        <LetterBox letter={props.history[2][1]} />
        <LetterBox letter={props.history[2][2]} />
        <LetterBox letter={props.history[2][3]} />
        <LetterBox letter={props.history[2][4]} />
      </div>
      <div className="row">
        <LetterBox letter={props.history[3][0]} />
        <LetterBox letter={props.history[3][1]} />
        <LetterBox letter={props.history[3][2]} />
        <LetterBox letter={props.history[3][3]} />
        <LetterBox letter={props.history[3][4]} />
      </div>
      <div className="row">
        <LetterBox letter={props.history[4][0]} />
        <LetterBox letter={props.history[4][1]} />
        <LetterBox letter={props.history[4][2]} />
        <LetterBox letter={props.history[4][3]} />
        <LetterBox letter={props.history[4][4]} />
      </div>
      <div className="row">
        <LetterBox letter={props.history[0][0]} />
        <LetterBox letter={props.history[0][1]} />
        <LetterBox letter={props.history[0][2]} />
        <LetterBox letter={props.history[0][3]} />
        <LetterBox letter={props.history[0][4]} />
      </div>
    </div>
  );
}

export default GameBoard;
