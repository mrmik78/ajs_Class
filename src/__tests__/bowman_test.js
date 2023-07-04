import Bowman from '../bowman';

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
