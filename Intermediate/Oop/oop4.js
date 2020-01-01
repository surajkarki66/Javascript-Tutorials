//  property getters and setters

class Temperature{
  constructor(celsius){
    this.celsius = celsius;
  }

  get fahrenheit(){  //getters
    return this.celsius * 1.8 +32;
  }

  set fahrenheit(value){ //setters
    this.celsius = (value-32) /1.8;
  }

  static fromFahrenheit(value){
    return new Temperature((value-32) / 1.8);

  }


}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 28;
console.log(temp.fahrenheit);
// to celsius
console.log(temp.celsius)
