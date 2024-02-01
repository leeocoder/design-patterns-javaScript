class CodeBuilder
{
  constructor(className)
  {
    this.className = className;
  }

  addField(name)
  {
    this.className[name] = name;
    return this;
  }

  toString()
  {
    return `class ${this.className.constructor.name} {
        constructor(${Object.keys(this.className)}) {
            ${Object.keys(this.className).map((key) => {
                return `this.${key} = ${key};`
            }).join('\n')}
        }
      }`
  }
}


class Person {}
const codeBuilder = new CodeBuilder(new Person());
codeBuilder.addField('name');
codeBuilder.addField('age');
codeBuilder.addField('leozera');
console.log(codeBuilder.toString());