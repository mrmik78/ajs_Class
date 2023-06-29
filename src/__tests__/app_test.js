import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('create the character "Bowman"', () => {
  const player = new Bowman('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check "Bowman" error name', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const player = new Bowman('p');
  }).toThrowError('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
});

test('create the character "Daemon"', () => {
  const player = new Daemon('player');
  expect(player).toEqual(
    {
      name: 'player',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

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
