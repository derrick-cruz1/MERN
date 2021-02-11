class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength =3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Stats: -Name: "+ this.name + " -Strength: "+this.strength+" -Speed: "+this.speed+" -Health: "+this.health);
    }
    drinkSake(){
        this.health += 10;
        console.log("Arigato...Sake is good for me!")
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength) {
        super(name, health, speed, strength);
        this.wisdom = 10;
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();