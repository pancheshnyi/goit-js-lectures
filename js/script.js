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

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function foo(array, count) {
//   const res = [];

//   for (let i = 0; i < array.length; i += count) {
//     const a = array.slice(i, i + count);
//     // console.log(a);
//     res.push(a);
//   }

//   return res;
// }

// console.log(foo(numbers, 3));

// ---------------------------------------------------------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ------------------------------------------------------------------------------

// function checkStorage(storage, item) {
//   let lowerItem = item.toLowerCase();

//   for (i = 0; i < storage.length; i++) {
//     if (storage.indexOf(lowerItem) !== -1) {
//       return `${lowerItem} is available to order!`;
//     } else {
//       return "Sorry! We are out of stock!";
//     }
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));

// ------------------------------------------------------------------------------

/**
 * Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
 * Доповни код функції:
 * Створи порожній масив для зберігання нового масиву.
 * Використай цикл for для ітерації кожного елемента у array1.
 * У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
 * Якщо він існує, то додай елемент до нового масиву.
 * Поверни наповнений масив спільних елементів як результат роботи функції.
 */

// function getCommonElements(array1, array2) {
//   let array = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }

//   return array;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]

// ------------------------------------------------ Параметри за замовчуванням -----------------------------------------------

// Функції можуть мати параметри зі значеннями за замовчуванням, тобто необов'язкові параметри.
// Ці значення використовуються в тому випадку, якщо функція викликається без передавання відповідного
// аргументу для цього параметра.Значенням за замовчуванням може бути будь - який тип даних.

// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!"
// greet(); // "Hello, Guest!"

// -------------------------------------------------------------------------------------------------------------------------

// Приклад із кількома параметрами

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//     // ...
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"

// -------------------------------------------------------------------------------------------------------------------------

/** Функція calculateTax(amount, taxRate) оголошує два параметри:
 * amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
 * taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
 * Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.
 */

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1)); //10
// console.log(calculateTax(200, 0.3)); //60
// console.log(calculateTax(100)); //20

// --------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------ ОБ'ЄКТИ ------------------------------------------------------------

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Henry Sibola"; //звертаємось до обєкту за ключем(імям властивості) - name
// console.log(user.name); // "Henry Sibola"
// console.log(user);

// ------------------------------------------------------------------------------------------------

// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"

// -------------------------------- Обчислювальні властивості --------------------------------------

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {};

// credentials[emailInputName] = "henry.carter@aptmail.com";
// credentials[passwordInputName] = "jqueryismyjam";

// console.log(credentials);

// ----------------------------------- Перебір об'єкта -------------------------------------------

// ------------------------------------ Цикл for...in --------------------------------------------
/**
 * На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати
 * циклами for або for...of.  * Для перебирання об'єктів використовується спеціальний цикл for...in,
 * який перебирає ключі об'єкта object.
 */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// -----------------------------------------------------------------------------------------------

/**
 * Перебери об'єкт apartment, використовуючи цикл for...in, і запиши
 * в масив keys всі його ключі, а в масив values всі значення його властивостей.
 */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// ------------------------------------- Метод Object.keys() -----------------------------------------------

/**
 * Скомбінувавши результат Object.keys() і цикл for...of,
 * можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.
 */

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо ключ і значення властивості.

//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// -----------------------------------------------------------------------------------

/**
 * Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
 * Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values
 * всі значення його властивостей.
 */

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// -------------------------------------------------------------------------------------

/**
 * Виконай рефакторинг функції countProps(object), замінивши перебір ключів
 * за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей.
 * Функція має повернути кількість властивостей в об'єкті object.
 *
 */

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps({})); //0
// console.log(countProps({ name: "Mango", age: 2 })); //2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3

// ------------------------------------------------------------------------------

// function countProps(object) {
//   return Object.keys(object).length;
// }

// console.log(countProps({})); //0
// console.log(countProps({ name: "Mango", age: 2 })); //2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3

// -----------------------------------------------------------------------------

// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;

//     const keys = Object.keys(obj);
//     for(const key of keys) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// console.log(foo(user));
// foo(user1);

// ------------------------------------------------------------------------------------------

// -------------------------------------------------- Масив об'єктів ---------------------------------
/**
 * - перебір масива;
 * - пошук об'єкта за значенням властивості;
 * - колекція значень властивості;
 */

