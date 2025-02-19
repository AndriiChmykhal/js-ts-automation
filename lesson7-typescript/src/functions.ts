function summarizeArray(arr: (string | number)[]): number {
    return arr
        .map(function (num) {
            if (typeof num === 'number') {
                return num;
            }
            return parseFloat(num) || 0;
        })
        .reduce(function (sum, num) {
            return sum + num;
        }, 0);
}

const digits: number[] = [1, 2, 3, 4, 5];
const strings: (string | number)[] = ['a', '2', 'b', '3', 'hello'];

console.log(summarizeArray(digits));
console.log(summarizeArray(strings));
