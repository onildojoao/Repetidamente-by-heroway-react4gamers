export interface IGameStatusContext {
  steps: number;
  updateSteps: () => void;

  coins: number;
  updateCoins: () => void;

  chests: number;
  updateChests: () => void;

  dead: boolean;
  updateIsDead: () => void;

  winner: boolean;
  updateIsWinner: () => void;
}
