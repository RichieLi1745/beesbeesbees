class Es6HoneyMakerBee extends Es6Bee {
  constructor(name) {
    super(name);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
}


