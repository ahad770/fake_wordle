import React from "react";
import LetterBox from "./LetterBox";

function GameBoard(props) {  

  return (
    <div className="board">
      {/* {console.log(props.history)} */}
      <div className="row">
        <LetterBox letter={props.history[0][0]} color={props.historyColor[0][0]}/>
        <LetterBox letter={props.history[0][1]} color={props.historyColor[0][1]}/>
        <LetterBox letter={props.history[0][2]} color={props.historyColor[0][2]}/>
        <LetterBox letter={props.history[0][3]} color={props.historyColor[0][3]}/>
        <LetterBox letter={props.history[0][4]} color={props.historyColor[0][4]}/>
      </div>
      <div className="row">
        <LetterBox letter={props.history[1][0]} color={props.historyColor[1][0]}/>
        <LetterBox letter={props.history[1][1]} color={props.historyColor[1][1]}/>
        <LetterBox letter={props.history[1][2]} color={props.historyColor[1][2]}/>
        <LetterBox letter={props.history[1][3]} color={props.historyColor[1][3]}/>
        <LetterBox letter={props.history[1][4]} color={props.historyColor[1][4]}/>
      </div>
      <div className="row">
        <LetterBox letter={props.history[2][0]} color={props.historyColor[2][0]}/>
        <LetterBox letter={props.history[2][1]} color={props.historyColor[2][1]}/>
        <LetterBox letter={props.history[2][2]} color={props.historyColor[2][2]}/>
        <LetterBox letter={props.history[2][3]} color={props.historyColor[2][3]}/>
        <LetterBox letter={props.history[2][4]} color={props.historyColor[2][4]}/>
      </div>
      <div className="row">
        <LetterBox letter={props.history[3][0]} color={props.historyColor[3][0]}/>
        <LetterBox letter={props.history[3][1]} color={props.historyColor[3][1]}/>
        <LetterBox letter={props.history[3][2]} color={props.historyColor[3][2]}/>
        <LetterBox letter={props.history[3][3]} color={props.historyColor[3][3]}/>
        <LetterBox letter={props.history[3][4]} color={props.historyColor[3][4]}/>
      </div>
      <div className="row">
        <LetterBox letter={props.history[4][0]} color={props.historyColor[4][0]}/>
        <LetterBox letter={props.history[4][1]} color={props.historyColor[4][1]}/>
        <LetterBox letter={props.history[4][2]} color={props.historyColor[4][2]}/>
        <LetterBox letter={props.history[4][3]} color={props.historyColor[4][3]}/>
        <LetterBox letter={props.history[4][4]} color={props.historyColor[4][4]}/>
      </div>
      <div className="row">
        <LetterBox letter={props.history[5][0]} color={props.historyColor[5][0]}/>
        <LetterBox letter={props.history[5][1]} color={props.historyColor[5][1]}/>
        <LetterBox letter={props.history[5][2]} color={props.historyColor[5][2]}/>
        <LetterBox letter={props.history[5][3]} color={props.historyColor[5][3]}/>
        <LetterBox letter={props.history[5][4]} color={props.historyColor[5][4]}/>
      </div> 
    </div>
  );
}

export default GameBoard;
