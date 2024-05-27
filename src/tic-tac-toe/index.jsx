import useTicTacToe from "./useTicTacToe";
import "./style.css";

const TicTacToe = () => {
  const buttons = Array.from(new Array(9));

  const {
    handalRestart,
    handalTurn,
    wonMessage,
    palyerTurn,
    activePalyer,
    Palyers,
    PlayerIcon,
  } = useTicTacToe();

  return (
    <div className="tic-tac-toe">
      {buttons.map((item, index) => {
        const otherPlayer = activePalyer === Palyers.A ? Palyers.B : Palyers.A;
        const carrentPlayetTruns = palyerTurn[activePalyer];
        const otherPlayerTruns = palyerTurn[otherPlayer];

        let icon = "";

        if (carrentPlayetTruns.join("").includes(String(index))) {
          icon = PlayerIcon[activePalyer];
        } else if (otherPlayerTruns.join("").includes(String(index))) {
          icon = PlayerIcon[otherPlayer];
        }

        return (
          <button onClick={handalTurn(index)} key={index}>
            {icon}
          </button>
        );
      })}

      {wonMessage && (
        <div className="message">
          <h3>{wonMessage}</h3>
          <button onClick={handalRestart}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
