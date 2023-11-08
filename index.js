// 1

// let a = 1;
// while (a <= 100) {
//   console.log(a);
//   a++;
// }


// 2

// let a = 100;

// while (a >= 1) {
//   console.log(a);
//   a--;
// }



// 3

// let a = 2;

// while (a <= 100) {
//   console.log(a);
//   a += 2;
// }


// 4

// let a = [];
// let count = 0;

// while (count < 10) {
//   a.push('x');
//   count++;
// }

// console.log(a);




// 5

//  let a = [];
// let b = 1;

//  while (b <= 10) {
//    a.push(b);
//    b++;
// }

// console.log(a);




// 6

// let a = [2, 5, 7, 12, 15, 3, 8];
// let b = 0;

// while (b < a.length) {
//   let currentNumber = a[b];
  
//   if (currentNumber > 0 && currentNumber < 10) {
//     console.log(currentNumber);
//   }
  
//   b++;
// }





// 7

// let numbers = [1, 2, 3, 4, 5, 6];
// let isFound = false;

// numbers.forEach(function(number) {
//   if(number === 5) {
//     isFound = true;
//   }
// });

// if(isFound) {
//   console.log("В массиве есть 5");
// } else {
//   console.log("В массиве нет 5");
// }





// 8

// let a = [3, 6, 8, 15, 13, 4, 9];
// let sum = 0;
// let b = 0;

// while (b < a.length) {
//   sum += a[b];
//   b++;
// }

// console.log("Сумма элементов массива: " + sum);



// 9

// let a = [67, 34, 35, 3, 16, 8, 5];
// let sumOfSquares = 0;
// let b = 0;

// while (b < a.length) {
//   sumOfSquares += a[b] ** 2;
//   b++;
// }

// console.log("Сумма квадратов элементов массива: " + sumOfSquares);





// 10

// function calculateAverage(array) {
//     let sum = 0;
//     let length = array.length;
//     array.forEach(function(number) {
//       sum += number;
//     });
//     return sum / length;
//   }
  
//   let numbers = [5, 10, 15, 20, 25];
//   let average = calculateAverage(numbers);
//   console.log("Среднее арифметическое: " + average);



// 11

// function factorial(n) {
//     let result = 1;
//     let i = 1;
//     while (i <= n) {
//       result *= i;
//       i++;
//     }
//     return result;
//   }
  
//   let number = 12;
//   let factorialNumber = factorial(number);
//   console.log("Факториал числа " + number + " равен " + factorialNumber);




// 12

// let arr = [];
// let num = 10;

// while (num >= 1) {
//   arr.push(num);
//   num--;
// }

// console.log(arr);



// 13

// let numbers = [4, -10, 12, -1, 7, -4];
// let sum = 0;

// numbers.forEach(function(number) {
//   if (number > 0) {
//     sum += number;
//   }
// });

// console.log(sum);


// 14

// let arr = [10, 20, 30, 50, 235, 3000];
// let a = 0;
// while (a < arr.length) {
//   let stringNum = arr[a].toString();
//   let firstDigit = stringNum.charAt(0);

//   if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
//     console.log(arr[a]);
//   }

//   a++;
// }

// 15

// let arr = [1, 2, 3, 4, 5];
// while (arr.length > 0) {
//   console.log(arr.pop());
// }


// 16

// let arr = [7, 2, 2, 4, 4];

// arr.forEach((el, index) => {
//   if (el == index) console.log(el)
// });


// 17

// num = [1, 2, 3, 4, 5];

// for (var i = 0; i < num.length; i++) {
//   document.write(num[i] + "<br>");
// }



// 18

// var numbers = [1, 2, 3, 4, 5];

// for (var i = 0; i < numbers.length; i++) {
//   document.write("<p>" + numbers[i] + "</p>");
// }


// 19

// var daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// for (var i = 0; i < daysOfWeek.length; i++) {
//   if (i === 5 || i === 6) {
//     document.write('<b>' + daysOfWeek[i] + '</b><br>');
//   } else {
//     document.write(daysOfWeek[i] + '<br>');
//   }
// }


// 20

// let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let day = new Date().getDay();
// for (let i = 0; i < daysOfWeek.length; i++) {
//   if (i!== day) {
//     console.log(daysOfWeek[i]);
//   } else {
//     console.log(`<span style="font-weight: bold;">${daysOfWeek[i]}</span>`);
//   }
// }


// 21

// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
//   };
  
//   for (let key in obj) {
//     obj[key] *= 1.1;
//   }
  
 
//   console.log(obj);


// 22

// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
//   };

// for (let key in obj) {
//     if (obj[key] <= 400) {
//       obj[key] += 100;
//     }
//   }
  
// console.log(obj);


// 23

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let obj = {};

// arr1.forEach((value, index) => {
//   obj[value] = arr2[index];
// });

// console.log(obj);


// 24

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

// let keysSum = Object.keys(obj).reduce((acc, key) => acc + parseInt(key), 0);
// let valuesSum = Object.values(obj).reduce((acc, value) => acc + value, 0);

// let result = keysSum / valuesSum;

// console.log(result);


// 25

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// let keys = Object.entries(obj).map(([key, value]) => key);
// let values = Object.entries(obj).map(([key, value]) => value);

// console.log(keys);
// console.log(values);


// 26

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };

// let result = Object.values(obj).filter(value => value.toString().startsWith('1') || value.toString().startsWith('2'));

// console.log(result);



// 27

// let arr = ['a', 'b', 'c', 'd', 'e'];

// let obj = arr.reduce((acc, value, index) => {
//   acc[index + 1] = value;
//   return acc;
// }, {});

// console.log(obj);


// 28

// let arr = ['a', 'b', 'c', 'd', 'e'];

// let obj = arr.reduce((acc, value, index) => {
//   acc[value] = index + 1;
//   return acc;
// }, {});

// console.log(obj);


