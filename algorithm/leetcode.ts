function twoSum(numbers: number[], target: number): number[] {
    let [a, b] = [0, numbers.length - 1]
    while (a < b) {
        let sum = numbers[a] + numbers[b]
        if (sum < target) a++
        else if (sum > target) b--
        else return [a + 1, b + 1]
    }
};
