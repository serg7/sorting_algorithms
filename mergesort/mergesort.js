// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;

    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while (i < lowHalf.length && j < highHalf.length) {

        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;
        } else {
            array[k] = highHalf[j];
            j++;
        }

        k++;
    }

    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j++;
        k++;
    }

    while (i < lowHalf.length) {
        array[k] = lowHalf[i];
        i++;
        k++;
    }


};


// Takes in an array and recursively merge sorts it
var mergeSort = function(ms_array, p, r) {
    if (r-p+1  > 1) {
        var q = Math.floor((p+r)/2);
        mergeSort(ms_array, p, q);
        mergeSort(ms_array, q+1, r);
        merge(ms_array, p, q, r);
    }
};

var ms_array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(ms_array, 0, ms_array.length-1);

console.log("Array after merge sorting: " + ms_array);