// const friends = [
//   { name: "Ross", online: false },
//   { name: "Joey", online: true },
//   { name: "Chandler", online: false },
//   { name: "Phoebe", online: true },
//   { name: "Monica", online: true },
//   { name: "Rachel", online: false },
// ];

/**
 * Пошук друга за іменем
 */

// function findByName(arr, userName) {
//   for (const item of arr) {
//     if (item.name.toLowerCase() === userName.toLowerCase()) {
//       return item;
//     }
//   }
//   return "Not found";
// }

// console.log(findByName(friends, "Ross"));

/**
 *  Отримуємо імена всіх друзів
 */

// function getAllNanes(arr) {
//   const names = [];

//   for (const item of arr) {
//     names.push(item.name);
//   }
//   return names;
// }

// console.log(getAllNanes(friends));

/**
 * Отримаємо імена лише тих друзів, які зараз знаходяться онлайн
 */

// function getOnline(arr) {
//   const online = [];

//   for (const item of arr) {
//     if (item.online === true) {
//     if (item.online) { // true можна не первіряти оскільки якщо true ми й так попадаємо в цикл, а якщо false то ні
//       online.push(item);
//     }
//   }

//   return online;
// }

// console.log(getOnline(friends));

/**
 * Напишіть функцію calcTotalPrice (stones, stoneName)
 * яка приймає масив обєктів та рґдок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння
 * з таким імям, ціною та кількістю обєктів
 */

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let sum = 0;
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       sum += item.price * item.quantity;
//     }
//   }
//   return sum;
// }

// console.log(calcTotalPrice(stones, "Сапфір"));

/**
 * ---------------------------------------------- Об'єкти -------------------------------------------
 *
 * - методи об'єкта (функція в об'єкті називається методом)
 * - доступ до властивостей об'єкта через ключову слово this (this - це обєкт в контексті якого була викликана функція)
 * іншими словами це обєкт який стоїть зліва від функції в момент її виклику і туди збережуться обʼкт який викликав нашу функцію
 * - зміна за посиланням (зберегти посилання на функцію у властивість обєкту)
 */

// const playlist = {
//   name: "playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getName() {
//     return this.name;
//   },
// };

// const playlist2 = {
//   name: "playlist2",
//   rating: 4,
//   tracks: ["track-4", "track-5"],
// };

// playlist2.changeName = playlist.changeName;

// playlist.changeName("Playlist lalala 1"); // this = playlist
// playlist2.changeName("Playlist lululu 2"); // this = playlist2
// playlist.addTrack("track-4");
// playlist.updateRating(3);
// playlist.getName();

// console.log("Playlist", playlist);
// console.log("Playlist2", playlist2);
// console.log();

// ----------------------------------------------------------------------------------------------------------------

/**
 * Синтаксис spread і rest
 *
 * Залишкові параметри
 * Збір частини аргументів
 * Входження параметрів
 * Створення масиву
 * Створення обєкту
 */

// function foo(...rest) {
//   // збирає всі параметри, які приходять в нашу функцію і складе їх в масив
// console.log(rest);

// }

// foo(1, 2, 3);
// foo(1, 2, 3, 4, 50);

// --------------------------------------------------------------------------------------------------------------

// function foo(a, b, ...rest) {
//   // витягує з масиву певну кількість параметрів, а всі решту складає в масив
//   console.log(a, b);
//   console.log(rest);
// }

// foo(1, 2, 3, 4);
// foo(10, 20, 30, 40, 50);

// -------------------------------------------------------------------------------------------------------------

// function foo(...args) {
//   console.log(args);
// }

// foo({ x: 1, y: 2, c: 4 });

// ------------------------------------------------------------------------------------------------------------

// const numbers = [
//   1000,
//   ...[1, 2, 3], // спред оператор (витягує елементи з масиву)
//   2000,
//   ...[1, 2, 3], // спред оператор (витягує елементи з масиву)
//   3000,
// ];

// console.log(numbers);

// --------------------------------------------------------------------------------------------------------------

/**
 * Пошук найменшої або найбільшої температури (числа)
 */

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.min(...temps));
// console.log(Math.max(...temps));

// -----------------------------------------------------------------------------------------------------------

/**
 * Створення масиву і ти за посиланням
 */

// const a = [1, 2, 3];
// const b = [...a]; // витягне значення з масиву а і помістить його в новий масив
// з новим посиланням на масив в тілі яйого будуть зберігатись значення з масиву а

// a[0] = 100;

// console.log(a);
// console.log(b);

