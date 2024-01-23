const Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue',
});

const Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
});

class Product
{
    constructor(name, color, size)
    {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

// open for extension, closed for modification

class ProductFilter 
{
    filterByColor(products, color) {
        return products.filter(product => product.color === color)
    }

    filterByColor(products, size) {
        return products.filter(product => product.size === size)
    }

    filterByColor(products, size, color) {
        return products.filter(product => product.size === size && product.color === color)
    }

    //state space explosion
    //3 criteria = 7 methods (modification)
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

const products = [apple, tree, house];

let productFilter = new ProductFilter();
const filteredProducts = productFilter.filterByColor(products, Color.green);
for (const product of filteredProducts) {
    console.log(product.name);
}

// The best way is use specification pattern
// Color Specification

class ColorSpecification
{
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

// Color Specification
class SizeSpecification
{
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

class BetterProductFilter
{
    filter (items, specification) {
        return items.filter((item) => specification.isSatisfied(item));
    }
}

class AndSpecification
{
    constructor (...specifications) {
        this.specifications = specifications;
    }

    isSatisfied(item) {
        return this.specifications.every((specification) => specification.isSatisfied(item))
    }
}

const betterProductFilter = new BetterProductFilter();
const filtered = betterProductFilter.filter(products, new ColorSpecification(Color.blue));
const andSpecification = new AndSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large));
const andFiltered = betterProductFilter.filter(products, andSpecification);
console.log(andFiltered);