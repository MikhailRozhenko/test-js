// Напиши цикл, який виведе на консоль числа від 1 до 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Напиши цикл, який виведе на консоль парні числа від 1 до 20

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum);

// Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10).

// for (let i = 1; i <= 10; i++) {
//   console.log(7 * i);
// }

// Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал числа 5: !5 = 1 * 2 * 3 * 4 * 5).

// const num = +prompt('Введіть, будь ласка, ціле число');
// let result = 1;

// for (let i = 1; i <= num; i++) {
//   result *= i;
// }

// console.log(result);

// Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"

// const stringName = 'Hello world';

// for (let i = 0; i < stringName.length; i++) {
//   if (i % 2 === 0) {
//     console.log(stringName[i]);
//   }
// }

// Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому порядку.

// const stringName = 'Hello world';

// for (let i = stringName.length - 1; i >= 0; i--) {
//   console.log(stringName[i]);
// }

// Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне пробіл.

// const stringName = 'Hello world';
// const index = ' ';

// for (let i = 0; i < stringName.length; i++) {
//   console.log(stringName[i]);
//   if (stringName[i] === index) {
//     break;
//   }
// }

// Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// const UserName = 'JavaScript';

// for (let i = 0; i < UserName.length; i++) {
//   if (i % 2 === 0) console.log(UserName[i]);
// }

// Напиши функцію, яка приймає рядок та повертає перевернутий рядок

// function StringName(userName) {
//   let reversed = ' ';
//   for (let i = userName.length - 1; i >= 0; i--) {
//     reversed += userName[i];
//   }
//   return reversed;
// }

// console.log(StringName('ser'));

// Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у верхньому регістрі

// function stringName(userName) {
//   let reversed = '';
//   for (let i = 0; i < userName.length; i++) {
//     if (i % 2 === 0) {
//       reversed += userName[i].toUpperCase();
//     } else reversed += userName[i];
//   }
//   return reversed;
// }

// console.log(stringName('ser'));

// Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до рядочка str1 стільки разів скільки вказали у параметрі count.

// function res(str1, str2, count) {
//   let result = '';

//   for (let i = 0; i < count; i++) {
//     result += str1 + str2;
//   }

//   return result;
// }

// console.log(res('a', 'b', 3)); // ababab

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// // Доповни код функції таким чином, що:

// // Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// // Якщо в рядку відсутні заборонені слова, функція повертає буль false

// // Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function checkForSpam(message) {
//   const spam = 'spam';
//   const sale = 'sale';
//   const text = message.toLowerCase();
//   if (text.includes(spam) || text.includes(sale)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkForSpam('sale'));
