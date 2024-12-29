function twoSum(numbers: number[], target: number): number[] {
    let [a, b] = [0, numbers.length - 1]
    while (a < b) {
        let sum = numbers[a] + numbers[b]
        if (sum < target) a++
        else if (sum > target) b--
        else return [a + 1, b + 1]
    }
};

function isPalindrome(s: string): boolean {
    let str = s.toLowerCase().replace(/[^0-9a-z]/g, '')

    let [a, b] = [0, str.length - 1]
    while (a < b) {
        if (str[a] !== str[b]) return false
        a++
        b--
    }
    return true
};

function maxArea(height: number[]): number {
    let maxArea = 0
    let [a, b] = [0, height.length - 1]
    while (a < b) {
        let area = (b - a) * Math.min(height[a], height[b])
        maxArea = Math.max(area, maxArea)
        if (height[a] < height[b]) a++
        else b--
    }
    return maxArea
};
