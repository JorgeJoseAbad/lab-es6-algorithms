/*jshint esversion: 6*/

/* Version test */

// 1) Define a function that takes an array with numbers and prints all the elements of the array, separated by " --- "
// ArrayFunctions.printSpecial([12, 33, 144, 122])
// 12 -- 33 -- 144 -- 122

/*made with ES6*/

class ArrayFunctions {
  constructor() {

  }
 //metodos staticos, sólo de la clase no de un objeto instanciado
  static printSpecial(arr){
    return arr.join(" --- ");
  }

  static doubleArray(array){
    return array.map((number)=>number*2);
  }

  static superPower(array){
    return array.reduce((sum,number,index)=>sum+(number*Math.pow(10,index)));
  }

 //metodos al prototipo, accesibles
  mergeSort(array) {
    if(array.length < 2) { return array; }

    let middle  = Math.floor(array.length / 2);
    let left    = array.slice(0, middle);
    let right   = array.slice(middle);

    return this.sortHalves(this.mergeSort(left), this.mergeSort(right));
  }

  sortHalves(left, right) {
    let array = [];

    //pone el valor mas pequeño en array luego devuelve array, left y right
    while(left.length && right.length) {
      if(left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }
    // array.slice() with no arguments is a trick to make a copy of the array
    // .concat is to smash all of the arrays together
    // ...maybe there's an ES6 way to do this?

    //return array.concat(left.slice()).concat(right.slice()); //ES5

    return [...array, ...left, ...right]; //ES6
  }

  bubbleSort(array) {
      const length = array.length;
      for (let i = (length - 1); i > 0; i--) {
          // Number of passes
          for (let j = (length - i); j > 0; j--) {
              // Compare the adjacent positions
              if (array[j] < array[j - 1]) {
                  // Swap the numbers
                  let tmp = array[j];
                  array[j] = array[j - 1];
                  array[j-1] = tmp;
              }
          }
      }
      return array;
  }

}


/* made with ES5

var ArrayFunctions = function (){}

  ArrayFunctions.printSpecial = function (array) {
    //return array.join(" --- ");
    var array2=[];
    var arrayString="";
    for (i=0; i<array.length; i++){

      array2.push(array[i].toString());
      if (i<array.length-1) {array2.push(" --- ");}

    }

    for (j=0; j<array.length*2-1; j++){
      arrayString=arrayString + array2[j];
    }

    array2.toString();
    console.log(array2);
    console.log(arrayString);
    return arrayString;
  };





// 2) Define a function that takes an array with numbers and returns another array where each element contains double each element in the array
// ArrayFunctions.doubleMyArray([10, 20, 35, 12])
// [20, 40, 70, 24]

ArrayFunctions.doubleArray = function(array){

  return array.map(function(number){
    console.log(number*2);
    return number * 2;
  });
};



// 3) Define a function that takes an array with numbers and returns the result of multiplying each element by ten to the power of the position it's in:
// ArrayFunctions.superPower([1,2,3,4,5])
// 54321
// explanation: (1 x 10^0) + (2 x 10^1) + (3 x 10^2) + (4 x 10^3) + (5 x 10^4)
// explanation: (1)        + (20)       + (300)      + (4000)     + (50000)

ArrayFunctions.superPower = function(array){
  return array.reduce(function(sum, number, index){
    return sum + (number * (Math.pow(10, index)));
  });
};
*/
//module.exports = ArrayFunctions;
let myArray = new ArrayFunctions();
let numbers = [12, 33, 144, 122];
let newArray = ArrayFunctions.printSpecial(numbers);
let twoArray = ArrayFunctions.doubleArray(numbers);
let threeArray = ArrayFunctions.superPower(numbers);
console.log(newArray);
console.log(twoArray);
console.log(threeArray);

var arrayDos = [12, 15, 30, 100, 0, 3, 6, 5, 10, 7, 9, 3, 2, 11];

let arraySort = new ArrayFunctions();
let arrayMergeSorted = arraySort.mergeSort(arrayDos);
let arrayMergeBubbled = arraySort.bubbleSort(arrayDos);

console.log(arrayMergeSorted);

console.log(arrayMergeBubbled);