// -----------------------------------------------------------------------------------------------------------

/**
 * Поєднуємо кідбка масивів в один через spread
 */

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

// -----------------------------------------------------------------------------------------------------------

/**
 * Створення обєкту
 */

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, q: 3 };

// const objC = {
//   ...objA, // x: 1, y: 2
//   x: 10, // x: 10, y: 2
//   ...objB, // x: 0, y: 2, q: 3
//   y: 20, // x: 0, y: 20, q: 3
// };

// console.log(objC);

// -----------------------------------------------------------------------------------------------------------

/**
 * Оновлюємо налаштування користувача
 */

// const defaultSettigs = {
//   theme: "light",
//   showNotifications: true,
//   hideSidebar: falce,
// };

// const userSettings = {
//   theme: "light",
//   showNotifications: false,
//   hideSidebar: true,
// };

// const settings = {
//   ...defaultSettigs,
//   ...userSettings,
// };

// console.log(settings);

// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------

/**
 * Типів транзакцій всього два
 * Можна покласти або зняти гроші з рахунку
 */

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

/**
 * Кожна тразакція це обєкт із властивостями: id, type та amount
 */

// const account = {
// Поточний баланс рахунку
// balance: 0,

// Історія транзакцій

// transations: [],

/**
 * Метод створює та повертає обєкт транзакції.
 * Приймає суму та тип транзакції
 */

// createTransaction(amount, type) {},

/**
 * Метод, що відповідає за додавання суми до балансу.
 * Приймає суму транзакції
 * Викликає createTransaction для створення обєкту транзакції
 * після чого додає його до історії транзакції
 */

// deposit(amount) {},

/**
 * Метод, що відповідає за зняття суми з балансу.
 * Приймає суму транзакції.
 * Викликає createTransaction для створення обєкта транзакції
 * після чого додає його до історії транзакції.
 *
 * Якщо amount більше ніж поточний баланс, виводить повідомлення
 * про те, що зняття такої суми не можливе, недостатньо коштів.
 */

// withdraw(amount) {},

/**
 * Метод повертає поточний баланс
 */

// getBalance() {},

/**
 * Метод шукає та повертає обєкт транзакції по id
 */

// getTransactionDetails(id) {},

/**
 * Метод повертає кількіть коштів
 * певного типу транзакції з усієї історії транзакцій
 */

// getTransactionTotal(type) {},
// };

// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}

// ---------------------------------------------
/**
 * Функція makeMessage приймає один параметр ім'я піци, що доставляється, pizzaName та повертає рядок
 * з повідомленням клієнту.
 * Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback)
 * колбек-функцію і повертала результат її виклику. Функції deliverPizza або makePizza будуть
 * передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.
 */

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// ----------------------------------------------

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// --------------------------------------------------

// ------------------------------------------ Метод forEach(callback) ----------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------- Стрілочні функції -----------------------------------------

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// ------------------- Анонімні стрілочні функції відмінно підходять для колбеків--------------------------

// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

/**
 * Стрілочну колбек-функцію також можна оголошувати  окремо й передавати на неї посилання. Це варто робити,
 * якщо одна функція використовується в декількох місцях програми або якщо вона громіздка.
 */

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);

// ---------------------------------------------------------------------------------------------------------------

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };

// --------------------------------------------------------------------------------------------------------------

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const newStudent = students.map((student) => student.name);

// console.log(newStudent);

// --------------------------------------------------------------------------------------------------------------

/**
 * Доповни код функції getUsersWithAge(users, minAge, maxAge), щоб повернути масив користувачів,
 * вік (збережений у властивості age) яких потрапляє у заданий діапазон від minAge до maxAge.
 */

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// };

// --------------------------------------------------------------------------------------------------------------

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

// --------------------------------------------------------------------------------------------------------------

/**
 * Метод reduce()
 *
 * Метод reduce(callback, initialValue) використовується
 * для послідовної обробки кожного елемента масиву із збереженням проміжного результату.
 *
 * array.reduce((previousValue, element, index, array) => { }, initialValue);
 *
 * Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного».
 *
 */

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

// --------------------------------------------------------------------------------------------------------------

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// --------------------------------------------------------------------------------------------------------------

// const calculateTotalBalance = (users) => {
//   return users.reduce((sum, user) => sum + user.balance, 0);
// };

