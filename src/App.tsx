import { Board } from "models/Board";
import BoardComponent from "components/BoardComponent";
import { Colors } from "models/Color";
import { Player } from "models/Player";
import { useState, useEffect } from "react";
import "./App.css";
import LostFigures from "components/LostFigures";
import Timer from "components/Timer";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);
  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }
  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }
  return (
    <div className="App">
      <Timer currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        swapPlayer={swapPlayer}
        currentPlayer={currentPlayer}
      />
      <div>
        <LostFigures title="Black figures" figures={board.lostBlackFigures} />
      </div>
      <div>
        <LostFigures title="White figures" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
};

export default App;
