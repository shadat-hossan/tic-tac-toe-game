import { useState } from "react";


const WinningPartterns = [
    "012",
    "345",
    "678",
    "036",
    "147",
    "258",
    "048",
    "246",
];

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




function useTicTacToe() {
    const [activePalyer, setActivePalyer] = useState(Palyers.A);
    const [palyerTurn, setPlayarTurn] = useState(structuredClone(DefoultRutn));
    const [wonMessage, setWonMessage] = useState("");

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

            const isWon = isPlayerWon(oldPlayerTurns[activePalyer]);
            if (isWon) {
                setWonMessage(`Player ${activePalyer} Won The Game`);
            }

            setPlayarTurn(oldPlayerTurns);
            setActivePalyer(newPlayr);
        };
    }

    function handalRestart() {
        setPlayarTurn(DefoultRutn);
        setActivePalyer(Palyers.A);
        setWonMessage("");
    }

    function isPlayerWon(truns) {
        const trunInSort = truns.sort().join("");
        const isWon = WinningPartterns.some((t) => morStrick(t, trunInSort));

        return isWon;
    }

    function morStrick(singalPartan, trunInSort) {
        return singalPartan.split("").every((p) => trunInSort.includes(p));
    }



    return { handalRestart, handalTurn, wonMessage, palyerTurn, activePalyer, Palyers, PlayerIcon };

}


export default useTicTacToe