class Coffee extends Beverage {
  constructor(size, temperature, hasCaffeine, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
  }
  drink() {
    if (this.temperature != 'scalding') {
      console.log('now drinking coffee');
    }
  }
}
