const summarizeArrayTs = (arr: (number | string)[]): number => {
    return arr.map((num) => (typeof num === 'number' ? num : parseFloat(num as string) || 0)).reduce((sum, num) => sum + num, 0);
};

const digitsArr: number[] = [1, 2, 3, 4, 5];
const stringsAndNumbersArr: (string | number)[] = ['a', '2', 'b', '3', 'hello'];

console.log(summarizeArrayTs(digitsArr));
console.log(summarizeArrayTs(stringsAndNumbersArr));
