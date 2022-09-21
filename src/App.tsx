import BoardComponents from "components/BoardComponents";
import { Board } from "models/Board";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }
  return (
    <div className="App">
      <BoardComponents board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
