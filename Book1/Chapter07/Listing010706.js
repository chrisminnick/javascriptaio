function Vehicle(speed) {
  this.speed = speed;
  this.moveForward = function () {
    return `Moving forward at ${this.speed}`;
  };
}
