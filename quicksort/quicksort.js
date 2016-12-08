

// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    var pivotValue = array[r],
        partitionIndex = p;
    for(var i=p; i<r; i++) {
        if (array[i] <= pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, r, partitionIndex);

    return partitionIndex;
};


var quickSort = function(array, p, r) {
    if (p < r) {
        var q = partition(array, p, r);
        quickSort(array, p, q-1);
        quickSort(array, q+1, r);
    }
};



var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);