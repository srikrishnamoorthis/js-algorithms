
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[maxIndex] < arr[j]) {
                maxIndex = j;
            }
        }

        [arr[arr.length - i - 1], arr[maxIndex]] = [arr[maxIndex], arr[arr.length - i - 1]];
    }
    return arr;
}