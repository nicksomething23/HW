// //factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     };
// }
// const circle = createCircle(1)

// // Constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// const another = new Circle(1)

// function Stopwatch () {
//     let startTime, endTime, running, duration = 0;
//     this.duration = function () {

//     }
//     this.start = function () {
//         if (running)
//             throw new Error('Stopwatch has already started');

//         running = true;

//         startTime = new Date()

//     }
//     this.stop = function () {
//         if (!running)
//         throw new Error('stopwatch is not started');

//         endTime = new Date();

//         const seconds = (endTime.getTime) - startTime.getTime() / 1000;
//         duration += seconds


//     }
//     this.reset = function () {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     }

// }

// TODO: define the Dog class here

// class Dog {
//     constructor (name,species,size) {
//         this.name = name;
//         this.species = species;
//         this.size = size;
//     }

//     bark () {
//         if (this.size > 60) {
//           return 'Grrr! Grrr!'
//         } else {
//             return'Woof! Woof!'
//         }
        
// }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// class Character {
//     constructor(name, health, strength) {
//       this.name = name;
//       this.health = health;
//       this.strength = strength;
//       this.xp = 0; // XP is always zero for new characters
//       this.inventory = {
//         gold: 10,
//         keys: 1
//       };
//     }
//     // Attack a target
//     attack(target) {
//       if (this.health > 0) {
//         const damage = this.strength;
//         console.log(
//           `${this.name} attacks ${target.name} and causes ${damage} damage points`
//         );
//         target.health -= damage;
//         if (target.health > 0) {
//           console.log(`${target.name} has ${target.health} health points left`);
//         } else {
//           target.health = 0;
//           const bonusXP = 10;
//           const goldGain = 10;
//           const keyGain = 1;
//           console.log(
//             `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.inventory.gold} gold and ${target.inventory.keys} key(s)`
//           );
//           this.xp += bonusXP;
//           this.inventory.gold += target.inventory.gold;
//           this.inventory.keys += target.inventory.keys;
//         }
//       } else {
//         console.log(`${this.name} can't attack (they've been eliminated)`);
//       }
//     }
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points, ${this
//         .strength} as strength, ${this.xp} XP points, ${this.inventory.gold} gold and ${this.inventory.keys} key(s)`;
//     }
//   }

// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventure! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe());
// console.log(glacius.describe());

// class Account {
//     constructor (name) {
//         this.name = name;
//         this.balance = 0;
//     }

//     credit (amount) {
//         this.balance += amount
//     }

//     describe () {
//         return `owner: ${this.name}, balance: ${this.balance}`
//     }
// }

// const accountList = []

// accountList.push(new Account ('Sean'))
// accountList.push(new Account ('Brad'))
// accountList.push(new Account ('Georges'))

// accountList.forEach(account => {
//     account.credit(1000)
//     console.log(account.describe())
// })

/*  

            ASYNC AWAIT HW 


*/


// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise.then( response => {
//     const jsonPromise = response.json();
//     jsonPromise.then(json => {
//         console.log(json[0].name)
//     });
// });

//better rewritten as//

// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// fetchPromise    
//     .then( response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`)
//         }
//         return response.json();
//     })
//     .then (json => {
//         console.log(json[0].name)
//     })

//using catch to handle promise errors

// const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise
//     .then ( response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`)
//         }
//         return response.json()
//     })
//     .then ( json => {
//         console.log(json[0].name);
//     })
//     .catch(error => {
//         console.error(`could not get products ${error}`)
//     });

// using promise.all()

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found')

// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

// Promise.all([fetchPromise1,fetchPromise2,fetchPromise3])
//     .then( responses => {
//         for (const response of responses) {
//             console.log(`${response.url}: ${response.status}`)
//         }
//     })
//     .catch (error => {
//         console.error(`Failed to fetch: $ ${error}`)
//     });

// using promise.any()

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found')

// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then( response => {
//         console.log(`${response.url}: ${response.status}`)
//     })
//     .catch(error => {
//         console.error(`Failed to fetch: ${error}`)
//     })


// using Async and await

// async function fetchProducts() {
//     try {
//         const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`)
//         }

//         const json = await response.json()
//         console.log(json[0].name)
//     }
    
//     catch(error) {
//         console.error(`Could not get products ${error}`)
//     }

// }

// fetchProducts()


console.log('Synchronous 1')
setTimeout(_ => console.log('timeout 2'), 0)
Promise.resolve().then(_ => console.log('Promise'))
console.log('Synchronous 4')