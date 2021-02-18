function palindromePermutation(inputString) {
  // create a set to track characters we've seen
  const charSet = new Set();

  // iterate over each character by spitting into an array
  inputString.split('').forEach(char => {

    // remove from set if previously added
    if (charSet.has(char)) {
      charSet.delete(char);

    // add to set if not already present in set
    } else {
      charSet.add(char)
    }
  })

  // set should have 0 or 1 entry if is a palindrome
  return charSet.size <= 1;
}

palindromePermutation("north")



class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value){
        const MAX_LOAD_RATIO = 0.5;
        const SIZE_RATIO = 3;
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > MAX_LOAD_RATIO) {
            this._resize(this._capacity * SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);

        if(!this._hashTable[index]){
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        };
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned - meaning non-negative number.
        return hash >>> 0;
    }
}


const hashObjects = [
    {"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
    {"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
    {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven":"Arwen"},
    {"Ent": "Treebeard"}
];

function main() {
    const lotr = new HashMap;
    // hashObjects.map(obj => lotr.set(Object.entries(obj)))
    // hashObjects.map(obj =>
    //   Object.entries(obj).forEach(([key, value]) =>
    //     lotr.set(`${key}: ${value}`)
    //     )
    //   );

    lotr.set("Hobbit", "Bilbo")
    lotr.set("Hobbit", "frodo")
    lotr.set("Maiar", "The Necromancer")
    console.log(lotr.get("Maiar"))
}

main()
