// const age = 20;
// console.log(age);

// const x = 10.5;
// console.log(x);

// let y;
// console.log(y);

// console.log(typeof age + x);

// const isOpen = true;
// console.log(typeof isOpen);

// let students = 100;

// students += 20;

// console.log(students);

// ------------------------------- ОБЄДНУЄМО РЯДКИ / ВИВОДИМО ІНФОРМАЦІЮ ЧЕРЕЗ ШАБЛОННІ РЯДКИ------------------------

// const firstName = "Alice";
// let lastName = "Franko"

// let fullName = firstName + " " + lastName;

// lastName = prompt();

// fullName = `${firstName} ${lastName}`;

// console.log(fullName);

// --------------------------------------------------------------------------------------------------------------------

// const str = "Hello world";

// const strLength = str.length;

// console.log(str[3]);

// console.log(str[strLength - 1]);

// ------------------------------------------- ПЕРЕВОДИМ ЗНАЧЕННЯ ДО ЧИСЛА ----------------------------

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number("5"));

// Оператори порівняння

// console.log("5" == 5);
// console.log("5" === 5);

// console.log("A" < "a");

// --------------------------------------- ПЕРЕВЕДЕННЯ ТЕКСТУ ДО ЧИСЛА ---------------------------------------

// let width = "50px";
// let height = "200.53px"

// width = Number.parseInt(width); // працює лише з цілими чмслами
// height = Number.parseFloat(height); // перебирає з дясятковою частиною

// console.log(width, height);

// ------------------------------------------ ОКРУГЛЕННЯ ЧИСЕЛ ---------------------------------------------

// const value = 27.5;

// rezult = Math.floor(value); // округлює число вниз до найближчого цілого
// rezult1 = Math.ceil(value); // округлює число вгору до найближчого цілого
// rezult2 = Math.round(value);  // округлює число до найближчого цілого числа згідно математичних правил
// rezult3 = Math.max(rezult, rezult1, rezult2); // повертає найбільше число з набору переданих чисел
// rezult4 = Math.min(rezult, rezult1, rezult2, rezult3); // повертає найменше число з набору переданих чисел
// rezult5 = Math.random() // повертає випадкове число в діапазоні від 0 (включно) до 1 (за винятком)

// console.log(rezult, rezult1, rezult2, rezult3, rezult4, rezult5);

// let a = value.toFixed(3) // округлення результату до певної кількості знаків після крапки
// console.log(a);

// ---------------------------- ФУНКЦІЇ ----------------------------------

// функція - це шматочок коду який ми ізолюємо і можемо виконати в майтутньому звернувшись до неї

// function add() {
//     console.log("Hello");
// }

// add(); // виклик функції

// -------------------------------------------------------------------------

// function add(x, y) { // назва параметрів довільна, параметри можемо використовувати лише в межах функції

//     const total = x + y;
//     return total; // припиняє роботу функції та повертає значення в місце з відки вона була викликана

// }

// const a = add(5, 3); // значення, які передаються під час виклику функції називаються аргументами

// console.log(a);

// ------------------------------------------------------------------------------------------------------------

// function foo(x, y) {
//     const dayTotal = x * 8;
//     return dayTotal * y;

// }

// const petya = foo(20, 20);
// const alice = foo(20, 15);
// const yura = foo(15, 21);

// console.log("petya", petya);
// console.log("alice", alice);
// console.log("yura", yura);

// -----------------------------------------------------------------------------------------------------------

// --------------------------------------------------if else is else -------------------------------------------

// const points = 500;

// if (points > 1500) {
//   console.log("level 1");
// } else if (points > 500) {
//   console.log("level 2");
// } else if (points < 500) {
//   console.log("level 3");
// } else {
//   console.log("level 4");
// }

// -------------------------------------------------------------------------------------------------------------

// const hours = 14;
// const minutes = 20;
// let time;

// if (minutes > 0) {
//   time = `${hours} г. ${minutes} хв.`;
// } else {
//   time = `${hours} г.`;
// }

// console.log(time);

// ------------------------------------------------------------------------------------------------------------

