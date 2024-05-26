import { useState } from "react";
import "./style.css";

const Palyers = {
  A: 0,
  B: 1,
};

const PlayerIcon = {
  [Palyers.A]: "X",
  [Palyers.B]: "O",
};

const DefoultRutn = {
  [Palyers.A]: [],
  [Palyers.B]: [],
};

const TicTacToe = () => {
  const [activePalyer, setActivePalyer] = useState(Palyers.A);
  const [palyerTurn, setPlayarTurn] = useState(structuredClone(DefoultRutn));

  const buttons = Array.from(new Array(9));

  function handalTurn(index) {
    return () => {
      const newPlayr = activePalyer === Palyers.A ? Palyers.B : Palyers.A;

      const palyerATruns = palyerTurn[Palyers.A];
      const palyerBTruns = palyerTurn[Palyers.B];

      if (palyerATruns.join("").includes(String(index))) {
        return;
      } else if (palyerBTruns.join("").includes(String(index))) {
        return;
      }

      const oldPlayerTurns = structuredClone(palyerTurn);

      oldPlayerTurns[activePalyer].push(String(index));
      setPlayarTurn(oldPlayerTurns);

      setActivePalyer(newPlayr);
    };
  }

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
            {index}
          </button>
        );
      })}
    </div>
  );
};

export default TicTacToe;