// --------------------------------------------------------------------------------------------------------------
/**
 * Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
 * Доповни код таким чином, щоб:
 * У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
 * У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
 * У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
 * У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
 */

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstAutor, secondAutor) =>
//   firstAutor.author.localeCompare(secondAutor.author)
// );

// const sortedByReversedAuthorName = books.toSorted((firstAutor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAutor.author)
// );

// const sortedByAscendingRating = books.toSorted(
//   (minRating, maxRating) => minRating.rating - maxRating.rating
// );

// const sortedByDescentingRating = books.toSorted(
//   (minRatind, maxRating) => maxRating.rating - minRatind.rating
// );

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

/**
 * Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
 * Для цього:
 * Відсортуємо масив методом toSorted(),
 * Після чого методом map() створимо масив значень властивості name з відсортованого масиву.
 */

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// На масиві викликаємо метод toSorted()
// До результату роботи методу toSorted() застосовуємо метод map()
// Змінній names присвоюється результат роботи методу map()

// Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
// До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
// На результаті методу filter() викликаємо toSorted()
// Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()

// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// Ланцюжок методів може бути довільної довжини, але зазвичай не більше 2-3 операцій.

// -------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

/**
 * Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
 *
 * Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
 * рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
 *
 */

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((item) => item.rating > MIN_BOOK_RATING)
//   .map((name) => name.author)
//   .toSorted((a, b) => a.localeCompare(b));

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

/**
 * Контекст виконання функції. Ключове слово this
 */

// const user = {
//   username: "Victor",
//   showName() {
//     // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };

// user.showName();

/**
 * Метод showName — це функція, яка викликається в контексті об'єкта user.
 * Під час її виклику в this записується посилання на об'єкт user, і ми можемо звертатися до його властивостей і методів.
 * Під час виклику методу user.showName() значенням this буде посилання на об’єкт user, у контексті якого вона була викликана.
 */

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice",
// };

// const greet = sayHello.bind(user);

// greet("Hello");

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

// "use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

// -----------------------------------------------------------------------------------

/**
 * У цьому випадку метод getFullName передається як колбек-функція callback і втрачає контекст об'єкта customer.
 * Це призводить до помилки, оскільки значення this у методі getFullName, коли він викликається як колбек
 * у глобальному контексті, є undefined. Звертаючись до властивостей firstName і lastName, ми отримаємо помилку,
 * оскільки undefined — це не об'єкт.
 *
 * Щоб уникнути цієї втрати контексту, можна використати метод bind(). Замість передачі оригінального методу
 * getFullName, ми передаємо його копію, до якої прив'язаний контекст об'єкта customer.
 */

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

// -----------------------------------------------------------------------------------
// ----------------------- Перебір власних властивостей -------------------------------
// --------------------------------цикл for...in--------------------------------------
// -----------------------------------------------------------------------------------

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }

/**
 * необхідно на кожній ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key)
 */

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

// -----------------------------------------------------------------------------------
// ----------------------- Перебір власних властивостей -------------------------------
// ------------------------------ цикл for...of ---------------------------------------

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------ THIS ------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/**
 * Контекст методу обєкта, але оголошена, як зовнішня функція
 */

// function showThis() {
//   console.log("this", this);
// }

// const obj = {
//   userName: "Alise",
// };

// obj.showUserThis = showThis; // посилання на функцію, буде властивістю обєкту obj

/**
 * Виклик без контексту, але оголошена, як метод об'єкту
 */

// const user = {
//   userName: "Petya",
//   showThis() {
//     console.log("this", this);
//   },
// };

// // user.showThis();

// const foo = user.showThis; // посилання на метод обєкту

// console.log(foo);

// -------------------------------- Контекст у callback-функціях ------------------------------------

// const user = {
//   userName: "Petya",
//   showThis() {
//     console.log("this", this);
//   },
// };

// function foo(callback) {
//   //
//   // callback = showThis() функція foo буде отримувати в себе колбек функцію (назва довільна, це параметр)
//   // console.log("this", this)
//   callback();
//   // !викликаємо функцію і хочемо побачити результат її роботи написаний в тілі функції showThis,
//   // !в результаті отримаємо window оскільки методи обєкту втрачають свій контекст коли передаються,
//   // !як колбек функція (втрачаємо контекст, посилання на user зникає і посилаємось на глобальний обєкт window)
// }

// foo(user.showThis);
// // !передаємо посилання на функцію showThis яке потрапляє в параметр callback (назва параметру колбек довільна).
// // !викликаємо функцію оскільки біля функції стоять круглі дужки

