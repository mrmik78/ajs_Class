import Swordsman from '../swordsman';

test('create the character "Swordsman"', () => {
    const player = new Swordsman('player');
    expect(player).toEqual(
      {
        name: 'player',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    );
  });