// const message = minutes > 0 ? `${hours} год. ${minutes} хв.` : `${hours} год.`;
// console.log(message);

// ------------------------------------------------ ТЕРНАРНИЙ ОПЕРАТОР ------------------------------------------

// const balance = 500;
// let message;

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }

// console.log(message);

// -------------------------------------------------------------------------------------------------------------

// const balance = 500;

// const message = balance >= 0 ? "Positive" : "Negative";

// const message =
//   balance >= 1000 ? "more 1000" : balance >= 500 ? "more 500" : Negative;

// console.log(message);

// ----------------------------------------------------- ОПЕРАТОР SWITCH CASE -----------------------------------

// const user = "Alise";

// /* де user - те що будемо зрівнювати */

// switch (user) {
//   case "Petya":
//     console.log("case 1");
//     break;
//   case "Alise":
//     console.log("case 2");
//     break;
//   case "Yura":
//     console.log("case 3");
//     break;
//   default:
//     console.log("default");
// }

// ---------------------------------------------------------------------------------------------------------------
/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Today"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const deadline = 2;

// switch (deadline) {
//   case 0:
//     console.log("Today");
//     break;
//   case 1:
//     console.log("Today");
//     break;
//   case 2:
//     console.log("Overmorrow");
//     break;
//   default:
//     console.log("Date in the future");
//     break;
// }

// ---------------------------------------------------------------------------------------------------------------

/**
 * Напиши скрипт вибора опції доставки товару.
 * Опція зберігається у змінній option: 1 - самовивіз, 2 - кур'єр, 3 -, 4 -
 *
 * У змінну message записати повідомлення залежно від опції.
 * - "Ви можете забрати товар завтра з 12:00 у нашому офісі"
 * - "Курєр доставить замовлення завтра з 9:00 до 18:00"
 * - "Посилка буде відправлена сьогодні"
 * - "Вам передзвонить менеджер"
 */

// const option = 1;
// let message = "";

// switch (option) {
//   case 1:
//     message = "Ви можете забрати товар завтра з 12:00 у нашому офісі";
//     break;
//   case 2:
//     message = "Курєр доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посилка буде відправлена сьогодні";
//     break;
//   default:
//     message = "Вам передзвонить менеджер";
//     break;
// }

// console.log(message);

// --------------------------------------------------- ЛОГІЧНІ ОПЕРАТОРИ ---------------------------------------------

/**
 * - Перетворення типів: логічне
 * - Оператор   &&    - і
 * - Оператор   ||    - або
 * - Оператор   !     - заперечення
 */

/** перетворюється до false */

// console.log(Boolean(false));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(""));

/** перетворюється до true */

// console.log(Boolean(true));
// console.log(Boolean(3.14));
// console.log(Boolean(-3.14));
// console.log(Boolean("herro"));
// console.log(Boolean("false"));

// -----------------------------------------------------------------------------------------------------------

// console.log(5 && 4);

/** оператор І перевіряє чи значення зліва true та значення зліва true
 * якщо значення зліва і значення зправа після перетворення до бульового значення буде true,
 * то він поверне значення операнта, що знаходиться справа (останню істину) тобто 4
 */

// console.log(null && 3);
// console.log(3 && NaN);

/**
 * як тільки оператор знаходить значення, яке в бульовому виразі буде false він зупиняється і повертає його
 */

// console.log(false || 5);

/**
 * оператору АБО потрібно, щоб хоча б один операнд у бульовому вираженні був true і як тільки він його знаходить, то відразу ж повертає
 */

// console.log(false || null);

/**
 * якщо і з ліва і з права буде false, то він поверне значення останнього операнта
 */

/** тобто повертає першу істину або останню хибу */

// ------------------------------------------------ Приклад --------------------------------------------
/**
 * Напиши скрипт перевірки користувача при доступі до контенту.
 * Є три типа підписки: free, pro та vip.
 * Отримати доступ можуть тільки користувачі pro та vip.
 *
 */

// const sub = "free";
// let canConnect;

// if (sub === "pro" || sub === "vip") {
//   canConnect = true;
// } else {
//   canConnect = false;
// }

