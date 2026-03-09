// -------------------------------- 5

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//     name: "Alice",
//     age: 20,
//     hobby: "html",
//     premium: true
// }

// const user2 = {
//     name: "Yura",
//     age: 30,
//     hobby: "html",
//     premium: true
// }


// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for(const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// function showInfo(obj) { // obj = http://obj/alice
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;
    
//     const keys = Object.keys(obj);

//     for(const key of keys) {
//        console.log(key + ": " + obj[key]);
//     }
// }

// showInfo(user);
// showInfo(user2);

// console.log("alice", user);
// console.log("yura", user2);







/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//     alice: 130,
//     petya: 100,
//     yura: 160
// }

// function summa(obj) {
//     let sum = 0;
//     const values = Object.values(obj);
    
//     for(const value of values) {
//         sum += value;
//     }
    
//     return sum;
// }

// const sum = summa(salaries);
// console.log(sum);












