class Es6RetiredForagerBee extends Es6ForagerBee {
  constructor(name) {
    super(name);
    this.age = 40;
    this.color = 'grey';
    this.job = 'gamble';
    this.canFly = false;
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
}
