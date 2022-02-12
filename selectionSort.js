function selectionSort(array) {
    for (let index = 0; index < array.length - 1; index++) {

        let smallestIndex = index;
        for (let nextIndex = index + 1; nextIndex < array.length; nextIndex++) {
            if (array[nextIndex] < array[smallestIndex]) {
                smallestIndex = nextIndex;
            }
        }
        [array[index], array[smallestIndex]] = [array[smallestIndex], array[index]];
    }
    return array;

}

const numbers = [2, 3, 5, 3, 22];

const output = selectionSort(numbers)

console.log(output);