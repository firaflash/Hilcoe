//Min Numbrt From an array
function min_arr(){
    let arr = []
    let size = parseInt(prompt("Enter the size of the array?"))
    arr.push(parseInt(prompt("Enter a number?")))
    let min = arr[0]
    for (let i = 1; i < size; i++){
        let val = parseInt(prompt("Enter a number?"))
        if (val < min){
            min = val
        }
        arr.push(val)
    }
    return min
}

let array = [3,5,2,35,2,5,3]
function evens(arr,num){
    if (arr.length == 0){
        return []
    }
    let even = []
    for (let i = 0; i < arr.length; i++){
        if (i%2 == 0 && arr[i]%2 == 0){
            even.push(i)
        }
    }
    return even
}


//sum of cubed
function sumCubed(arr){
    let num = 0;
    let i =0;
    while(i<arr.length){
        num += arr[i] * arr[i] * arr[i];
        i++;
    }
    return num;
}

function checkWholeNo(arr){
        let num = 0;
    let i =0;
    while(i<arr.length){
        num += arr[i];
        i++;
    }
    num = num / arr.length;
    return Number.isInteger(num);
}

function multiple(arr){
    let num = 0;
    let i =0;
    while(i<arr.length){
        num += arr[i] * i;
        i++;
    }
    return num;
}

// function vanilla(arr){
// let num = String(arr[0])
//   for (let i = 0; i < arr.length; i++) {
//     let str = String(arr[i]);
//     if(str[i] != num) return false
//     for (let j = 1; j < str.length; j++){ 
    
//       if (str[j] !== str[0]) {
//         return false;
//       }
//     }
//   }
  
//   console.log("vanilla");
//   return true;
// }


//Better Version
function vanilla(arr){
    let base = String(arr[0])[0];

    for (let i = 0; i < arr.length; i++) {
        let str = String(arr[i]);

        for (let j = 0; j < str.length; j++) {
            if (str[j] !== base) {
                return false;
            }
        }
    }
    return true;
}


function special(arr){
    let i = 0;
    while (i < arr.length) {
        if (i % 2 === 0 && arr[i] % 2 !== 0) {
            return false;
        }
        i++;
    }
    return true;
}

console.log("===== DEBUG START =====");
//Min Number from an array
console.log("Min Num From an array:",  "=>", min_arr());

//even number and address
console.log("Even Number and Addres:", "=>", evens(array));


// sumCubed
let t1 = [1, 2, 3];
console.log("sumCubed:", t1, "=>", sumCubed(t1));

// checkWholeNo
let t2 = [2, 4, 6];
let t3 = [1, 2, 4];
console.log("checkWholeNo:", t2, "=>", checkWholeNo(t2));
console.log("checkWholeNo:", t3, "=>", checkWholeNo(t3));

// multiple
let t4 = [1, 2, 3, 4];
console.log("multiple:", t4, "=>", multiple(t4));

// vanilla
let t5 = [4, 44, 444];
let t6 = [4, 444, 4484];
console.log("vanilla:", t5, "=>", vanilla(t5));
console.log("vanilla:", t6, "=>", vanilla(t6));

// special
let t7 = [2, 3, 4, 5];
let t8 = [1, 3, 4, 6];
console.log("special:", t7, "=>", special(t7));
console.log("special:", t8, "=>", special(t8));

console.log("===== DEBUG END =====");

