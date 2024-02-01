const hello = 'hello';
let html = [];
html.push('<p>');
html.push(hello);
html.push('</p>');
console.log(html.join(''));

// --------------------------------

const words = ['Hello', 'world'];
html = [];
html.push('<ul>\n');
for (const word of words) {
    html.push(`  <li>${word}</li>\n`);
}
html.push('</ul>');
console.log(html.join(''));

// --------------------------------

class Tag {
    static get indentSize() { return 2 };
    constructor(name='', text='')
    {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toStringImplementation(indent) {
        let html = [];
        let index = ' '.repeat(indent * Tag.indentSize);
        html.push(`${index}<${this.name}>\n`);
        if(this.text.length > 0) {
            html.push(' '.repeat(Tag.indentSize * (index+1)));
            html.push(this.text);
            html.push('\n');
        }
        
        for (let child of this.children) {
            html.push(child.toStringImplementation(indent+1));
        }

        html.push(`${index}</${this.name}>\n`);
        return html.join('');
    }

    toString() {
        return this.toStringImplementation(0);
    }

    static create(name) {
        return new HtmlBuilder(name);
    }
}

class HtmlBuilder {
    constructor(rootName) {
        this.root = new Tag(rootName);
        this.rootName = rootName;
    }

    addChildFluent(childName, childText) {
        let child = new Tag(childName, childText);
        this.root.children.push(child);
        return this;
    }

    toString() {
        return this.root.toString();
    }

    clear() {
        this.root = new Tag(this.rootName);
    }

    build() {
        return this.root;
    }
}

let builder = new HtmlBuilder('ul');
for (const word of words) {
    builder
    .addChildFluent('li', word)
    .addChildFluent('lo', word);
}

console.log(builder.root.toString());