// console.log(canConnect);

// ---------------------------------------------------- МЕТОДИ РЯДКІВ --------------------------------------------

// const message = "JavaScript is awesome";
// console.log(message.length);

// ------------------------------------------------------------------------------------------------------------------

// const fullName = "Jacob Mercer";
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"

// ------------------------------------------------------------------------------------------------

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// ------------------------------------------------------------------------------------------------

// function checkForName(fullName, firstName) {
//   return (aaa = fullName.toLowerCase().includes(firstName.toLowerCase()));
// }

// checkForName("Jason Neis", "Jason");
// console.log(aaa);

//-------------------------------------------------------- ЦИКЛИ ------------------------------------------------

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// -------------------------------------------------------------------------------------------------

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// ------------------------------------------------------------------------------------------------

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log(number);
//     break;
//   }

// }

// ----------------------------------------------------------------------------------

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log("Met the number 5, interrupt the execution of the cycle");
//     break;
//   }
// }

// console.log("Log after cycle");

// ------------------------------------------------------------------------------------

// function calculateEvenTotal(number) {
//   let total = 0;

//   for (i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//       total += i;
//     }
//   }
//   console.log(total);

//   return total;
// }

// calculateEvenTotal(6);

// -----------------------------------------------------------------------------------

// ------------------------------------------------- Арифметичні функції --------------------------------------------------
//
// Math.floor(num): повертає найближче ціле число, яке є меншим або дорівнює вказаному числу num
// Math.ceil(num): повертає найближче ціле число, яке є більшим, або дорівнює зазначеному числу num
// Math.round(num): повертає значення числа після округлення до найближчого цілого
// Math.max(num1, num2, ...): повертає найбільше число з набору переданих чисел
// Math.min(num1, num2, ...): повертає найменше число з набору переданих чисел
// Math.random(): повертає випадкове число в діапазоні від 0 (включно) до 1 (за винятком)
//
//

// ---------------------------------------------------- Тернарний оператор --------------------------------------------------
//
//
//Тернарний оператор — це коротша синтаксична заміна інструкції `if...else`. Тернарний оператор дозволяє виконувати певну частину коду залежно від умови.
//
// <condition> ? <expression if condition is true> : <expression if condition is false>

// Він працює таким чином:
// - обчислюється умова `condition`;
// - якщо умова істинна (перетворюється до `true`), обчислюється вираз після `?`;
// - якщо умова хибна (перетворюється до `false`), обчислюється вираз після `:`;
// - значення обчисленого виразу повертається як результат роботи тернарного оператора.
//

// ---------------------------------------------------------- МЕТОДИ РЯДКІВ -----------------------------------------------------

/**
 * Методи рядків
 *
 * - slice - метод slice() використовується для створення копії частини або всього рядка без зміни оригінального рядка
 * - toLowerCase /toUpperCase - використовуються для зміни регістру символів у рядку. Обидва методи не змінюють вихідний рядок, а повертають новий рядок у відповідному регістрі
 * - includes -
 * - startsWith /endsWith - методи startsWith() і endsWith() призначені для перевірки початку й закінчення рядка відповідно. Вони повертають булеве значення true або false,
 *                          залежно від того, чи відповідає початок або кінець рядка заданому значенню
 * - indexOf - метод indexOf() використовується для пошуку першого входження підрядка в рядок
 * - trim - метод trim() використовується для видалення початкових і кінцевих пробілів із рядка
 */

// const user = "Alice Franko";

// const str = user.slice(0);
// const str = user.slice(0, 6);
// const str = user.slice(-3);
// console.log(str);

// console.log(user.toLowerCase()); // alice franko
// console.log(user.toUpperCase()); // ALICE FRANKO

// console.log(user.includes("li")); // true
// console.log(user.includes("Ali")); // true
// console.log(user.includes("ali")); // false

// console.log(user.startsWith("Ali")); //true
// console.log(user.startsWith("li")); //falce
// console.log(user.startsWith("ali")); //falce

