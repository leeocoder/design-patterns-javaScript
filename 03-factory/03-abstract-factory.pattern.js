const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class HotDrink {
    consume() {}
}

class Tea extends HotDrink {
    consume() {
        console.log('This is nice with lemon!');
    }
}

class Coffee extends HotDrink {
    consume() {
        console.log('This is coffee is delicious!');
    }
}

class HotDrinkFactory {
    prepare(amount) {}
}

class TeaFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Put in tea bag, boil water , our ${amount}ml`);
        return new Tea();
    }
}

class CoffeeFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Grind some beans, boil water , our ${amount}ml`);
        return new Coffee();
    }
}

const AvailableDrink = Object.freeze({
    coffee: CoffeeFactory,
    tea: TeaFactory
});

class HotDrinkMachine {
    constructor() {
        this.factories = {};
        for (const drink in AvailableDrink) {
            this.factories[drink] = new AvailableDrink[drink]();
        }
    }

    interact(consumer) {
        rl.question('Please specify drink and amount (e.g., tea 50): ', answer => {
            let parts = answer.split(' ');
            const  name = parts[0];
            const amount = parseInt(parts[1]);
            let drink = this.factories[name].prepare(amount);
            rl.close();
            consumer(drink);
        });
    }

    makeDrink(type) {
        switch (type) {
            case 'tea':
                return new TeaFactory().prepare(200);
            case 'coffee':
                return new CoffeeFactory().prepare(50);
            default:
                throw new Error('');
        }
    }
}

const machine = new HotDrinkMachine();
machine.interact(drink => {
    drink.consume();
});