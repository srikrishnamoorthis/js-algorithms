function mergeSort(arr = []) {
    if (arr.length == 1)
        return arr;

    const midPoint = Math.floor(arr.length / 2);
    const left_arr = arr.splice(0, midPoint);
    const right_arr = arr;
    
    return merge(mergeSort(left_arr), mergeSort(right_arr));
}

function merge(left = [], right = []) {
    let sorted = [];
    for (let i = 0; left.length > 0 && right.length > 0; i++) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        }
        else {
            sorted.push(right.shift());
        }
   }
   return [...sorted, ...left, ...right];
}