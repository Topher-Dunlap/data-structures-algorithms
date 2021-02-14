// Tower of Hanoi: //// LINEAR TIME O(n)
    function TowerofHanoi(disks) {
        let rodA = disks;
        let rodB = [];
        let rodC = [];
        ticks=1

        for(let i = 0; i < rodA.length; i++){
            rodB.unshift(rodA[i]);
            ticks++;
        }
        for(let i = 0; i < rodB.length; i++){
            rodC.unshift(rodB[i]);
            ticks++;
        }

        return console.log("rodC: ", rodC, ticks)
    }
TowerofHanoi([1,2,3,4,5])


// dog recursion //// LINEAR TIME O(n)
function findDog(num, numList) {
    //Base case
    if (numList[0] = num){
        return ("match found!")
    }
    return findDog(num, numList.slice(1))
}
findDog(4, [1,5,7,3,2,6,4,7,8])


//isEven Recursion   ////O(n) Linear time as i needs to reduce value down to 1 or zero
function isEven(value) {

    if (value === 0) {
        return true;
    }
    else if (value === 1) {
        return false
    }
    else if (value > 0) {
        return isEven(value - 2)
    }
    else {
        return isEven(-value)
    }
    return isEven(value / 2)
}
isEven(7)


// doubleArrayValues recursion ///LINEAR O(n)
function doubleArrayValues(array) {

    array[0] *= 2;
    if (array.length === 1){
        return array[0]
    }
    return doubleArrayValues(array.slice(1));

}
doubleArrayValues([1,2,3,4])


///pairingArray Recursion ////LINEAR TIME
function pairingArray(array) {

    if (array.length === 2){
        return console.log(array[0] + ',' + array[1])
    }
    console.log(array[0] + ',' + array[1])
    return pairingArray(array.slice(1));
}

pairingArray([1,2,3,4])
