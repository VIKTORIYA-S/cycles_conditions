'use strict'

// let age = prompt('Скільки вам років?');

// if (age <= 11) {
//     alert('Ви дитина!');
// } else if (age >=12 && age <= 17) {
//     alert('Ви підліток!');
// } else if (age >= 18 && age <= 59) {
//     alert('Ви дорослий!');
// } else {
//     alert('Ви пенсіонер!');
// }


function checkAge() {
let age = document.getElementById('number').value;
console.log(age);
    if (age == '') {
        alert('Введіть число!');
    } else if (age <= 11) {
        alert('Ви дитина!');
    } else if (age >=12 && age <= 17) {
        alert('Ви підліток!');
    } else if (age >= 18 && age <= 59) {
        alert('Ви дорослий!');
    } else {
        alert('Ви пенсіонер!');
    }

    document.getElementById('number').value = '';
}

document.getElementById('btn').onclick = checkAge;


function checkNumber() {
    let number = document.getElementById('number_1').value;
    console.log(number);
    if (number == '') {
        alert('Введіть число!');
    } else if (number < 0 || number > 9) {
        alert('Введіть число від 0 до 9!');
    }
    switch (number) {
        case '0':
            alert('Знак на клавіатурі )');
            break;
        case '1':
            alert('Знак на клавіатурі !');
            break;
        case '2':
            alert('Знак на клавіатурі @');
            break;
        case '3':
            alert('Знак на клавіатурі #');
            break;
        case '4':
            alert('Знак на клавіатурі $');
            break;
        case '5':
            alert('Знак на клавіатурі %');
            break;
        case '6':
            alert('Знак на клавіатурі ^');
            break;
        case '7':
            alert('Знак на клавіатурі &');
            break;
        case '8':
            alert('Знак на клавіатурі *');
            break;
        case '9':
            alert('Знак на клавіатурі (');
            break;
    }

    document.getElementById('number_1').value = '';
}

document.getElementById('btn_1').onclick = checkNumber;



let a = +prompt('Введіть початкове число');
let b = +prompt('Введіть кінцеве число');
function sum(start, end) {

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum = sum + i;
        console.log(i);
    }
    console.log(sum);
    return sum;
}
alert(sum(a, b));



function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');
alert(`НОД чисел ${num1} і ${num2} дорівнює ${gcd(num1, num2)}`);


// let number = prompt('Введіть число');
// let sum_1 = 0;
// for (let i = 1; i <= number; i++) {
//     if (number % 2 === 0) {
//     sum_1 =  2;
//     } else if (number % 3 === 0) {
//         sum_1 = sum_1 + 3;
//     } else if (number % 4 === 0) {
//         sum_1 = sum_1 + 4;
//     } else if (number % 5 === 0) {
//         sum_1 = sum_1 + 5;
//     } else if (number % 6 === 0) {
//         sum_1 = sum_1 + 6;
//     } else if (number % 7 === 0) {
//         sum_1 = sum_1 + 7;
//     } else if (number % 8 === 0) {
//         sum_1 = sum_1 + 8;
//     } else if (number % 9 === 0) {
//         sum_1 = sum_1 + 9;
//     } else if (number % 10 === 0) {
//         sum_1 = sum_1 + 10;
//     }
//     break;
// }
// alert(sum_1);
//     console.log(sum_1);

let number = +prompt('Введіть число');
let result = '';

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        result += i + ', ';
    }
}

alert(`Дільники числа ${number}: ${result.slice(0, -2)}`);






