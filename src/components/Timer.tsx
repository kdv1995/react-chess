import { Colors } from "models/Color";
import { Player } from "models/Player";
import { FC, useRef, useState, useEffect } from "react";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}
const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setblackTime] = useState(300);
  const [whiteTime, setwhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);
  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }
  function decrementBlackTimer() {
    setblackTime((prev) => prev - 1);
  }
  function decrementWhiteTimer() {
    setwhiteTime((prev) => prev - 1);
  }
  const handleRestart = () => {
    setwhiteTime(300);
    setblackTime(300);
    restart();
  };
  return (
    <div>
      <div>
        <button
          style={{ padding: 15, background: "green" }}
          type="button"
          onClick={handleRestart}
        >
          Restart game
        </button>
      </div>
      <h2>Black -{blackTime}</h2>
      <h2>White -{whiteTime}</h2>
    </div>
  );
};

export default Timer;