// --------------------------------------------------------------------------------------------------------------
/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменя і
 * розраховує та повертає загальну ввартість каменів з таким імям, ціною та
 * кількістю з властивістю stones
 */

// const chopShop = {
//   //є об'єкт в ньому є властивість, у властивості зберігається масив різних об'єктів
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find((item) => item.name === stoneName);
//     if (!stone) {
//       //якщо stone underfined не знайшли такого каменя, то для того, щоб попасти в if потрібно поставити ! заперечення
//       return `${stoneName} not found`;
//     }
//     // console.log(this.chopShop);
//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Sapphire"));

// -------------------------------------------------------------------------------

/**
 * Контекст виконання функції
 *
 * - метод call
 * - метод apply
 * - метод bind
 */

// function showThis(a, b, arr) {
//   console.log("this", this);
// }

// const obj = {
//   a: 5,
//   b: 10,
// };

// showThis.call(obj, "Alice", 2, [1, 2, 3]);

//для того щоб привязати obj до функції, яка його викликала, showThis() (як контекст, щоб там був обєкт obj)
//потрібно використати методи call, apply, bind

// все що буде після obj буде передано в функцію, як параметри

// showThis.apply(obj, ["Petya", 3, [1, 2, 3]]);

//різниця з call в передачі аргументів, тут аргументи передються в масиві незалежно від того як ми їх отримуємо в функції

// -----------------------------------------------------------------------------------------------------------------

function changeColor(newColor) {
  console.log("this", this);
  this.color = newColor;
}

const hat = {
  color: "black",
};

const sweater = {
  color: "green",
};

// ----------------------------------------- метод call -----------------------------------------------------------
// // changeColor.call(hat, "red");
// // console.log(hat);

// ----------------------------------------- метод apply ----------------------------------------------------------

// changeColor.apply(sweater, ["blue"]);
// console.log(sweater);

// ----------------------------------------- метод bind -----------------------------------------------------------
// метод не викликає одразу функцію, прив'язує до функції контекст і повертає копію цієї функції з прив'язаним контекстом

// const changeHatColor = changeColor.bind(hat, "red"); // перший спосіб передачі аргументів

// const changeHatColor = changeColor.bind(hat);

// changeHatColor("yellow"); // другий спосіб передачі аргументів в новостворену функцію, під час виклику
// console.log(hat);

// --------------------------------------- КЛАСИ ------------------------------------------------------
/**
 * Класи
 * - Оголошення класу
 * - Конструктор класу
 * - Методи класу
 * - Прототип екземпляру
 * - Приватні властивості
 * - Геттери і сеттери
 * - Статичні властивості
 */

// ------------------------------------------ Приклад 1 ------------------------------------------------

class Car {
  #price; // приватна властивість доступна тільки в тілі об'єкту

  // дані які ми вказуємо під час створення екземпляру класу потраплять, як параметр в конструктор
  // конструктор визивається з новоствореного об'єкту
  constructor(obj) {
    // назава параметру може бути любою
    this.brand = obj.brand; //this.brand -> в даному випадку brand це назва властивості яка буде створена в об'єкті
    this.model = obj.model;
    this.#price = obj.price;
  }

  // ------------------------------------------------------------------------------------
  // перший сценарій доступу до приватних даних через створення методів
  // дані методи доцільно використовувати з складними даними - масивами та об'єктами
  // ------------------------------------------------------------------------------------

  getPrice() {
    return this.#price;
  }

  changePrice(newPrice) {
    this.#price = newPrice;
  }

  // ------------------------------------------------------------------------------------
  // другий сценарій - геттери і сеттери (для примітивних даних)
  // ------------------------------------------------------------------------------------

  get price() {
    // геттер існує, щоб ми могли отритмати значення приватної властивості
    return this.#price;
  }

  set price(newPrice) {
    if (this.#checkType(newPrice, "number")) {
      this.#price += newPrice;
      return;
    }
    console.log("Ooops!");
  }

  #checkType(data, type) {
    // приватна функція для перевірки типів даних
    if (typeof data !== type) {
      return false;
      // якщо typeof не дорівнює типу який ми отримали поверне false в іншому випадку поверти true
    }
    return true;
  }
}

//створюємо об'єкт на основі класу

