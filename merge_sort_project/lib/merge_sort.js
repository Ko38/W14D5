function merge(array1, array2) {
    let merged = [];
    
    while(array1.length > 0 || array2.length > 0) {
        let ele1 = array1.length > 0 ? array1[0] : Infinity;
        let ele2 = array2.length > 0 ? array2[0] : Infinity;
        let next = ele1 < ele2 ? array1.shift() : array2.shift();
        merged.push(next);
    }

    return merged;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIndex = Math.floor(array.length/2);
    let left = array.slice(0, midIndex);
    let right = array.slice(midIndex);

    return merge(mergeSort(left), mergeSort(right));
}

module.exports = {
    merge,
    mergeSort
};