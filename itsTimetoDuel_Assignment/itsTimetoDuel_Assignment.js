class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) { // Reduce target res by power
        target.res -= this.power;
        console.log(this.name + "attacks the " + target.name + "for" + this.power + "damage!");
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play(target) {
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude;
            console.log("The "+ this.name+" was played on "+ target.name);
            console.log(this.text);
        } else {
            console.log("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3!", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2!", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2!","Power", +2);

hardAlgo.play(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);