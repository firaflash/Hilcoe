// function readMatrix(rows , cols ,name){
//     let matrix = [];

//     for (let i = 0; i < rows; i++) {
//         matrix[i] = [];
//         for (let j = 0; j < cols; j++) {
//             matrix[i][j] = parseInt(
//                 prompt("Enter element " + name + "[" + i + "][" + j + "]:")
//             );
//         }
//     }
//     console.log("Inital Matrics: ",matrix);
//     return matrix;
// }

// function add(mA, mB) {
//     let added_matrix = [];
//     let rows = mA.length;
//     let cols = mA[0].length;

//     for (let i = 0; i < rows; i++) {
//         added_matrix[i] = []; // manually initialize row
//         for (let j = 0; j < cols; j++) {
//             added_matrix[i][j] = mA[i][j] + mB[i][j]; // assign by index
//         }
//     }
//     return added_matrix;
// }

// function sub(mA, mB) {
//     let subed_matrix = [];
//     let rows = mA.length;
//     let cols = mA[0].length;

//     for (let i = 0; i < rows; i++) {
//         subed_matrix[i] = [];
//         for (let j = 0; j < cols; j++) {
//             subed_matrix[i][j] = mA[i][j] - mB[i][j];
//         }
//     }
//     return subed_matrix;
// }

// function mul(mA, mB) {
//     let rowsA = mA.length;
//     let colsA = mA[0].length;
//     let colsB = mB[0].length;

//     let muled_matrix = [];

//     for (let i = 0; i < rowsA; i++) {
//         muled_matrix[i] = [];
//         for (let j = 0; j < colsB; j++) {
//             let sum = 0;
//             for (let k = 0; k < colsA; k++) {
//                 sum += mA[i][k] * mB[k][j];
//             }
//             muled_matrix[i][j] = sum;
//         }
//     }
//     return muled_matrix;
// }

// function transpose(mA) {
//     let rows = mA.length;
//     let cols = mA[0].length;

//     // Create a new transposed matrix to avoid in-place mutation issues
//     let transposed = [];

//     for (let i = 0; i < cols; i++) {
//         transposed[i] = [];
//         for (let j = 0; j < rows; j++) {
//             transposed[i][j] = mA[j][i];
//         }
//     }

//     return transposed;
// }
// function main() {
//     let rows = parseInt(prompt("Enter number of rows:"));
//     let cols = parseInt(prompt("Enter number of columns:"));

//     let A = readMatrix(rows, cols, "A");
//     let B = readMatrix(rows, cols, "B");

//     let choice = prompt(
//         "Choose operation:\nA - Add\nB - Subtract\nC - Multiply\nD - Transpose"
//     )

//     let result;
    
//     if (choice === "a") {
//         result = add(A, B);
//     } else if (choice === "b") {
//         result = sub(A, B);
//     } else if (choice === "c") {
//         result = mul(A, B);
//     } else if (choice === "d") {
//         result = transpose(A);
//     } else {
//         alert("Invalid choice");
//         return;
//     }

//     console.log(result);
// }

// main();

// white space beteen every instance of a lower character followed  immediately by another character
function indentWhiteSpace(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let current = str.charCodeAt(i);
        let next = str.charCodeAt(i + 1);
        result += str[i];

        if (current >= 90 && current <= 122 &&
            next >= 65 && next <= 90) {
            result += " ";
        }
    }

    console.log(result);
}

let str = "TheQuickBownFoxJumpOverThelazyDog";
indentWhiteSpace(str);

//Function That Moves All Capital Latter To The Front of A Word
function moveToFront(str) {
    let Caps = "";
    let Smalls = "";

    for (let i = 0; i < str.length; i++) {
        let current = str.charCodeAt(i);
        if(current >= 65 && current <=90){
            Caps+= str[i];
        }
        
        if (current >= 90 && current <= 122){
            Smalls += str[i];
        }
    }
    Caps += Smalls;
    console.log(Caps);
}
moveToFront("MoveMENT");
// Write a Function that takes the string and returns the middle character
//if the word length is odd
function middleChar(str){
    let val = str.length / 2

    if(str.length % 2 != 0){
        return str.charAt(val);
    }
    let res = ""
     res += str.charAt(val-1) + str.charAt(val++);
    return res
}
console.log(middleChar("daksd"));

//function 1-12 to string
// funct retrurns a century to a year
//that checks a date is valid or not
//js that checks palindrom Date

function monthToString(month) {
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  return month >= 1 && month <= 12 ? months[month - 1] : "Invalid month";
}


function isValidDate(day, month, year) {
  if (
    !Number.isInteger(day) ||
    !Number.isInteger(month) ||
    !Number.isInteger(year)
  ) return false;

  if (year < 1  || month < 1  || month > 12) return false;

  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
  ];

  return day >= 1 && day <= daysInMonth[month - 1];
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function findCentury(year) {
    if (year < 1) return "Invalid year";
    return Math.ceil(year / 100);
}

console.log("Century of 2025:", findCentury(2025));
console.log("Century of 1900:", findCentury(1900));


function isPalindromeDate(day, month, year) {
    if (!isValidDate(day, month, year)) return false;

    let dd = String(day).padStart(2, "0");
    let mm = String(month).padStart(2, "0");
    let yyyy = String(year);

    let dateStr = dd + mm + yyyy;
    let reversed = dateStr.split("").reverse().join("");

    return dateStr === reversed;
}

console.log("Palindrome Date (02/02/2020):", isPalindromeDate(2, 2, 2020));
console.log("Palindrome Date (12/03/2023):", isPalindromeDate(12, 3, 2023));
