///find replace /// LINEAR O(n)
function findReplace(string){
    repString = string.replace(/ /g, "%20");
    return repString
}
findReplace("hello this is a string")

////Filtering an array, LINEAR O(n)
function removeNumbers(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i] > 5){
            newArray.push(array[i])
        }
    }
    return newArray
}
removeNumbers([3,2,1,8,7,9,5])


///sumNumbers, LINEAR O(n)
function sumNumbers(array){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer)
}
sumNumbers([-3,2,1,-8,7,9,5])


///merge sort
function mergeArrays(array1, array2){
    const mergedArray = array1.concat(array2)
    return mergedArray.sort((a, b) => a - b);
}
mergeArrays([1,2,7,9,10],[2,3,6,8])


///replace Chars, Polynomial time O(n^k)
function removeCharacters(string, chars){
    let newString = ''
    let badChar = 0

    for (let i = 0; i < string.length; i++){
        badChar = 0;
        for (let j = 0; j < chars.length; j++){
            if(string[i] === chars[j]){
                badChar += 1;
            }
        }
        if(badChar === 1){
            newString += '';
        }
        else {
            newString += string[i];
        }
    }
    return newString
}
removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')


////Products
function Products(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array.reduce((a, b) => a * b) / array[i]);
    }
    return newArray
}

Products([1, 3, 9, 4])

