import { Strength } from './strength.js';

const PlayerState = {
  /** @type {Player} */
  player: undefined,
}

export function init_player() {
  PlayerState.player = new Player();
}

export class Player {
  strength = new Strength();
}
