function HashTable(size = 5) {
    this.keyMap = new Array(size);
}
HashTable.prototype.RANDOM_VAL = 18539;

HashTable.prototype._hash = function (key) {
    var hashFunction = function (numericKey, multiple, size) {
        return (numericKey * multiple) % size;
    }

    if (Number.isFinite(key)) {
        return hashFunction(key);
    }

    if (typeof key === 'string' && !isNaN(Number(key))) {
        return hashFunction(Number(key), this.RANDOM_VAL, this.keyMap.length);
    }

    var tempKey = key;
    if (key === null) {
        tempKey = "null";
    }

    if (key === undefined) {
        tempKey = "undefined";
    }

    if (isNaN(key) || !isFinite(key)) {
        tempKey = "NaN";
    }

    if (typeof tempKey === 'string') {
        var numKey = 0;
        for (var i = 0; i < tempKey.length && i < 5; i++) {
            numKey += tempKey.charCodeAt(i);
        }

        return hashFunction(numKey, this.RANDOM_VAL, this.keyMap.length)
    }
}