let mathsEquation = '';

// Clearing the string

function clearEverything () {
    mathsEquation = '';
    console.log('cleared string')
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}

// Adding Numbers to the String

function digitOne () {
    mathsEquation = mathsEquation + '1';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitTwo () {
    mathsEquation = mathsEquation + '2';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitThree () {
    mathsEquation = mathsEquation + '3';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitFour () {
    mathsEquation = mathsEquation + '4';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitFive () {
    mathsEquation = mathsEquation + '5';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitSix () {
    mathsEquation = mathsEquation + '6';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitSeven () {
    mathsEquation = mathsEquation + '7';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitEight () {
    mathsEquation = mathsEquation + '8';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitNine () {
    mathsEquation = mathsEquation + '9';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitZero () {
    mathsEquation = mathsEquation + '0';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function digitDecimal () {
    mathsEquation = mathsEquation + '.';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}

// Math Functions

function addition () {
    mathsEquation = mathsEquation + ' + ';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function subtraction () {
    mathsEquation = mathsEquation + ' - ';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function multiplication () {
    mathsEquation = mathsEquation + ' * ';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function division () {
    mathsEquation = mathsEquation + '/';
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}
function doMaths () {
    mathsEquation = eval(mathsEquation);
    console.log(mathsEquation);
    document.querySelector('.js-result')
        .innerHTML = `${mathsEquation}`;
}