const bmw = new Car({ brand: "BMW", model: "X5", price: 70000 }); // bmw.constructor()
// пишемо оператор new і ім'я класу()
// та створюємо обєкт який буде екземпляром класу Car
// коли властивостей багато, то краще їх передавати, як об'єкт
// Car("BMW", "X5", 70000)
// Car({ brand: "BMW", model: "X5", price: 70000 })

const audi = new Car({ brand: "Audi", model: "Q7", price: 50000 }); //audi.constructor()

bmw.changePrice(8000);
console.log(bmw.getPrice());

bmw.price = 5000; // звертаємо до сеттера і передаємо нове значення price
console.log(bmw.price); // звертаємось до геттера і отримуємо значення price

//-------------------------------------------------------------------------------------------------------------
/**
 * ------------------------------------------- DOM ------------------------------------------------------------
 */

const image = document.querySelector(".image");

console.log(image.src);
console.log(image.alt);

image.src = "https://picsum.photos/id/13/640/480";
image.alt = "River bank";

//--------------------------------------- Доступ до властивостей ------------------------------------------------

const link = document.querySelector(".link");
console.log(link.classList);

link.href = "https://neo.goit.global";

//--------------------------------------- Властивість textContent ------------------------------------------------

const el = document.querySelector(".text");

el.textContent = "Username: Poly"; // властивість textContent можна як читати, так і змінювати

const hasActiveClass = link.classList.contains("is-active"); // метод очікує аргументом рядок з іменем класу
// та повертає true або false, залежно від наявності класу className в елемента

link.classList.add("special"); // метод очікує аргументом рядок з іменем класу та додає клас className
// до списку класів елемента

link.classList.remove("is-active"); // метод очікує аргументом рядок з іменем класу та видаляє клас className
// зі списку класів елемента

link.classList.toggle("is-active"); // метод працює як перемикач: якщо клас className відсутній, то додає
// його в кінець списку класів і навпаки, якщо клас className присутній — видаляє його

link.classList.replace("special", "regular"); // метод очікує 2 аргументи рядка (перший — стара назва класу,
// другий — нова назва класу) та замінює існуючий клас oldClassName на вказаний newClassName

// -------------------------------------- Властивість style ----------------------------------------------

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal"; // властивість style використовується для читання та зміни вбудованих стилів
button.style.fontSize = "24px";
button.style.textAlign = "center";
// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які зазвичай використовуються
// в CSS,тобто background-color перетворюється на backgroundColor

// ------------------------------ Метод element.hasAttribute(nameAttribute) ---------------------------------------

const image = document.querySelector(".image");

console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false

// ------------------------------ Метод element.getAttribute(nameAttribute) ---------------------------------------

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// ------------------------------ Метод element.setAttribute(nameAttribute, value) ---------------------------------------

image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature

// ------------------------------ Власні атрибути ---------------------------------------

// ---------------------------------- data-action ---------------------------------------

const saveBtn = document.querySelector('button[data-action="save"]');
const closeBtn = document.querySelector('button[data-action="close"]');

// ---------------------------- Отримання значень ---------------------------------------
// ----------------------------------- dataset ------------------------------------------

console.log(saveBtn.dataset.action); // "save"
console.log(closeBtn.dataset.action); // "close"

//-------------------------------- Зміна значень ------------------------------------------
// Змінити значення існуючого data-атрибута або додати новий можна так само, як і будь-якої
// іншої властивості об'єкта в JavaScript. Щоб це зробити, треба отримати доступ до DOM-елемента,
// а потім змінити/задати значення властивості в об'єкті dataset

// Змінюємо значення data-action для кнопки saveBtn
saveBtn.dataset.action = "update";

// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "admin";

// Перевіримо нові значення
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"

//-------------------------------- Створення елементів ------------------------------------------

/**
 * вибирати або змінювати вже існуючі елементи
 * видаляти елементи
 * створювати нові елементи й додавати їх у документ
 */

// document.createElement(tagName)
// Після створення елемента heading отримуємо посилання на його об’єкт у пам'яті.
// З цього моменту можна звертатися до властивостей цього об’єкта і змінювати їх
// ще до того, як вставимо цей елемент у DOM.

const heading = document.createElement("h1");
headding.classList.add("title");
heading.textContent = "This is a heading";
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "https://picsum.photos/id/11/320/240";
image.alt = "Nature";
console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

//-------------------------------- Додавання елементів ------------------------------------------

const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

//-------------------------------- innerHTML ------------------------------------------

