import Daemon from '../daemon';

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
