function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const elementToInsert = arr[i];
        let j = i - 1;

        while(j >= 0) {
            if (arr[j] > elementToInsert) {
                arr[j + 1] = arr[j];
            }
            else break;

            j--;
        }

        arr[j + 1] = elementToInsert;
    }

    return arr;
}

const arr = [7, 3, 9, 4, 2, 5, 6, 1, 8];
console.log(insertSort(arr));
