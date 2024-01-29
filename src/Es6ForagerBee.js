class Es6ForagerBee extends Es6Bee {
  constructor (name) {
    super(name);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}


