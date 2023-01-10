class Coffee extends Beverage {
  constructor(size, temperature, hasCaffeine, howYouTakeIt) {
    super(size, temperature);
    this.hasCaffeine = hasCaffeine;
    this.howYouTakeIt = howYouTakeIt;
  }
}