/**
 * Властивість innerHTML доступна і для читання, і для запису. Якщо записати в неї рядок
 * з HTML-тегами, то браузер під час парсингу рядка перетворить його у валідні елементи
 * і додасть у DOM-дерево.
 */

// ------------------------------------------------------------------------------------

const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title';

// -------------------------------------------------------------------------------------
/**
 * Однотипна (шаблонна) розмітка створюється із масиву даних.
 * Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML-тегами,
 * який потім записуємо в innerHTML елемента. Якщо ти будеш це робити за допомогою методу map(),
 * не забудь, що він повертає масив. Отже, перед тим як додавати розмітку в DOM, цей масив треба
 * привести до рядка за допомогою методу join()
 */

/**
 * <section>
 * <h2>Popular technologies</h2>
 * <ul class="list"></ul>
 * </section>
 */

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;

/**
 * Нове значення для element.innerHTML повністю видалить і повторно створить
 * усіх нащадків елемента element. Якщо елемент спочатку не був порожній, то
 * виникнуть додаткові витрати на повторне створення вже існуючої розмітки, а це погано.
 *
 * Використовуй властивість element.innerHTML для додавання тільки у разі,
 * — коли елемент element порожній або
 * — якщо потрібно повністю замінити вміст element
 */

// ------------------------------- insertAdjacentHTML() ---------------------------------

const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];

const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// ---------------------------------------------------------------------------------------
// ----------------------------------- Події ---------------------------------------------
// ---------------------------------------------------------------------------------------

// ---------------------------- Метод addEventListener() ---------------------------------

const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("The button was pressed and now the next image will appear");
});

/**
 * Для колбека можна використовувати не анонімну, а окрему функцію, передаючи на неї
 * посилання, як це реалізовано у прикладі нижче. Іменована функція підвищує читабельність коду.
 */

const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};

button.addEventListener("click", handleClick);

// ---------------------------------------------------------------------------------------
/**
 * На одному елементі може бути будь-яка кількість обробників подій, навіть подій одного типу.
 * Колбек-функції будуть викликатися в порядку їхньої реєстрації в коді.
 *
 * <button id="single"
 * class="btn">SINGLE CALLBACK</button>
 * <hr>
 * <button id="multiple" class="btn">MULTIPLE
 * CALLBACKS</button>
 *
 */

const singleBtn = document.querySelector("#single");

const handleClick = () => {
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================

const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);

// -------------------------------------------- submit -------------------------------------------------------

/**
 * Подія submit відбувається безпосередньо на формі (тег form),
 * тому обробник подій слід встановлювати саме на ній.
 * Подію submit можна застосувати для валідації (перевірки) форми перед відправленням,
 * оскільки на об'єкті події існує багато корисних властивостей, пов'язаних з елементами форми.
 */

/**
 * <form class="form" autocomplete="off">
 * <input type="text" name="login" placeholder="Login">
 * <input type="password" name="password" placeholder="Password">
 * <button class="btn" type="submit">Register</button>
 * </form>
 */

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

/**
 * Властивість elements DOM-елемента форми містить об'єкт з посиланнями на всі її елементи,
 * які мають атрибут name. Саме тому в прикладі ми отримуємо значення полів, звертаючись
 * до event.target.elements.login.value і event.target.elements.password.value.
 */

/**
 *
 * Подія click
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квардатик зміщуватись на 50px по діагоналі
 *
 */

// const btn = document.querySelector(".js-click");
// const box = document.querySelector(".js-box");

// btn.addEventListener("click", handleClick);
// box.addEventListener("click", handleClick);

// let step = 0;

// function handleClick() {
//   step += 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// }

// --------------------------------------------------------------------------------------------

/**
 *
 * - Подія change
 * - Подія input
 * - Подія blur
 *
 * Виводить в консоль все, що користувач вводить в input
 */

// -------------------------------------- Подія change ------------------------------------------

const jsCheckbox = document.querySelector(".js-checkbox");

jsCheckbox.addEventListener("change", () => {
  console.log("ok");
});

// -------------------------------------- Подія input ------------------------------------------

const userName = document.querySelector("js-user-name");

userName.addEventListener("input", (event) => {
  console.log(event.target.value);
  // event це об'єкт події
  // target - посилання на наш елемент в якому відюулась подія
  // value - з неї, з її інтерактивного поля ми будемо отримувати введені дані
  // можна написати userName.value і отримати ці ж дані, але робити так не потрібно (для розуміння)
});

// ----------------------------------------------------------------------------------------------

