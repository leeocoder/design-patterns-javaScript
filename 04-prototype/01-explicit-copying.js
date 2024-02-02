class Address {
  constructor(street, city, state, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

  deepCopy() {
    return new Address(this.street, this.city, this.state, this.zip);
  }

  toString() {
    return `${this.street}, ${this.city}, ${this.state}, ${this.zip}`;
  }
}

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  deepCopy() {
    return new Person(this.name, this.age, this.address);
  }

  toString() {
    return `${this.name}, ${this.age}, ${this.address.deepCopy()}`;
  }
}

const john = new Person(
  "John",
  21,
  new Address("Rua de Teste", "Rua de Teste", "Estado de Teste", 77900000)
);

const jane = john.deepCopy();

jane.name = "Jane";
jane.address.street = "Outra Rua";
console.log(john);
console.log(jane);