///Counting sheep:
const sheepCounter = function(num) {
    // Base case
    if (num === 0) {
        return "All sheep jumped over the fence";
    }
    // General case
    console.log(num + ": All sheep jumped over the fence")
    return sheepCounter(num-1);

}

let num = 3;
console.log(sheepCounter(3));

///////////////////////////////////////////////////////////////
///Power calculator

function powerCalculator(int, expo) {
    // Base case
    if (expo <= 0) {
        return "exponent should be >= 0";
    }
    if (expo === 1){
        return int
    }
    // General case
    else {
        return int * powerCalculator(int, expo-1);
    }

}

console.log(powerCalculator(5, 3));

///////////////////////////////////////////////////////////////
///Reverse String


function reverseString(string) {
    if (string === "") {
        return "";
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}

console.log(reverseString("hello"));

///////////////////////////////////////////////////////////////
///Nth triangle

function nthTriangle(n) {
    if (n === 1) {
        return n;
    }
    else {
        return n + nthTriangle(n-1);
    }
}

console.log(nthTriangle(5));


///////////////////////////////////////////////////////////////
///fibonacci
function fibonacci(num) {

    if (num <= 2) {
        switch (num) {
            case 1: case 2: return 1;
            case 0: return 0;
            default: throw new Error("Please insert a positive integer");
        }  // End switch statement
    }

    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(15))


///////////////////////////////////////////////////////////////
///factorial
function factorial(num) {

    if (num <= 1) {
        return 1
    }

    return num * factorial(num - 1)
}

console.log(factorial(15))

///////////////////////////////////////////////////////////////
///anagrams
function anagrams(str) {
    if (str.length === 0) return "";
    if (str.length === 1) return str;
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        for (let j = 0; j < remainingChars.length; j++) {
            result.push(currentChar + anagrams(remainingChars)[j]);
        }
    }
    return result;
}

anagrams("east")