/**
 * Користувач вводить в input своє імя після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

const userName = document.querySelector("js-user-name");

userName.addEventListener("focus", () => {
  console.log("ok");
});

userName.addEventListener("blur", (event) => {
  const name = event.target.value;

  alert(`Hello ${name}`);
});

// -----------------------------------------------------------------------------------------------

/**
 *
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector(".js-form");

form.addEventListener("submit", hadleSubmit);

function hadleSubmit(event) {
  event.preventDefault(); // вимикає дефолтні значення браузера (при відправленні форми сторінка не перезавантажується)

  const elements = event.target.elements;

  const info = {
    email: elements.email.value,
    password: elements.password.value,
    comment: elements.comment.value,
  };

  console.log(info);
  event.target.reset();
}

// -----------------------------------------------------------------------------------------------------------------

/**
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Власивості key та code
 */

document.addEventListener("keypress", handkeKeyPress);

function handkeKeyPress(event) {
  console.log(event.key);
}

// ------------------------------------------------------------------------------------------------------------------

document.addEventListener("keydown", handkeKeyPress); // подія коли натискаємо клавішу

function handkeKeyPress(event) {
  console.log(event.key);
  console.log(event.code);
}

// ------------------------------------------------------------------------------------------------------------------

document.addEventListener("keyup", handleKeyPress); // подія коли відпускаємо клавішу

function handleKeyPress(event) {
  if (event.code === "Escape") {
    console.log("Escape");
  } else {
    console.log("Ooops");
  }
}

/**
 * Обробка комбінацій клавіш
 */

document.addEventListener("keydown", handleKeysPress);

function handleKeysPress(event) {
  if (event.ctrlKey && event.code === "KeyC") {
    event.preventDefault();
  }
}

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

/**
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */

// const box = document.querySelector(".js-box");

// box.addEventListener("mouseenter", onMouseEnter);
// box.addEventListener("mouseleave", onMouseLeave);

// function onMouseEnter() {
//   console.log("mouseenter");
//   box.classList.add("box--active"); // створюємо новий клас
// }

// function onMouseLeave() {
//   console.log("mouseleave");
//   box.classList.remove("box--active"); // видаляємо клас
// }

// --------------------------------------------------------------------------------------------------

// const box = document.querySelector(".js-box");

// box.addEventListener("mouseover", onMouseOver);
// box.addEventListener("mouseout", onMouseOut);

// function onMouseOver() {
//   console.log("onMouseOver");
// }

// function onMouseOut() {
//   console.log("onMouseOut");
// }

// ---------------------------------------------------------------------------------------------------

const box = document.querySelector(".js-box");

box.addEventListener("mousemove", onMouseMove);

function onMouseMove(event) {
  console.log(event);
}

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку
 * і картинки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в
 * тегу селект обрати що він обрав Марку або Модель
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто
 * які збігаються з критеріями пошуку
 */

/**
 *
 * фрагмент html коду, форма з якою працюємо
 *
 * <form action="submit" class="js-form car-search">
 *   <div class="car-group">
 *     <input type="text" name="query" class="car-input" placeholder="Пошук">
 *   </div>
 *   <div class="car-group">
 *     <select name="options" class="car-select">
 *       <option value="car">Марка</option>
 *       <option value="type">Модель</option>
 *    </select>
 *   </div>
 *   <button type="submit" class="car-button">Пошук</button>
 * </form>
 *
 */

const form = document.querySelector(".js-form");
const container = document.querySelector(".js-list");

form.addEventListener("submit", handleSubmit);

function createMarkup(arr) {
  return arr
    .map(
      (car) => `
    <li class="car-card">
    <img scr="${car.img}" alt="${car.type}" class="car-image"/>
    <h2 class="car-title">${car.car}</h2>
    <h3 class="car-type">${car.type}</h3>
    <p class="car-price">${car.price}</p>
    </li>
  `
    )
    .join("");
}

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "25px";

container.insertAdjacentHTML("beforeend", createMarkup(cars)); // додає в кінець

function handleSubmit(event) {
  event.preventDefault();

  const query = event.target.elements.query.value;
  const options = event.target.elements.options.value;

  const result = cars.filter(
    // (item) => item[options].toLowerCase() === query.toLowerCase;
    (item) => item[options].toLowerCase.includes(query.toLowerCase())
  );

  container.innerHTML = createMarkup(result); // видаляє попередні записи і формує нові
}
