import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import Keyboard from "./Components/Keyboard";
import NavBar from "./Components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
  const [secretWord, setSecretWord] = useState("thing");
  const [historyColor, setHistoryColor] = useState([
    ["#121213", "#121213", "#121213", "#121213", "#121213"],
    ["#121213", "#121213", "#121213", "#121213", "#121213"],
    ["#121213", "#121213", "#121213", "#121213", "#121213"],
    ["#121213", "#121213", "#121213", "#121213", "#121213"],
    ["#121213", "#121213", "#121213", "#121213", "#121213"],
    ["#121213", "#121213", "#121213", "#121213", "#121213"],
  ]);
  const [history, setHistory] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [move, setMove] = useState();
  const [moveCounter, setMoveCounter] = useState(0);
  const [idx, setIdx] = useState(0);
  const [row, setRow] = useState(0);
  const [del, setDel] = useState(false);

  const render = useRef(false);
  useEffect(() => {
    if (render.current === false) {
      render.current = true;
    } else {
      if (idx < 5 && !del) {
        const temp = move;
        //console.log(move);

        history[row][idx] = temp;
        //console.log(history[row]);

        setHistory(history);
        //console.log(history);
        setIdx(idx + 1);
      } else {
        //if (idx - 1 > 0) {
        const temp = move;
        //console.log(move);

        history[row][idx - 1] = temp;
        //console.log(history[row]);

        setHistory(history);
        //console.log(history);

        setIdx(idx - 1);
        //console.log(idx);
        setDel(false);
        //}
      }
    }
  }, [moveCounter]);

  return (
    <div className="engine">
    
      <NavBar />
      <GameBoard
        move={move}
        history={history}
        setHistory={setHistory}
        historyColor={historyColor}
      />
      <Keyboard
        moveCounter={moveCounter}
        setMoveCounter={setMoveCounter}
        move={move}
        setMove={setMove}
        setIdx={setIdx}
        idx={idx}
        setDel={setDel}
        del={del}
        row={row}
        setRow={setRow}
        history={history}
        secretWord={secretWord}
        historyColor={historyColor}
        setHistoryColor={setHistoryColor}
      />
      <Toaster/>
    </div>
  );
}

export default App;
