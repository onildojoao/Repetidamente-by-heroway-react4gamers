import React, { createContext, PropsWithChildren, useState } from 'react';
import { IGameStatusContext } from './types';

export const GameStatusContext = createContext<IGameStatusContext>({
  steps: 60,
  updateSteps: () => null,

  coins: 0,
  updateCoins: () => null,

  dead: false,
  updateIsDead: () => null,

  winner: false,
  updateIsWinner: () => null,
});

function GameStatusProvider(props: PropsWithChildren<{}>) {
  const [gameState, setGameState] = useState<IGameStatusContext>({
    steps: 60,
    updateSteps: () => {
      setGameState(prevState => {
        const remainingSteps = prevState.steps - 1;

        return {
          ...prevState,
          steps: remainingSteps,
          dead: remainingSteps === -1,
        }
      });
    },

coins: 0,
updateCoins:() => {
  setGameState(prevState => ({ ...prevState, coins: prevState.coins + 1 }));
},

    dead: false,
    updateIsDead: () => {
      setGameState(prevState => ({ ...prevState, dead: true }));
    },

    winner: false,
    updateIsWinner: () => {
      setGameState(prevState => ({ ...prevState, winner: true }));
    },
  });

  return <GameStatusContext.Provider value={gameState}>{props.children}</GameStatusContext.Provider>;
}

export default GameStatusProvider;