// console.log(user.endsWith("ko")); //true
// console.log(user.endsWith("nko")); //true
// console.log(user.endsWith("nk")); //falce
// console.log(user.endsWith("nkO")); //falce

// console.log(user.indexOf("c")); //3 - якщо в рядку є декілька симовлів "с", то він поверне індекс першого індексу
// console.log(user.indexOf("ce")); //3
// console.log(user.indexOf("ca")); //-1
// console.log(user.indexOf("C")); //-1

// console.log(user.trim()); //метод прибирає зайві пробіли спочатку на вкінці рядка

/** Форматування посилання
 *
 * Напиши скрипт який первіряє чи закінчується значення
 * змінної link символом /. Якщо ні, то додай до кінця значення цей символ
 */

// let link = "https://my-site.com/about";

// -----------------------------
// if (link.endsWith("/")) {
//   return link;
// } else {
//   return link += "/";
// }
// ----------------------------------------------------------

// ------------------- оптимізований варіант коду ---------------

// if (!link.endsWith("/")) {
// добавляємо оператор заперечення ! і якщо / відсутній
//   link += "/"; // ,то потрапляємо в тіло конструкції і добавляємо /

// link = link + "/";
// }

// -------------------------------------------------------------------

/** Форматування посилання
 *
 * Напиши скрипт який первіряє чи закінчується значення
 * змінної link символом /. Якщо ні, то додай до кінця значення цей символ /, але тільки в тому випадку якщо в лінк
 * є підрядок my-site
 */

// let link = "https://my-site.com/about";

// if (!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }

// ------------------------------------------------------------- ЦИКЛИ -------------------------------------------------------
//
// ------------------------------------------------------------- FOR --------------------------------------------------------
//
// const str = "Alice";
// for (let i = 0; i < str.length; i += 1) {
//   if (str[i] === "i") {
//     break;
//   }
//   console.log(str[i]);
// }

// ---------------------------------------------------------- WHILE ------------------------------------------------------

// const str = "Alice";
// let i = 0;

// while (i < str.length) {
//   console.log(str[i]);
//   i++; // інкремент i += 1
// }

// якщо потрібно виконати цикл хоча б один раз (навіть коли умова хибна), то використовується do while

// let a = 10;

// do {
//   console.log(a);
//   a++;
// } while (a < 6);

//
// ----------------------------------------------------

// const a = 20;
// const b = 100;

// for (let i = a; i <= b; i++) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

// ----- в зворотньому напрямку ----------------------

// const a = 20;
// const b = 100;

// for (let i = b; i >= a; i--) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

//------------------------- сума парних ---------------
// ------------------------- варіант 1 ----------------
// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);

// ------------------------- варіант 2 (альтернативний) -----------------

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }

// console.log(i);

// ---------------------------------------------------------------------- ІНКРЕМЕНТИ ---------------------------------------------------------------------------

// let a = 10;
// const b = a++;

// console.log("a", a);
// console.log("b", b);

// ------------------------------------------------------

// function getLastElementMeta(array) {
//   // const arr = array.length - 1;
//   // return (a = [arr, array[arr]]);
//   return (a = [array.length - 1, array[array.length - 1]]);
// }

// getLastElementMeta(["apple", "peach", "pear", "banana"]);

// console.log(a);

// ----------------------------------------------------

// ------------------------------------------------------------------------- МАСИВИ ---------------------------------------------------------------------------------

// ---------------------------------------------------------------------- МЕТОДИ МАСИВУ -----------------------------------------------------------------------------
/**
 * - join -- метод join(" ") перетворює масив на рядок, між елементами в створеному рядку будуть пробіли (можна вставити любий символ)
 * - split -- метод split(" ") з рядка створює масив, якщо вказати split(" "), то він по пробілу розріже рядок
 * - slice -- метод slice(" ") вирізає з масиву частину масиву, наприклад (0, 3) - вирізає з 0 до 3 індексу (3 не включно) при цьому вихідний масив не змінюється
 *            якщо не передати жодного аргументу, то він зробить копію всього масиву
 * - concat -- метод concat(назва ішного масиву) приєднує в себе інший масив, а concat(["lalala", "tototo"]) приєднає до масиву нові елементи
 * - indexOf -- шукає в масиві який його викликав елемент який ми передаємо, як аргумент (якщо є, то поверне індекс цього елемента, якщо немає повертає -1)
 * - push -- метод додає до кінця масиву значення яке ми передаємо йому, як аргумент. Якщо результат методу призначити змінній, то отримаємо довжину новоствореного масиву
 * - pop -- метод вирізає з масиву останній елемент. pop() - значення не потрібне. Значення можна зберегти в змінну а.
 * - includes -- метод перевіряє чи є в масиві значення, яке ми передаємо методу, як аргумент та повертає булеве значення true або false
 */

