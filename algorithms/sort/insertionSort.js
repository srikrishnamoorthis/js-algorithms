function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const ele = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > ele; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = ele;

        console.log(arr)
    }
    return arr;
}