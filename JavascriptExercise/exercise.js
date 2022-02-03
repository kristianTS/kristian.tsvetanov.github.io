// 1-exercise
/*
function daytime() {
    let timeAndDate = new Date();

    console.log('The current time is: ' + timeAndDate);
}
daytime();


// 2-exercise
window.print()


// 3- exercise

function monthDayYears() {
    let today = new Date();
    
    let month = today.getMonth();
    let day = today.getDay();
    let year = today.getFullYear();
    
    if (day <= 9) {
        console.log(`${month}/0${day}/${year}`);
    } else {
        console.log(`${month}/${day}/${year}`);
    }
    
}
monthDayYears();



// 4- exercise

function triangleArea(num1, num2, num3) {
    let area = (num1 + num2 + num3) / 2;
    let sumАre1 = (area - num1);
    let sumАre2 = (area - num2);
    let sumАre3 = (area - num3)
    
    let result = Math.sqrt(area * (sumАre1 * sumАre2 * sumАre3))
    console.log(result.toFixed(2));
}
triangleArea(5, 6, 7)

// 6- exercise


function leap(year) {
    if (year % 100 === 0 || year % 400 === 0 || year % 4 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
leap(2012)

// 7- exercise

for (let years = 2014; years <= 2050; years++) {
    let date = new Date(years, 0, 1)
    
    if (date.getDay() === 0) {
        console.log("1st January is being a Sunday  " + years);
    }
}

// 8- exercise


let user = prompt();

let takeRandom = Math.ceil(Math.random() * 10);
console.log(takeRandom)

if (user == takeRandom) {
    console.log(`Good Work`)
} else {
    console.log(`Not Matched`)
}

// exercise 9 
today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
" days left until Christmas!");




// exercise 11 


function celius(fahret) {
    let celiuS = (fahret - 32) * 5 / 9
    console.log(celiuS);
}

function fahret(celis) {
    let fahret = (celis * 9 / 5) + 32;
    console.log(fahret);
}
fahret(60);
celius(45);


// exercise 15

function takeNumber(number) {
    if (number <= 13) {
        return 13 - number;
    }
    if (number > 13) {
        return (number - 13) * 2
    }
}
console.log(takeNumber(32));


// exercise 16

function sumingTheNumber(number1, number2) {
    if (number1 != number2) {
        return (number1 + number2);
    } else {
        return (number1 + number2) * 3;
    }
}
console.log(sumingTheNumber(50, 120));
console.log(sumingTheNumber(20, 20));


// exercise 17

function suming(number) {
    if (number <= 19) {
        return 19 - number;
    } else if (number > 19) {
        return (number - 19) * 3;
    } else {
        return false;
    }
}
console.log(suming(12))
console.log(suming(19))

// exercise 18

function compare(x, y) {
    if (x === 50 || y === 50 || (x + y === 50)) {
        return true;
    } else {
        return false;
    }
    
}


// exercise 19
console.log(suming(22))
console.log(compare(50, 50))
console.log(compare(20, 50))
console.log(compare(20, 20))
console.log(compare(20, 30))

function compare2(number) {
    if (number >= 20 && number <= 100 && number <= 400) {
        return true;
    } else {
        return false;
    }
}
console.log(compare2(10));
console.log(compare2(90));
console.log(compare2(99));
console.log(compare2(199));
console.log(compare2(200));



// exercise 20


function compareTrueOrFalse(x, y) {
    if ((x > 0 || y > 0) && (x < 0 || y < 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(compareTrueOrFalse(2, 2));
console.log(compareTrueOrFalse(-2, 2));
console.log(compareTrueOrFalse(2, -2));
console.log(compareTrueOrFalse(-2, -2));

// exercise 21


function remove(str) {
    if (str.slice(0, 2) === 'Py') {
        return (str)
    } else {
        return (`Py${str}`)
    }
}


console.log(remove("Python"));
console.log(remove("thon"));


//exercise 22


function conver(str, charposition) {
    let sum1 = str.slice(0, charposition);
    let sum2 = str.slice(charposition + 1, str.length);
    let suming = sum1 + sum2
    console.log(suming);
}
conver("Python", 0);
conver("Python", 3);
conver("Python", 5);


//exercise 23


function firstAndSecond(str) {
    if (str.length <= 1) {
        return str;
    }
    
    let middle = str.slice(1, str.length - 1);
    let suming = str.charAt(str.length - 1) + middle + str.charAt(0)
    return suming;
}

console.log(firstAndSecond('a'));
console.log(firstAndSecond('ab'));
console.log(firstAndSecond('abc'));

// output a ba cba



//exercise 24
function niz(str) {
    let first = str.slice(0, 1);
    let suming = first + str + first;
    return suming;
}
console.log(niz('a'));
console.log(niz('ab'));
console.log(niz('abc'));

exercise 25

function compare(x) {
    if (x % 3 === 0 || x % 7 === 0) {
        return true;
    }
    return false;
}

console.log(compare(12));
console.log(compare(14));
console.log(compare(10));
console.log(compare(11));

exercise 26


function conver(str) {
    if (str.length >= 3) {
        let takeBackCharacters = str.slice(str.length - 3);
        return takeBackCharacters + str + takeBackCharacters;
    } else {
        return false;
    }
}
console.log(conver("abc"));
console.log(conver("ab"));
console.log(conver("abcd"));


exercise 27

function compare(str) {
    if (str.slice(0, 4) === 'Java') {
        return true;
    } else {
        return false;
    }
}
console.log(compare("JavaScript"));
console.log(compare("Java"));
console.log(compare("Python"));


exercise 28

function compateTwoNumbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        return true;
    } else {
        return false;
    }
}
console.log(compateTwoNumbers(12, 101));
console.log(compateTwoNumbers(52, 80));
console.log(compateTwoNumbers(15, 99));

exercise 29


function compateTwoNumbers(x, y, c) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (c >= 50 && c <= 99)) {
        return true;
    } else {
        return false;
    }
}
console.log(compateTwoNumbers(50, 90, 99));
console.log(compateTwoNumbers(5, 9, 199));
console.log(compateTwoNumbers(65, 89, 199));
console.log(compateTwoNumbers(65, 9, 199));

exercise 30


function check_script(str) {
    if (str.length < 6) {
        return str;
    }
    
    if (str.substring(10, 4) === 'Script') {
        return str = str.substring(0, 4) + str.substring(10, str.length);
    }
    return str;
}
console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));

exercise 31

function thebbigerNumber(num1, num2, num3) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else if (num2 > num3) {
        return num2
    } else if (num3 > num2) {
        return num3
    } else if (num1 > num3) {
        return num1
    } else if (num3 > num1) {
        return num3
    }
}
console.log(thebbigerNumber(1, 0, 1));
console.log(thebbigerNumber(0, -10, -20));
console.log(thebbigerNumber(1000, 510, 440));


exercise 32


function caltip(x, y) {
    let firstSide = Math.abs(100 - x);
    let secondSide = Math.abs(100 - y);
    
    if (firstSide < secondSide) {
        return x;
    } else if (secondSide < firstSide) {
        return y;
    } else {
        return false;
    }
    
}
console.log(caltip(90, 89));
console.log(caltip(-90, -89));
console.log(caltip(90, 90));

exercise 33

function range(x, y) {
    if ((x >= 40 && x <= 60) && (y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100) && (y >= 70 && y <= 100)) {
        return true;
    } else {
        return false;
    }
}
console.log(range(44, 56));
console.log(range(70, 95));
console.log(range(50, 89));

exercise 34

function coner(x, y) {
    if ((x >= 40 && x <= 60) && (y >= 40 && y <= 60)) {
        if (x === y) {
            return 'They are same'
        } else if (x > y) {
            return x;
        } else {
            return y;
        }
    } else {
        return "Numbers don't fit in range";
        
    }
}

console.log(coner(45, 60));
console.log(coner(25, 60));
console.log(coner(45, 80));

exrcise 35


function check_char(str1, sym) {
    
    for (let i = 0; i < str1.length; i++) {
        if ((str1.charAt(i) === sym) && (i >= 1 && i <= 3)) {
            return true;
        }
    }
    return false
}

console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));


exrcise 36

function digitCheck(x, y, z) {
    if (x > 0 && y > 0 && z > 0) {
        return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    } else {
        return false;
    }
}
console.log(digitCheck(20, 30, 400));
console.log(digitCheck(-20, 30, 400));
console.log(digitCheck(20, -30, 400));
console.log(digitCheck(20, 30, -400));

exrcise 37


function niz(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    return str.substring(0, 3).toLowerCase() + str.substring(3, str.length);
    
    
}
console.log(niz("PYTHON"));
console.log(niz("Py"));
console.log(niz("JAVASCRIPT"));

exrcise 38
function finalExam(grade, examp) {
    if (examp) {
        if (grade >= 89 && grade >= 90 && grade <= 100) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(finalExam("78", " "));
console.log(finalExam("89", "true "));
console.log(finalExam("99", "true "));

exrcise 39

function cum(sum1, sum2) {
    let result = sum1 + sum2;
    if ((result >= 50 && result <= 80)) {
        return 65;
    }
    return 80;
}
console.log(cum(30, 20));
console.log(cum(90, 80));

exercise 41

function tipCalc(sum1, sum2) {
    if ((sum1 === 8 || sum2 === 8)) {
        return true;
    }
    if (sum1 + sum2 == 8 || Math.abs(sum1 - sum2) == 8) {
        return true;
    }
    return false;
}
console.log(tipCalc(7, 8));
console.log(tipCalc(16, 8));
console.log(tipCalc(24, 32));
console.log(tipCalc(40, 33));



exerci 41 next time we make with massive with vancho


function calpt(a, b, c) {
    if (a === b && a === c && b === c) {
        return 30;
    } else if (a == b || b == c) {
        return 40;
    } else {
        return 20;
    }
}
console.log(calpt(8, 8, 8));
console.log(calpt(8, 8, 18));
console.log(calpt(8, 7, 18));


exercise 43

function lastDigit(int1, int2, int3) {
    if (int1 < 0 || int2 < 0 || int3 < 0) {
        return false;
    }
    
    let x = int1[int1.length - 1];
    if ((int1, int2, int3) % 10 == x) {
        return true;
    } else {
        return false;
    }
    
    
}
console.log(lastDigit("22", "32", "42"));
console.log(lastDigit("102", "302", "2"));
console.log(lastDigit("20", "22", "45"));

exercise 44

function lessby20_others(x, y, z) {
    return (x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < y || z < x));
}
console.log(lessby20_others(23, 45, 10));
console.log(lessby20_others(23, 23, 10));
console.log(lessby20_others(21, 66, 75));

exrcise 45
function calti(x, y) {
    return (x === 15 || y === 15) || (x + y === 15) || (Math.abs(x - y) === 15);
}
console.log(calti(15, 9));
console.log(calti(25, 15));
console.log(calti(7, 8));
console.log(calti(25, 10));
console.log(calti(5, 9));
console.log(calti(7, 9));
console.log(calti(9, 25));
exercise 46

function choiceTheNumber(x, y) {
    if (x < 0 || y < 0) {
        return false;
    } else if (!((x % 7 === 0 || x % 11 === 0) && (y % 7 === 0 || y % 11 === 0))) {
        return ((x % 7 === 0 || x % 11 === 0) || (y % 7 === 0 || y % 11 === 0));
    }
    return false;
}
console.log(choiceTheNumber(14, 21));
console.log(choiceTheNumber(14, 20));
console.log(choiceTheNumber(16, 20));

exercise 47
function compater(num) {
    if (num <= 40 || num > 10000) {
        return true;
    } else {
        return false;
    }
}
console.log(compater(40, 4000, 45));
console.log(compater(80, 320, 79));
console.log(compater(89, 4000, 30));


48 exercise

function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString("w3resource"));
console.log(reverseString("www"));
console.log(reverseString("JavaScript"));

 49 exercise
function letterChanges(toCode) {
    
    for (let i = 0; i < toCode.length; i++) {
        if (64 < toCode.charCodeAt(i) && toCode.charCodeAt(i) < 91) {
            toCode = toCode.replace(toCode.charAt(i), String.fromCharCode(toCode.charCodeAt(i) + 1));
        }
        if (96 < toCode.charCodeAt(i) && toCode.charCodeAt(i) < 123) {
            toCode = toCode.replace(toCode.charAt(i), String.fromCharCode(toCode.charCodeAt(i) + 1));
        }
    }
    return toCode;
}
console.log(letterChanges('Python'));

50 exercise




function capital_letter(str) {
    str = str.split(" ");
    
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1, str[3]);
    }
    
    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

exercer 52


function spacer(str) {
    str = str.split('');
    let a = 0;
    let b = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == String.fromCharCode(97)) {
            a += 1;
        }
        if (str[i] == String.fromCharCode(98)) {
            b += 1
        }
    }
}
console.log(spacer('chainbook'));

exercise 55
function eaul(str) {
    let firstp = 0;
    let secondt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == String.fromCharCode(112)) {
            firstp += 1;
        }
        if (str[i] == String.fromCharCode(116)) {
            secondt += 1;
        }
    }
    if (firstp == secondt) {
        return true;
    } else {
        return false;
    }
}

console.log(eaul("paattpss"));
console.log(eaul("paatps"));

exercise 56
function division_string(n1, n2) {
    
    n1 = 80;
    n2 = 6;
    
    let div = Math.round(n1 / n2).toString();
    let res = div.split("");
    
    console.log(res);
}
division_string()

exercise 57

exercise 60

function firstAndSecond(str1) {
    let backResult = str1.slice(1, str1.length - 1);
    return backResult;
}
console.log(firstAndSecond('JavaScript'));

exercise 61


function concatesTwoStrings(str1, str2) {
    let firstString = str1.slice(1, str1.length);
    let secondString = str2.slice(1, str2.length)
    let result = firstString + secondString;
    return result;
}
console.log(concatesTwoStrings("PHP", 'JS'));
console.log(concatesTwoStrings("A", 'B'));
console.log(concatesTwoStrings("AA", 'BB'));

exercise 62.


function moveTofrist(str) {
    if (str.length >= 3) {
        let result = str.slice(str.length - 3)
        let finalresult = result + str.slice(0, str.length - 3);
        console.log(finalresult);
    } else {
        console.log(str)
    }
}

moveTofrist('Python')
function stringCreator(str) {
    if (!(str % 2 == 0)) {
        let mid = (str.length + 1) / 2;
        return str.slice(mid - 2, mid + 1)
    }
}
console.log(stringCreator('softUni'));
console.log(stringCreator('HTML5'));
console.log(stringCreator('Python'));
console.log(stringCreator('PHP'));
console.log(stringCreator('Exercises'));

exrcise 64


function removeNiz(str, str2) {
    let result = Math.min(str.length, str2.length)

    let firstNiz = str.slice(str.length - result)
    let secondNiz = str2.slice(str2.length - result)

    let final = firstNiz + secondNiz;
    console.log(final);
}
removeNiz("Python", "JS");
removeNiz("ab", "cdef");

exercise 65

function checkScript(str) {
    if (str.length >= 6) {
        if (str.slice(str.length - 6) == "Script") {
            return true;
        } else {
            return false
        }
    }
}
console.log(checkScript('JavaScript'))
console.log(checkScript('Java Script'))
console.log(checkScript('Java Scripts'))

exercise 66
 
function check(str) {
    if (str.slice(0, 3) == "New" || str.slice(0, 3) == "Los") {
        console.log(str);
    } else {
        console.log('Empty')
    }
}
check('New York');
check('Los Angeles');
check('London');

exercise 67

function check(str) {
    if (str[0] == 'P') {
        return str.slice(1, str.length - 1);
    } else {
        return str
    }
}
console.log(check("PythonP"));
console.log(check("Python"));
console.log(check("JavaScript"));

exercise 69
function arr(int) {
    let result = 0;
    for (let i = 0; i < int.length; i++) {
        result += int[i];
    }
    return result;
}
console.log(arr([10, 32, 20]))
console.log(arr([5, 7, 9]))
console.log(arr([0, 8, -11]))

exercise 70

function array(arr) {
    arr.push(arr[0])
    arr.shift()
    return arr;
}
console.log(array([3, 4, 5]))
console.log(array([0, -1, 2]))
console.log(array([7, 6, 5]))

function thirdNumber(arr) {
    if (arr[0] == arr[arr.length - 1]) {
        return true;
    } else {
        return false
    }
}
console.log(thirdNumber([10, 20, 30]));
console.log(thirdNumber([10, 20, 30, 10]));
console.log(thirdNumber([20, 20, 20]));

function reverse(n) {
    return n.reverse();
}
console.log(reverse([5, 4, 3]));


// 20,30,40
// 40,40,40

function found(arr) {
    if (arr[0] > arr[arr.length - 1]) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[0];
        }
        return arr;
    }
    if (arr[0] < arr[arr.length - 1]) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[arr.length - 1];
        }
        return arr;
    }
    return false;
}

console.log(found([40, 30, 20]));

function check(arr1, arr2) {
    let CheckBigger = {
        first: arr1[1],
        second: arr2[1]
    }
    return [CheckBigger.first, CheckBigger.second]
}
console.log(check([1, 2, 3], [1, 4, 6]))
console.log(check([1, 8, 3], [1, 44, 6]))
console.log(check([1, 6, 3], [1, 52, 6]))
console.log(check([1, 22, 3], [1, 6, 6]))


exercise 76

function check(arr) {
    let emptyArray = [];
    emptyArray.push(arr[0], arr[arr.length - 1])
    return emptyArray;
}
console.log(check([20, 20, 4, 30]))
console.log(check([5, 2, 5, 7, 8]))
console.log(check([17, 12, 5, 34, 78]))

exercise 77

function checker1to1(arr) {
    if (arr.indexOf(1) != -1 || arr.indexOf(3) != -1) {
        return true;
    } else {
        return false;
    }
}
console.log(checker1to1([1, 5]))
console.log(checker1to1([2, 3]))
console.log(checker1to1([7, 5]))

exercise 78

function cheking(arr) {
    if (arr.indexOf(1) == -1 && arr.indexOf(3) == -1) {
        return true
    } else {
        return false
    }
}

console.log(cheking([7, 8]))
console.log(cheking([3, 2]))
console.log(cheking([0, 1]))

function checker(arra) {
    let first = 0;
    let second = 0
    for (let i = 0; i < arra.length; i++) {
        if (arra[i] != 30) {
            first++;
        }
        if (arra[i] != 40) {
            second++;
        }
    }
    if (first != 2) {
        return true
    }
    if (second != 2) {
        return true;
    }
    return false;
}
console.log(checker([40, 40]))
console.log(checker([40, 40]))
console.log(checker([20, 20]))
console.log(checker([30]))

80 exercise

function change(arr) {
    let first = arr.shift();
    let second = arr.pop();
    let result = second + "," + arr + "," + first;
    return result;
}
console.log(change([0, 2, 1]))
// FIrst variant with string
function spli(num) {
    let suming = num.split("");
    let first = Number(suming[0]);
    let second = Number(suming[1]);
    
    for (let i = 0; i < suming.length; i++) {
        return Number(num[0]) + Number(num[1])
    }
}
console.log(spli("25"));

//second with Number

function spli(num) {
    num = num.toString().split("");
    return Math.floor(Number(num[0]) + Math.floor(Number(num[1])))
}
console.log(spli(503));
let num1 = '922';
let num2 = '111';

let first = Number(num1[2]) + Number(num2[2]);
let second = Number(num1[1]) + Number(num2[1]);
let third = Number(num1[0]) + Number(num2[0]);

if (third > 9) {
    third = third.toString().split('');
    third = third[1];
    third = Number(third);
}
if (third == 0) {
    third++;
    third = third.toString();
    third = third.slice(2);
    
    
}
console.log(third, second, first);

exercise 83

function foundNiz(array, array2) {
    let suming = array.toString().split(' ');
    let suming2 = array2.toString().split(' ');
    for (let i = 0; i < suming.length; i++) {
        if (suming[i].length > suming2[i].length) {
            return `The winner is suming1 with ${suming[i].length}`;
        } else {
            return `The winner is suming2 with ${suming2[i].length}`;
        }
    }
}

console.log(foundNiz(['aaa', 'aaaa', 'aaaaa', 'aaaaaa'], ['aaaa', 'aaaaa', 'aaaaaaa', 'aaaaaaaaaa']))

exercise 84

function alphabet(str) {
    let alphabeta = str.split('');
    for (let i = 0; i < alphabeta.length; i++) {
        let result = alphabeta[i].charCodeAt() - 'a'.charCodeAt() + 1 % 26;
        if (result) {
            alphabeta[i] = String.fromCharCode(result + 'a'.charCodeAt())
        }
    }
    return alphabeta.join(" ");
}
console.log(alphabet("abcdxyz"))
function alphabet(str) {
    let alphabeta = str.split('');
    for (let i = 0; i < alphabeta.length; i++) {
        let result = alphabeta[i].charCodeAt() - 'a'.charCodeAt() + 1 % 26;
        if (result) {
            alphabeta[i] = String.fromCharCode(result + 'a'.charCodeAt())
        }
    }
    return alphabeta.join(" ");
}
console.log(alphabet("abcdxyz"))

function check(array) {
    let result = [0, 0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            if (i % 2 == 0) {
                result[0] += array[i];
            } else {
                result[1] += array[i]
            }
        }
    }
    return result;
}
console.log(check([1, 3, 6, 2, 5, 10]))


function array_checking(arra1, arra2) {
    
    for (var i = 0; i < arra1.length; i++) {
        for (var j = i; j < arra1.length; j++) {
            var result = true;
            var temp = arra1[i];
            arra1[i] = arra1[j];
            arra1[j] = temp;
            for (var k = 0; k < arra1.length; k++) {
                if (arra1[k] !== arra2[k]) {
                    result = false;
                    break;
                }
            }
            if (result) {
                return true;
            }
            arra1[j] = arra1[i];
            arra1[i] = temp;
        }
    }
    return false;
}

exercise 88

function divide(arr1, arr2, arr3) {
    
    if (arr1 % arr3 == arr2 % arr3) {
        return true;
    } else {
        return false;
    }
}

console.log(divide(10, 25, 5))
console.log(divide(10, 20, 5))
console.log(divide(10, 20, 4))

execise 90

function foundTheBiger(array, k) {
    for (let i = 0; i < k; i++) {
        let maximumIndex = i,
        tmp = array[i];
        
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > array[maximumIndex]) {
                maximumIndex = j;
            }
        }
        array[i] = array[maximumIndex];
        array[maximumIndex] = tmp;
    }
    return array[k - 1]
}
console.log(foundTheBiger([1, 2, 6, 4, 5], 3))
console.log(foundTheBiger([-10, -25, -47, -36, 0], 1))

exercise 91


function thebiigersum(array, k) {
    let result = 0;
    let temp_sum = 0;
    for (let i = 0; i < k - 1; i++) {
        temp_sum += array[i];
    }
    for (let i = k - 1; i < array.length; i++) {
        temp_sum += array[i];
        if (temp_sum > result) {
            result = temp_sum;
        }
        temp_sum -= array[i - k + 1]
    }
    return result;
}
console.log(thebiigersum([1, 2, 3, 14, 5], 2))
console.log(thebiigersum([2, 3, 5, 1, 6], 3))
console.log(thebiigersum([9, 3, 5, 1, 7], 2))

exercise 92
'use strict'
/*
let days = new Date();

let hours = 24;
let minutes = 60;
let seconds = 60;
let oneMiles = 1000;

let oneday = hours * minutes * seconds * oneMiles;

let cristmas = new Date(days.getFullYear(), 11, 25);

if (days.getMonth() === 11 && days.getDay() === 25) {
    cristmas.setFullYear(cristmas.getFullYear() + 1);
}

let howManyDays = cristmas.getTime() - days.getTime();
let howManyDaysLeft = howManyDays / oneday;

console.log(`${Math.ceil(howManyDaysLeft)} is time to cristmast`)


//10
function myFunctionMultiplay() {
    number1 = document.getElementById('firstNumber').value;
    number2 = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = number1 * number2;
}
function myFunctionDivide() {
    number1 = document.getElementById('firstNumber').value;
    number2 = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = number1 / number2;
}

//11
function fahren(fahren) {
    let celius = (fahren - 32) * 5 / 9;
    console.log(celius);
}

function celius(celius) {
    let fahren = celius * 9 / 5 + 32;
    console.log(fahren);
}

fahren(45);
celius(60);

function diffrence(n) {
    if (n <= 13) {
        return 13 - n;
    } else {
        return (n - 13) * 2;
    }
}
console.log(diffrence(34))

function checkTwoNumbers(number1, number2) {
    let possitive = Number(true);
    let negative = Number(false);
    
    if (number1 <= negative || number2 <= negative) {
        console.log(`The number is negative: ${number1} ${number2}`)
    } else if (number1 >= possitive || number2 >= possitive) {
        console.log(`The number is possitive ${number1} ${number2}`)
    } else {
        console.log(`We are the champions`)
    }
    
}
checkTwoNumbers(2, 2);
checkTwoNumbers(8, 7);

const newString = `Py`;
const ourName = 'Python';

if (newString === ourName.slice(0, 2)) {
    console.log(`True  ${ourName}`);
} else {
    console.log(`False ${newString}${ourName}`);
}


function first_last(word) {
    if (word.length <= 1) {
        return word;
    }
    newWord = word.slice(1, word.length - 1);
    return (word.charAt(word.length - 1)) + newWord + word.charAt(0);
}
console.log(first_last('asd'));
console.log(first_last('ab'));
console.log(first_last('abc'));


function backToFront(number) {
    let Thefirst = number.substring(0, 1).toLowerCase();
    
    return Thefirst + number + Thefirst;
}
console.log(backToFront('Ivan'));


const newString = `Java`;
const ourName = 'JavaScript';

if (newString === ourName.slice(0, 4)) {
    console.log(`True  ${ourName}`);
    console.log(true)
} else {
    console.log(`False ${newString}${ourName}`);
    console.log(false)
}

console.log(`-----`)


function calculate(string) {
    let firstWord = string.slice(0, 4);
    if (firstWord === 'Java') {
        return true
    } else {
        return false;
    }
}
console.log(calculate("JavaScript"));
console.log(calculate("Java"));
console.log(calculate("C#"));

function range(num1, num2) {
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 || num2 <= 99)) {
        return true;
    } else {
        return false;
    }
}

console.log(range(101, 98))
console.log(range(52, 80))
console.log(range(15, 99))

function check_script(str) {
    if (str.length < 6) {
        return str;
    }
    let result_str = str;
    
    if (str.substring(10, 4) == 'Script') {
        
        result_str = str.substring(0, 10) + str.substring(10, str.length);
        
    }
    return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));
//31
function thebigger(number1, number2, number3) {
    if (number1 > number2 || number1 > number3) {
        console.log(number1)
    } else if (number2 > number1 || number2 > number3) {
        console.log(number2)
    } else if (number3 > number1 || number3 > number2) {
        console.log(number3)
    } else {
        console.log(number1, number2, number3)
    }
}

thebigger(1, 0, 1);
thebigger(0, -10, -20);
thebigger(1000, 510, 440);

//32

let nearestTo100 = function(x, y) {
    
    if (x != y) {
        let firstX = Math.abs(x - 100);
        let firstY = Math.abs(y - 100);
        
        if (firstX < firstY) {
            console.log(x)
        } else if (firstY < firstX) {
            console.log(y)
        }
    } else {
        console.log(`This is false`)
    }
    
}
nearestTo100(90, 80);
nearestTo100(-90, -89);
nearestTo100(90, 90);

function range(num1, num2) {
    if ((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
    (num1 >= 70 && num1 <= 100 && num2 >= 70 & num2 <= 100)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
range(44, 56);
range(70, 95);
range(50, 89);


function biggerNumer(num1, num2) {
    if ((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)) {
        if (num1 > num2) {
            console.log(num1);
        } else {
            console.log(num2);
        }
    } else {
        console.log(`Try again, is not in range`);
    }
}
biggerNumer(45, 60);
biggerNumer(25, 60);
biggerNumer(45, 80);

function last_digit(x, y, z) {
    if ((x > 0) && y > 0 && z > 0) {
        return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    } else
    return false;
}

console.log(last_digit(20, 30, 400));
console.log(last_digit(-20, 30, 400));
console.log(last_digit(20, -30, 400));
console.log(last_digit(20, 30, -400));

function convert(nameOfString) {
    if (nameOfString.length < 3) {
        return nameOfString.toUpperCase();
    }
    
    let beging = nameOfString.slice(0, 3).toLowerCase();
    let back = nameOfString.slice(3, nameOfString.length);
    return beging + back;
    
}

console.log(convert('Python'))
console.log(convert('PY'))
console.log(convert('JAVAScript'))

function grad(grade, examp) {
    if (examp) {
        return grade >= 90;
    } else {
        return (grade >= 89 && grade <= 100);
    }
}
console.log(grad("78", " "));
console.log(grad("89", "true "));
console.log(grad("99", "true "));

let calctip = function(a, b) {
    let firstNumber = Number(a);
    let secondNumber = Number(b);
    
    let sumOfNumbers = firstNumber + secondNumber;
    
    if (sumOfNumbers >= 50 && sumOfNumbers <= 80) {
        return 65;
    } else {
        return 80;
    }
}
console.log(calctip(30, 20));
console.log(calctip(90, 80));

function checking(x, y) {
    if (x === 8 || y === 8) {
        return true;
    }
    
    if (x + y === 8 || Math.abs(x - y) === 8) {
        return true;
    }
    
    return false;
}

console.log(checking(7, 8));
console.log(checking(16, 8));
console.log(checking(24, 32));
console.log(checking(17, 18));

function threeNumbers(a, b, c) {
    if ((a === b && a === c && b === c)) {
        return 30;
    } else if (a === b || b === c || a === c) {
        return 40;
    } else {
        return 20;
    }
}
console.log(threeNumbers(8, 8, 8));
console.log(threeNumbers(8, 8, 18));
console.log(threeNumbers(8, 7, 18));

function reverseString(str) {
    
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
console.log(reverseString('kristian'))

function greater(num1, num2, num3) {
    if ((num1 >= 20 && num1 < num2 || num1 < num3) ||
    (num2 >= 20 && num2 < num1 || num1 < num3) ||
    (num3 >= 20 && num3 < num2 || num1 < num1)) {
        return true;
    } else {
        return false;
    }
}
console.log(greater(23, 45, 10));
console.log(greater(23, 23, 10));
console.log(greater(21, 66, 75));

function giveTrue(a, b) {
    if ((a === 15 || b === 15)) {
        return true;
    }
    if (a + b === 15 || Math.abs(a - b) === 15) {
        return true;
    }
    return false;
    
}

console.log(giveTrue(15, 9));
console.log(giveTrue(25, 15));
console.log(giveTrue(7, 8));
console.log(giveTrue(25, 10));
console.log(giveTrue(5, 9));
console.log(giveTrue(7, 9));
console.log(giveTrue(9, 25));

function conver(num1, num2, num3) {
    if ((num1 === 30 || num2 === 30 || num3 === 30)) {
        return true;
    }
    if (num1 + num2 + num3 === 30 || Math.abs(num1 - num2 - num3) === 30) {
        return true;
    }
    return false;
}
console.log(conver(10, 10, 10))
console.log(conver(5, 5, 220))
console.log(conver(10, 302, 30))
console.log(conver(10, 10, 50))

function sum(strinG) {
    strinG = strinG.split("");
    for (let i = 0; i < strinG.length; i++) {
        strinG[i] = strinG[i][0].toUpperCase() + strinG[i].slice(1)
    }
    return strinG.join("");
}
console.log(sum("Write a JavaScript program to capitalize the first letter of each word of a given string."));


function convert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    let result = hours + ":" + minutes;
    console.log(result);
}
convert(1441);

56exercise



function letterChanges(toCode) {
    
    for (let i = 0; i < toCode.length; i++) {
        if (64 < toCode.charCodeAt(i) && toCode.charCodeAt(i) < 91) {
            toCode = toCode.replace(toCode.charAt(i), String.fromCharCode(toCode.charCodeAt(i) + 1));
        }
        if (96 < toCode.charCodeAt(i) && toCode.charCodeAt(i) < 123) {
            toCode = toCode.replace(toCode.charAt(i), String.fromCharCode(toCode.charCodeAt(i) + 1));
        }
    }
    
    
    return toCode;
}
console.log(letterChanges('Python'));
function convert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    let result = hours + ":" + minutes;
    console.log(result);
}
convert(71);

document.querySelector('.btn1').addEventListener('click', function() {
    
    let firstNumber = document.querySelector('.firstNumber').value;
    let secondNumber = document.querySelector('.secondNumber').value;
    
    let area = firstNumber * secondNumber;
    
    if (area % 2 === 0) {
        let result = firstNumber % 2 === 0;
        document.querySelector('.result').textContent = result;
    } else {
        console.log(secondNumber)
        
    }
})

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


function factorial(n) {
    if ((n === 0) || (n === 1))
    return 1;
    else
    return (n * factorial(n - 1));
}
console.log(factorial(5))

let objectPerson = {
    namesOfPersons: ['Kris', 'Miglena', 'Borislava', 'Tsvetan', 'Martin', 'Zlatka', 'Sasho'],
    adress: ['Bregalnica', 'Bregalnica2', 'Bregalnica3', 'Bregalnica4', 'Bregalnica5'],
    functTp: function(namesOfPerSonsPosition, adressPositon) {
        return [this.namesOfPersons[namesOfPerSonsPosition], this.adress[adressPositon]]
    }
}

const [firstPosition, adressCourse] = objectPerson.functTp(1, 3);
console.log(firstPosition, adressCourse);
const metadata = {
    title: 'Scratchpad',
    translations: [{
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:4223:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
    }],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // rename
    translations: [{
        title: localeTitle, // rename
    }, ],
} = metadata;

let {
    translations: [{ last_edit: lros }]
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
console.log(lros); // "JavaScript-Umgebung"

let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 }
a; // 10
b; // 20
rest; // { c: 30, d: 40 }

console.log(a, b, rest)

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
*/