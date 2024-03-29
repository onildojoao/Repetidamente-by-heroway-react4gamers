import React, { useContext } from 'react';
import { GameStatusContext } from '../../../../contexts/gameStatus';

function GameStatus() {
  const { steps, coins, chests, dead, winner } = useContext(GameStatusContext);

  function reload() {
    window.location.reload();
  }

  function resetGame(message: string) {
    setTimeout(() => {
      alert(message);
      reload();
    });
  }

  if (dead) {
    resetGame('Você perdeu!');
  }

  if (winner) {
    resetGame('Você ganhou!');
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          paddingRight: 10,
          borderRight: '2px solid white',
          color: 'white',
          fontSize: 25,
        }}
      >
        Passos: {steps}
      </span>

      <span
        style={{
          paddingLeft: 15,
          paddingRight: 10,
          borderRight: '2px solid white',
          color: 'white',
          fontSize: 25,
        }}
      >
        Moedas: {coins}
      </span>

      <span
        style={{
          paddingLeft: 15,
          paddingRight: 10,
          borderRight: '2px solid white',
          color: 'white',
          fontSize: 25,
        }}
      >
        Baús: {chests}
      </span>

      <button
        style={{
          color: 'white',
          fontSize: 25,
          marginLeft: 10,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={reload}
      >
        ⟳
      </button>
    </div>
  );
}

export default React.memo(GameStatus);
