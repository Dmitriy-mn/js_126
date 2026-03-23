// Чи могли б Ви, будь-ласка, пояснити, чому в коді 1) "this" не працює в callback-функції, а в коді 2) він працює з arrow-функцією?
// Я намагалася зрозуміти це за допомогою ШІ, але все стало надто складним :( Тож Ви — моя остання надія :)! Дякую заздалегідь! 



// ["Bob","Tom"].forEach(function foo(friend) {
//     console.log(this);
    
//       console.log(this.name + " knows " + friend);
//     });

// foo("Tom")


// const user = {
//   name: "Anna",
//   showFriends: function(friends) {
//     friends.forEach(function(friend) {
//       console.log(this.name + " knows " + friend);
//     });
//   }
// };

// user.showFriends(["Bob","Tom"]) 
// knows Bob 
// knows Tom 

// ["Bob","Tom"].forEach((friend) => {
//     console.log(this.name + " knows " + friend);
// });



// const user = {
//   name: "Anna",
//   showFriends: function(friends) {
//     console.log("showFriends", this);
    

//     friends.forEach((friend) => {
//       console.log(this.name + " knows " + friend); // this
//     });
//   }
// };

// user.showFriends(["Bob","Tom"]) 
// // Anna knows Bob 
// // Anna knows Tom 







/**
 * -------------------------
 */

  
/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */


// const chopShop = {
//     stones: [
//       { name: "Emerald", price: 1300, quantity: 4 },
//       { name: "Diamond", price: 2700, quantity: 3 },
//       { name: "Sapphire", price: 1400, quantity: 7 },
//       { name: "Ruby", price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find((item) => item.name === stoneName);
//         //      undefined => false => !false => true
//         if(!stone) {
//             return `${stoneName} not found`;
//         } else {
//             return stone.price * stone.quantity;
//         }
//     }
// };

// console.log(chopShop.calcTotalPrice("lalala"));


/**
 * ----------------------------------------
 */
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.


// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }

//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();


// console.log(cruiseControl);






// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


// const SPEED = 60;


// const bmw = {
//     brand: "bmw",
//     speed: 30
// }

// const audi = {
//     brand: "audi",
//     speed: 70
// }

// function speedSensor(maxSpeed) {
//     if(this.speed <= maxSpeed) {
//         return `Авто ${this.brand} рухаєтсья з безпечною швидкістю`
//     } else {
//         return `Авто ${this.brand} перевищує`
//     }
// }

// console.log(speedSensor.call(bmw, SPEED));

// const audiSppedSensor = speedSensor.bind(audi);

// console.log(audiSppedSensor(SPEED));