// const courses = ["HTML", "CSS", "JS", "React", "PostgreSQL"];

// const str = courses.join(" ");
// const arr = str.split(" ");
// console.log(str);
// console.log(arr);

//---------------------------------------------------------
// const arr = courses.slice(0, 3);

// console.log(arr);
//---------------------------------------------------------

// const arr = [1, 2, 3];

// const result = courses.concat(arr);

// const newResult = courses.concat(arr, ["lalal", "tototo"]);

// console.log(result);
//----------------------------------------------------------

// const index = courses.indexOf("React"); //аргумент чутливий до регістру
// console.log(index);

//----------------------------------------------------------
// const a = courses.push("lalala", "tatata");

// console.log(courses);

// console.log(a);

//---------------------------------------------------------

// const a = courses.pop();
// console.log(a);

//---------------------------------------------------------

// console.log(friend.includes("React"));

// --------------------------- ЦИКЛИ FOR OF ---------------------

/**
 * - ітерація по масивуциклом for
 * - цикл for... of
 * - різниця у використанні for та for ... of
 */

// -----------------------------------------------------------------
// const friend = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler"];

// for (let i = 0; i < friend.length; i++) {
// friend[i] = friend[i] + "!!!";
//   friend[i] += "!!!";
// }

// console.table(friend);

// --------------------- ЦИКЛ ДЛЯ ПЕРЕБОРУ МАСИВУ -------------------

// for (const item of friend) {
//де item довільна назва
//   console.log(item);
// }

// -----------------------------------------------------------------------

/**
 * Напиши скрип для обчислення площі прямокутника зі сторонами
 * значення яких зберігається у змінній values вигляді рядка.
 * Значення гарантовано розділені пробілом
 */

// const value = "8 10";

// const arr = value.split(" ");

// console.log(arr);

// площа прямокутника

// const results = arr[0] * arr[1];

// console.log(results);

// периметр прямокутника

// const result = (+arr[0] + Number(arr[1])) * 2;

// console.log(result);

// ----------------------------------------------------------------------

/**
 *  Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масивувиведи в консоль рядок
 * у форматі номер елемента: значення елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruit = ["🍎", "🍊", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruit.length; i++) {
//   console.log(`${i + 1}: ${fruit[i]}`);
// }

/**
 * Напиши скрипт, якийпідраховує сумувсіх парних чисел в масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// console.log(total);

// --------------------- альтернативний варіант -------------------------------

// for (const number of numbers) {
//   if (!(number % 2)) {
//     total += number;
//   }
// }

// console.log(total);

// --------------------- альтернативний варіант -------------------------------

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     continue;
//   }
//   total += number;
// }

// console.log(total);

// ----------------------------------------------------------------------------

/**
 * Напиши скрипт, який виводить у консоль імя тателефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів
 * розділені комами.Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "380501111111, 380502222222, 380503333333, 380504444444";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// -------------------------------------------------------------------------------------------

/**
 * Напиши скрип, який виводить у консольусі слова рядка
 * крім першого і останнього. Рузультуючий рядок не повинен починатися
 * або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "Welcome to the future";

// const stringArr = string.trim().split(" ");
// trim() прибираємо з рядка пробіли на початку і в кінці рядка
// const result = stringArr
//   .slice(1, stringArr.length - 1)
//   .join(" ")
//   .trim();
// slise() вирішає з масиву частину масиву і поміщає його в новий масив, а join() з масиву робить рядок
//trim прибирає зайві проміжні пробіли
// console.log(result.trim);

// ------------------------------------------------------------------------------------------------

/**
 * Напиши скрипт найменшого числа у масиві.Код повинен працювати для будь-якого масиву чисел.
 * Використай цикл для розв'язання задічі.
 */

