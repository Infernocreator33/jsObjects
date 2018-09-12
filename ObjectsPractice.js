//working with objects

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic", 
    inkColor: "black"
}

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);
console.log(pen.inkColor);

//change the value of a property
pen.color = "red"; //modify the pen color property
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);


//dynamically add new properties  to an already created object
pen.price = "2.50";
console.log(`My pen costs $${pen.price}`);

const Zayden = {
    name: "Zayden", 
    health: 150, 
    strength: 25    
};

console.log(`${Zayden.name} has ${Zayden.health}
health points and ${Zayden.strength} as Strength`);
// Zayden is harmed by an arrow - reduce health by 20
Zayden.health -= 20;

//Zayden equips a strength necklac - increase strength by 10
Zayden.strength += 10;

console.log(`${Zayden.name} has ${Zayden.health}
health points and ${Zayden.strength} as Strength`);

function describe(character)
{
    console.log(`${character.name} has ${character.health} health points and ${character.strength} as strength`);
}