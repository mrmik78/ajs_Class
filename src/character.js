export default class Character {
  constructor(name, type) {
    // eslint-disable-next-line no-empty
    if (typeof name === 'string' && name.length > 2 && name.length < 10) {
    } else {
      throw new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
