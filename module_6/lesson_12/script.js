/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: 
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 * 
 * - Додай метод updatePostCount(value), який у параметрі value 
 *    приймає кількість постів, які потрібно додати користувачеві.
 */

// class Blogger {
//     constructor(param) {
//         this.email = param.email;
//         this.age = param.age;
//         this.numberOfPosts = param.numberOfPosts;
//         this.topics = param.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }


// const alice = new Blogger({
//     email: "alice@gmail.com",
//     age: 25,
//     numberOfPosts: 20,
//     topics: ["tech", "cooking"]
// })

// alice.updatePostCount(5);
// console.log(alice.getInfo());
// console.log(alice);


// const petya = new Blogger({
//     email: "petya@gmail.com",
//     age: 35,
//     numberOfPosts: 10,
//     topics: ["gaming"]
// })

// petya.updatePostCount(7);

// console.log(petya.getInfo());

// console.log(petya);







// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

// class User {
//     #login;
//     #email;

//     constructor(param) {
//         this.#login = param.login;
//         this.#email = param.email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }

//     // getEmail() {
//     //     return this.#email;
//     // }

//     // changeEmail(newEmail) {
//     //     this.#email = newEmail;
//     // }
// }


// const alice = new User({ 
//     login: "alice", 
//     email: "alice@gmail.com"
// })


// alice.login = "SuperAlice";
// console.log(alice.login);


// alice.email = "superAlice@gmail.com";
// console.log(alice.email);

// alice.changeEmail("lalala@gmail.com");
// console.log(alice.getEmail());


// console.log(alice);



