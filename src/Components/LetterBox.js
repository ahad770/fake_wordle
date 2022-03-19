import React from "react";
import ReactCardFlip from "react-card-flip";

function LetterBox(props) {
  return (
    <ReactCardFlip isFlipped={props.flipped} flipDirection="vertical">
      <div className="square" style={{ backgroundColor: "#121213" }}>
        <h1 style={{ backgroundColor: "#121213" }}>{props.letter}</h1>
      </div>
      <div
        className="square"
        style={{ backgroundColor: props.color, borderColor: props.color }}
      >
        <h1 style={{ backgroundColor: props.color }}>{props.letter}</h1>
      </div>
    </ReactCardFlip>
  );
}

export default LetterBox;
