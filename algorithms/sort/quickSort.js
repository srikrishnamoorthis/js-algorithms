function quickSort(arr = []) {
    if (arr.length <= 1)
        return arr;

    const pivot = arr[0];
    const left_arr = [], right_arr = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot)
            left_arr.push(arr[i]);
        else 
            right_arr.push(arr[i]);
    }

    return [...quickSort(left_arr), pivot, ...quickSort(right_arr)];
}

const sorted = quickSort([5, 1, 4, 6, 2, 1, 9, 7, 3, 8]);