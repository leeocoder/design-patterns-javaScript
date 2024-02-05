class Address {
  constructor(street, city, state, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
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

  greet() {
    console.log(
      `Hello, my name is ${this.name}, and I live at ${this.address.toString()}`
    );
  }

  toString() {
    return `${this.name}, ${this.age}, ${this.address.deepCopy()}`;
  }
}

class Serializer
{
  constructor(types){
    this.types = types;
  }

  markRecursive(object)
  {
    let idx = this.types.findIndex(t => {
      return t.name === object.constructor.name;
    });
    if (idx !== -1)
    {
      object['typeIndex'] = idx;

      for (let key in object)
      {
        console.log(object);
        if (object.hasOwnProperty(key) && object[key] != null)
          this.markRecursive(object[key]);
      }
    }
  }

  reconstructRecursive(object)
  {
    if (object.hasOwnProperty('typeIndex'))
    {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object)
      {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }
      delete obj.typeIndex;
      return obj;
    }
    return object;
  }

  clone(object)
  {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

const john = new Person(
  "John",
  21,
  new Address("Rua de Teste", "Rua de Teste", "Estado de Teste", 77900000)
);
let serializer = new Serializer([Person, Address]);
const jane = serializer.clone(john);
console.log(jane)
jane.name = "Jane";
jane.address.street = "Outra Rua";
console.log(john);
console.log(jane);
