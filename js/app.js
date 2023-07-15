'use strict';

void (function () {
  const playerSet = new WeakSet();

  const player1 = { id: 1, name: 'Ivan', level: 10 };
  const player2 = { id: 1, name: 'Stepan', level: 7 };
  const player3 = { id: 1, name: 'Ruslan', level: 11 };

  const addPlayerToLevelSet = (player) => {
    if (player.level < 10) return;

    playerSet.add(player);
  };

  addPlayerToLevelSet(player1);
  addPlayerToLevelSet(player2);
  addPlayerToLevelSet(player3);
  addPlayerToLevelSet(player1);
})();
