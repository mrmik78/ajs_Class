import Undead from '../undead';

test('create the character "Undead"', () => {
    const player = new Undead('player');
    expect(player).toEqual(
      {
        name: 'player',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
    );
  });