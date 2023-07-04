import Zombie from '../zombie';

test('create the character "Zombie"', () => {
    const player = new Zombie('player');
    expect(player).toEqual(
      {
        name: 'player',
        type: 'Zombie',
  
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
      },
    );
  });
  