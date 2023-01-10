class Beverage {
  constructor(size, temperature) {
    this.size = size;
    this.temperature = temperature;
  }
  drink() {
    if (this.temperature !== 'scalding') {
      console.log('now drinking');
    }
  }
}
