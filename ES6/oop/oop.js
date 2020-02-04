class Rabbit{
  constructor(name,type){
    this.name = name;
    this.type = type;
  }

  // Methods

  info(){
    console.log("The name of the rabbit is ",this.name," And its type is ", this.type);
  }
}

// calling constructor

let r1 = new Rabbit("Suzan","Hybrid");

r1.info();

// Overriding derived properties

r1.name = "Ram";
r1.type = "Local";

r1.info();
