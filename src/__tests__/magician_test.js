import Magician from '../magician';

test('create the character "Magician"', () => {
    const player = new Magician('player');
    expect(player).toEqual(
      {
        name: 'player',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
      },
    );
  });