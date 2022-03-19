import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import Keyboard from "./Components/Keyboard";
import NavBar from "./Components/NavBar";
import { list_of_words } from "./five_letter_words";
import { Toaster } from "react-hot-toast";

const initHistoryColor = [
  ["#121213", "#121213", "#121213", "#121213", "#121213"],
  ["#121213", "#121213", "#121213", "#121213", "#121213"],
  ["#121213", "#121213", "#121213", "#121213", "#121213"],
  ["#121213", "#121213", "#121213", "#121213", "#121213"],
  ["#121213", "#121213", "#121213", "#121213", "#121213"],
  ["#121213", "#121213", "#121213", "#121213", "#121213"],
];

const initHistory = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function getRandomItem(set) {
  let items = Array.from(set);
  return items[Math.floor(Math.random() * items.length)];
}

function App() {
  const [flipped, setFlipped] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [secretWord, setSecretWord] = useState(getRandomItem(list_of_words));
  const [historyColor, setHistoryColor] = useState(initHistoryColor);
  const [history, setHistory] = useState(initHistory);
  const [move, setMove] = useState();
  const [moveCounter, setMoveCounter] = useState(0);
  const [idx, setIdx] = useState(0);
  const [row, setRow] = useState(0);
  const [del, setDel] = useState(false);

  const render = useRef(false);
  useEffect(() => {
    if (render.current === false) {
      console.log(secretWord);
      render.current = true;
    } else {
      if (idx < 5 && !del) {
        const temp = move;
        history[row][idx] = temp;
        setHistory(history);
        setIdx(idx + 1);
      } else {
        if(idx !== 0){
          const temp = move;
          history[row][idx - 1] = temp;
          setHistory(history);
          setIdx(idx - 1);
        }
        setDel(false);
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
        flipped={flipped}
        row={row}
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
        flipped={flipped}
        setFlipped={setFlipped}
      />
      <Toaster />
    </div>
  );
}

export default App;