// const values = [2, 17, 94, 1, 23, 37];

// let min;

// for (i = 0; i < values.length; i++) {
//   if (i === 0) {
//     min = values[i];
//   } else (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log(min);

// -------------------------------------------------------------------------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//   const transformSplit = message.split(" "); // метод split() - з рядка робимо масив та розділяємо рядок по пробілам
//   console.log(transformSplit);
//   const res = transformSplit.join(); // метод join() - перетворюємо масив на рядок

//   const totalPrice = transformSplit.length * pricePerWord;
//   return totalPrice;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// ------------------------------------------------------------------------------------------------------------
//
/**
 * Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона поветрала масив
 * усіх аргументів, але в масиві вони повинні йти у зворотьому порядку. Використай цикл, або метод масиву toReversed(), який
 * застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.
 *
 */

// function createReversedArray() {
//   const arr = Array.from(arguments);
//   return arr.reverse();
// }

// console.log(createReversedArray(1, 2, 3, 4, 5));

// ----------------------------- ПСЕВДОМАСИВ arguments та Array.from --------------------------------------
//
// псевдомасиви не  мають методів масивів тому потрібно псевдомасив через змінну привести до масиву

// function foo() {
//   console.log(arguments);
//   const arr = Array.from(arguments);
//   console.log(Array.isArray(arguments)); // false якщо сутність не масив
//   console.log(Array.isArray(arr)); // true якщо сутність масив
// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 5);

// ----------------------------------------------------------------------------
//
/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// const add = function () {
//   // function declaration - в даному випадку не пишемо імя функції оскільки будемо викликати її за іменем змінної
//   const arr = Array.from(arguments);
//   let total = 0;
//   for (const item of arr) {
//     //перебираємо масив arr, в item буде зберігатись елемент масиву
//     total += item;
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(10, 20, 30, 4, 5));

//
// ---------------------- function expresion ------------------------------
//

// function add() {
//   console.log(add);
// }

// add();

// -------------------------------------------------------------------------

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * агрументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.
 * Псевдомасив не перетворюй на масив.
 */

// function alAverage() {
//   let total = 0;
//   for (i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total / arguments.length;
// }

// console.log(alAverage(1, 2, 3));
// console.log(alAverage(1, 2, 3, 10, 8, 3));
// console.log(alAverage(1, 2, 3, 17, 45, 53, 9));

// ---------------------------------------------------------------------------

/**
 * Напиши функцію  logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елементу масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍊", "🍇", "🍑", "🍌", "🍋"]);

// ---------------------------------------------------------------------------

/**
 * Напиши функцію printInfo(names, phones), яка виводить у консоль імя тателефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів
 * розділені комами.Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// function printInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(namesArr[i], phonesArr[i]);
//   }
// }

// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "380501111111, 380502222222, 380503333333, 380504444444"
// );

// ------------------------------------------------------------------------------

/**
 * Напиши функцію formatTime(totalMinutes) яка переведе значення totalMinutes
 * (кількість хвилин) у рядок у форматі годин та хвилин НН:ММ
 */

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   const doubleHours = String(hours).padStart(2, 0);
//   const doubleMinutes = String(minutes).padStart(2, 0);

//   // console.log(`${doubleHours}:${doubleMinutes}`);
//   return `${doubleHours}:${doubleMinutes}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(460));
// console.log(formatTime(1441));

// -----------------------------------------------------------------------------
/**
 * Створи функцію foo(array, count) та розділи масив на менші частини, які вказані
 * в змінній count
 *
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function foo(array, count) {
  const res = [];

  for (let i = 0; i < array.length; i += count) {
    const a = array.slice(i, i + count);
    // console.log(a);
    res.push(a);
  }

  return res;
}

console.log(foo(numbers, 3));

// ---------------------------------------------------------------------------------
