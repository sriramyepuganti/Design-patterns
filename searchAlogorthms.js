/**
 *linear or simple or sequential search
 * O(n) 
 * */ 
const linearSearch = (list = [], target = 0) => {
    if (Array.isArray(list)) {
        const listLength = list.length;
        for (let index = 0; index < listLength; index++) {
            if (list[index] === target) {
                return index;
            }
        }
    } else {
        console.error('Input is not array type');
    }
    return -1;
}

/**
 * Binary or half-interval or logarithmic search, or binary chop search
 * O(log n)
 */
const binarySearch = (list = [], target = 0) => {
    if (Array.isArray(list)) {
        let first = 0;
        let last = list.length - 1;
        while (first <= last) {
            let mid = Math.floor((first + last) / 2);
            if (list[mid] === target) {
                return mid;
            } else if (list[mid] < target) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
    } else {
        console.error('Input is not array type');
    }
    return -1;
}