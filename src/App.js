import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import Keyboard from "./Components/Keyboard";
import NavBar from "./Components/NavBar";

function App() {
  const [history, setHistory] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [move, setMove] = useState();
  const [idx, setIdx] = useState(0);
  const [row, setRow] = useState(0);
  const [del, setDel] = useState(false);

  // useEffect(() => {
  //   if(del > 0){
  //     //console.log("in del==true");

  //     const temp = history.splice('');
  //     temp[0][idx] = "";

  //     history[0] = temp[0];
  //     console.log(history[0]);

  //     setHistory(history);
  //     console.log(history);

  //     setIdx(idx - 1);
  //     //setDel(false);
  //   }
  
  // }, [del])
  
 
  const render = useRef(false);
  useEffect(() => {
    if (render.current === false){
      render.current = true;
    } else {
      if(idx < 5 && !del){
        const temp = move;
        //console.log(move);

        history[row][idx] = temp;
        console.log(history[row]);

        setHistory(history);
        //console.log(history);
        setIdx(idx + 1);
      } else {

        const temp = move;
        console.log(move);

        history[row][idx-1] = temp;
        console.log(history[row]);

        setHistory(history);
        console.log(history);


        setIdx(idx - 1);
        console.log(idx);
        setDel(false);
      }
    }
  }, [move]);


  return (
    <div className="engine">
      <NavBar />
      <GameBoard move={move} history={history} setHistory={setHistory} />
      <Keyboard
        move={move}
        setMove={setMove}
        setIdx={setIdx}
        idx={idx}
        setDel={setDel}
        del = {del}
        row = {row}
        setRow = {setRow}
      />
    </div>
  );
}

export default App;
