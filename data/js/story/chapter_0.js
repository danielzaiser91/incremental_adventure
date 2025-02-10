import { popover } from '../ui_layer/popover.js';
import { Player } from '../core/player.js';

/**
 * 
 * @param {Player} player 
 */
export function init_chapter_0(player) {
  const title = 'Welcome Adventurer!';
  const text1 = '...well, actually you are not an adventurer yet.';
  const text2 = 'You are a lowborn peasant. Raised in poverty';

  // you dream of becoming strong and famous.
  const text3 = 'Now that you are old enough, you left your parents home, and your';

  const actions = choice([
    ['You are a lowborn peasant. Raised in poverty, used to hard labor. (Strength + 1)', () => player.strength.base++]
  ])
  popover({ title, text1, actions });
}
