// // Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.

// const name = 'Mikhail';

// console.log(name);

// // Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".

// const age = 27;

// console.log(`Мені ${age} років`);

// // Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.

// const x = 12;
// const y = 25;

// console.log(x + y, x - y, x * y, x / y);

// // Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.

// const city = 'Kremenchuk';

// console.log(`Я живу в місті ${city}`);

// // Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль.

// const userEmail = 'mihailkfmn@gmail.com';

// const altIndex = userEmail.indexOf('@');

// const userName = userEmail.slice(0, altIndex);

// const emailName = userEmail.slice(altIndex);

// console.log(userName);

// console.log(emailName);

// Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".

// const price = 100;

// const currency = '\u20B4';

// const stringName = `Ціна: ${price} ${currency}`;

// console.log(stringName);

// Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.

// const firstName = 'Mikhail';
// const lastName = 'Rozhenko';

// const fullName = `${firstName} ${lastName}`;

// console.log(fullName);

// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.

// const a = 21;
// const b = 32;

// const sum = a + b;
// const difference = a - b;
// const product = a * b;
// const quotient = a / b;

// console.log(sum);

// console.log(difference);

// console.log(product);

// console.log(quotient);

// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.

// const radius = 5;
// const pi = 3.14;

// const area = pi * radius ** 2;

// console.log(area);

// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.

// const someString = 'i love Nastya';

// const lengthSome = someString.length;

// console.log(lengthSome);

// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.

// const someString = 'Anastasia Vradii';

// const firstLetter = someString[0];
// const lastLetter = someString[someString.length - 1];

// console.log(firstLetter);

// console.log(lastLetter);

// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"

// const str1 = 'Tony';
// const str2 = 'Soprano';

// const strSum = `${str1[str1.length - 1]}${str2[str2.length - 1]}`;

// console.log(strSum);

// Створи змінну userValue та запиши до неї будь-яке число.

// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

// const userValue = 198;

// const sum = userValue * (5 ^ 3);

// console.log(sum);

// Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// Замінити вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// students += 50;
// console.log(students);

// Розбери пріоритет операторів в інструкції визначення значення змінної
// `result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const sum = repairBots + defenceBots;
// const message = `${companyName} has ${sum} bots in stocks`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. В іншому випадку функція повинна повернути булеве значення false.

// function result(str1, str2) {
//   if (str1[0] === str2[str2.length - 1]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(result('res', 'ser'));

// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.

// function res(str1, str2) {
//   return str1[0] === str2[0];
// }

// console.log(res('som', 'soss'));

// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false.

// function result(str1, str2) {
//   return str1.length === str2.length;
// }

// console.log(result('yep', 'yop'));

// Задача-4
// Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна. В іншому випадку функція повинна повернути булеве значення false.

// function numb(num) {
//   const length = String(num).length;
//   return length % 2 === 0;
// }

// console.log(numb(2334));

// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false.

// function res(num1, num2) {
//   return num1 > num2;
// }

// console.log(res(1, 2));

// Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому випадку функція повинна повернути булеве значення false.

// function res(num1, num2) {
//   return num1 % num2 === 0;
// }

// console.log(res(10, 4));

// Задача-7
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом. В іншому випадку функція повинна повернути булеве значення false.

// function res(num) {
//   return num % 2 !== 0;
// }

// console.log(res(3));

// Задача-8
// Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false.

// Підказка: допоможе toLowerCase();

// function res(str) {
//   return str !== str.toLowerCase();
// }

// console.log(res('diksa')); // false
// console.log(res('DiKsa')); // true
// console.log(res('HELLO')); // true

// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".

// function boolType(hasInvitation, isFriend) {
//   if (hasInvitation || isFriend) {
//     return 'Ви запрошені';
//   } else {
//     return 'Вхід заборонено';
//   }
// }

// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".

// function res(age) {
//   if (age < 12) {
//     return 'Дитина';
//   } else if (age >= 12 && age < 18) {
//     return 'Підліток';
//   } else if (age >= 18 && age <= 60) {
//     return 'Дорослий';
//   } else {
//     return 'Пенсіонер';
//   }
// }

// console.log(res(18));

// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".

// function res(isLoggedIn, hasAdminRights) {
//   if (isLoggedIn && hasAdminRights) {
//     return 'Адмін-сторінка';
//   } else if (isLoggedIn) {
//     return 'Користувач';
//   } else {
//     return 'Гість';
//   }
// }

// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".

// function res(speed) {
//   if (speed < 60) {
//     return 'Безпечно';
//   } else if (speed >= 60 && speed <= 100) {
//     return 'Увага';
//   } else {
//     return 'Небезпечно';
//   }
// }

// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".

// function res(time, isWeekend) {
//   if (time < 12 && !isWeekend) {
//     return 'Ранок буднього дня';
//   } else if (time > 12 && time < 18 && isWeekend) {
//     return 'День вихідного дня';
//   } else {
//     return 'Вечір';
//   }
// }

// console.log(res(11, false));

// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".

// // function res(hasGlutenAllergy, containsGluten) {
// //   return hasGlutenAllergy && containsGluten ? 'Не можна їсти' : 'Можна їсти';
// }

// Задача-15
// Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь".

// function res(age) {
//   return age < 18 ? 'Не можна купувати алкоголь' : 'Можна купувати алкоголь';
// }

// Задача-16
// Напишіть функцію, яка приймає один параметр isSunny (булевий). Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".

// function res(isSunny) {
//   return isSunny ? 'Вийдемо на прогулянку' : 'Залишимося вдома';
// }

// Задача-17
// Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне".

// function res(number) {
//   return number % 2 === 0 ? 'Парне' : 'Непарне';
// }

// console.log(res(5));

// Задача-18
// Напишіть функцію, яка приймає два параметри: password та confirmPassword. Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".

// function res(password, confirmPassword) {
//   return password === confirmPassword
//     ? 'Паролі збігаються'
//     : 'Паролі не збігаються';
// }

// console.log(res('res', 're'));

// Задача-19
// Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".

// function res(temperature) {
//   if (temperature < 0) {
//     return 'Зима';
//   } else if (temperature >= 0 && temperature <= 15) {
//     return 'Весна';
//   } else if (temperature >= 16 && temperature <= 25) {
//     return 'Літо';
//   } else {
//     return 'Осінь';
//   }
// }

// console.log(res(0)); // Зима
// console.log(res(10)); // Весна
// console.log(res(20)); // Літо
// console.log(res(30)); // Осінь

// Задача-20
// Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні".

// function res(number1, number2) {
//   if (number1 > number2) {
//     return 'Перше більше';
//   } else if (number1 < number2) {
//     return 'Перше менше';
//   } else {
//     return 'Рівні';
//   }
// }

// // Задача-21
// // Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати".

// function res(isBatteryFull) {
//   return !isBatteryFull ? 'Потрібно заряджати' : 'Не потрібно заряджати';
// }

// Задача-22
// Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено".

// function res(isStudent, hasID) {
//   return isStudent && hasID ? 'Вхід дозволено' : 'Вхід заборонено';
// }

// Задача-23
// Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легка одяг".

// function res(temperature, isRaining) {
//   return temperature < 0 || isRaining
//     ? 'Потрібно носити теплий одяг'
//     : 'Легкий одяг';
// }

// Задача-24
// Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено".

// function res(hasCar, hasLicense) {
//   return hasCar && hasLicense ? 'Можете водити машину' : 'Водити заборонено';
// }

// Задача-25
// Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено".

// function res(age, hasParentConsent) {
//   if (age < 18 && !hasParentConsent) {
//     return 'Доступ заборонено';
//   } else {
//     return 'Доступ дозволено';
//   }
// }

// Задача-26
// Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".

// function res(isVegetarian, containsMeat) {
//   return isVegetarian && containsMeat ? 'Не можна їсти' : 'Можна їсти';
// }

// Задача-27
// Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу".

// function res(hoursWorked, overtime) {
//   return hoursWorked > 40 || overtime ? 'Отримуєте бонус' : 'Без бонусу';
// }

// function slugify(title) {
//   const persent = title.split(' ').join('-').toLowerCase();
//   return persent;
// }

// console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeArray(firstArray, secondArray, maxLength) {
//   const arrayFrom = firstArray.concat(secondArray);

//   if (arrayFrom.length > maxLength) {
//     return arrayFrom.slice(0, maxLength);
//   }

//   return arrayFrom;
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:

// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.

function filterArray(numbers, value) {
  const result = [];
  for (const res of numbers) {
    if (res > value) {
      result.push(res);
    }
  }

  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
