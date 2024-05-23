// Цикл 1

document.write('Цикл 1 <br>');

for(let i = 10; i <= 20; i++) {
    document.write(i);
    if(i < 20) {
        document.write(", ")
    }
}

// Цикл 2

document.write('<br>');
document.write('<br>');
document.write('Цикл 2 <br>');

for(let i = 10; i <= 20; i++) {
    document.write(Math.pow(i, 2));
    if(i < 20) {
        document.write(", ")
    }
}

// Цикл 3

document.write('<br>');
document.write('<br>');
document.write('Цикл 3 <br>');

for(let i = 1; i <= 10; i++) {
    document.write(`7 * ${i} = ${7 * i} <br>`);
}

// Цикл 4

document.write('<br>');
document.write('<br>');
document.write('Цикл 4 <br>');

let sum = 0;

for(let i = 1; i <= 15; i++) {
   sum += i;
}
document.write(sum);


// Цикл 5

document.write('<br>');
document.write('<br>');
document.write('Цикл 5 <br>');

let extra = 1;

for(let i = 15; i <= 35; i++) {
    extra *= i;
}

document.write(extra);


// Цикл 6

document.write('<br>');
document.write('<br>');
document.write('Цикл 6 <br>');

let sum2 = 0;

for(let i = 1; i <= 500; i++) {
    sum2 += i;
}

let average = sum2 / 500;
document.write(average);


// Цикл 7

document.write('<br>');
document.write('<br>');
document.write('Цикл 7 <br>');

let sum3 = 0;

for(let i = 30; i <= 80; i++) {
    if(i % 2 === 0) {
        sum3 += i;
    } 
}

document.write(sum3);


// Цикл 8

document.write('<br>');
document.write('<br>');
document.write('Цикл 8 <br>');

let sum4 = 0;

for(let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        document.write(i + " ");
    }
}


// Цикл 9

document.write('<br>');
document.write('<br>');
document.write('Цикл 9 <br>');

let number = +prompt('Введіть натуральне число', 100);

for(let i = 0; i <= number; i++) {
    if(number % i === 0) {
        document.write(i + " ");
    }
}


// Цикл 10

document.write('<br>');
document.write('<br>');
document.write('Цикл 10 <br>');

let number2 = +prompt('Введіть натуральне число', 100);

for(let i = 0; i <= number2; i++) {
    if(number2 % i === 0 ) {
        if(i % 2 === 0) {
            document.write(i + " ");
        }
    }
}


// Цикл 11

document.write('<br>');
document.write('<br>');
document.write('Цикл 11 <br>');

let number3 = +prompt('Введіть натуральне число', 100);
let sum5 = 0;

for(let i = 0; i <= number3; i++) {
    if(number3 % i === 0 ) {
        if(i % 2 === 0) {
            sum5 += i;
        }
    }
}

document.write(sum5);


// Цикл 12

document.write('<br>');
document.write('<br>');
document.write('Цикл 12 <br>');

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        document.write(`${i} * ${j} = ${i * j} <br>`);
    }
    document.write("<br>");
}


// Цикл 13

document.write('<br>');
document.write('<br>');
document.write('Цикл 13 <br>');

for(let i = 20; i <= 30; i += 0.5) {
    document.write(i + ',');
}


// Цикл 14

document.write('<br>');
document.write('<br>');
document.write('Цикл 14 <br>');

for(let i = 10; i <= 100; i += 10) {
    let dollar = i * 27;
    document.write(dollar);
    if (i < 100) {
        document.write(", ");
    } else {
        document.write(".");
    }

}

// Цикл 15


document.write('<br>');
document.write('<br>');
document.write('Цикл 15 <br>');

let N = +prompt('Введіть число', 200);

for(let i = 1; i <= 100; i++) {
    if(Math.pow(i, 2) < N) {
        document.write(i + ", ");
    }
}


// Цикл 16

document.write('<br>');
document.write('<br>');
document.write('Цикл 16 <br>');

let num = +prompt('Введіть число', 3);
let simple = true;

for(let i = 2; i * i <= num; i++) {
    if(num % i === 0) {
        simple = false;
        break;
    } 
}

if (simple && num > 1) {
    document.write(`Число ${num} просте`);
} else {
    document.write(`Число ${num} непросте`);
}


// Цикл 17

document.write('<br>');
document.write('<br>');
document.write('Цикл 17 <br>');

let num2 = +prompt('Введіть число', 3);
let step = false;

for(let i = 0; Math.pow(3, i) <= num2; i++) {
    if(Math.pow(3, i) === num2) {
        step = true;
        break;
    } 
}

if (step) {
    document.write(`Число ${num2} зводиться`);
} else {
    document.write(`Число ${num2} незводиться`);
}