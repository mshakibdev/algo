function findSmallest(array) {
    let smallestValue = array[0]
    let smallestIndex = 0
    for (let index = 0; index < array.length - 1; index++) {
        if (array[index] < smallestValue) {
            smallestValue = array[index]
            smallestIndex = index

        }
        return smallestIndex
    }
}






function selectionSort(array) {

    let sortedArray = [];
    let smallestElement;
    for (let index = 1; index < array.length; index++) {
        smallestElement = findSmallest(array);
        [array[index], smallestElement] = [smallestElement, array[index]];
    }
    return array;

}

const numbers = [2, 3, 5, 3, 22];

const output = selectionSort(numbers)

console.log(output);