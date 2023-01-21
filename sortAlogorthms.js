/**
 * Bubble sort
 * Start by comparing the first two elements in an array.
 * Swap them if required.
 * Continue till the end of the array. At this point, you have made a series of inner passes and completed an outer pass.
 * O (n^2)
 */

const bubble = (list = []) => {
    if (Array.isArray(list)) {
        // outer
        const listLength = list.length - 1;
        for (let row = 0; row <= listLength; row++) {
            for (let column = 0; column <= listLength - row; column++) {
                if (list[column] > list[column+1]) {
                    [list[column + 1],list[column]] = [list[column],list[column + 1]]
                }
            }
        }
        return list;
    } else {
        console.error('Input is not type array');
    }
}