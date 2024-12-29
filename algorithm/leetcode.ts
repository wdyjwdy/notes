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

function removeDuplicates(nums: number[]): number {
    let [a, b] = [0, 1]
    while (b < nums.length) {
        if (nums[a]!== nums[b]) {
            a++
            nums[a] = nums[b]
        }
        b++
    }
    return a + 1
};

function intersection(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let [m, n] = [nums1.length, nums2.length]

    let result = []
    let [a, b] = [0, 0]
    while (a < m && b < n) {
        if (nums1[a] < nums2[b]) {
            a++
        } else if (nums1[a] > nums2[b]) {
            b++
        } else if (nums1[a] === result.at(-1)) {
            a++
            b++
        } else {
            result.push(nums1[a])
        }
    }
    return result
};

function addStrings(num1: string, num2: string): string {
    let result = ''
    let carry = 0
    let [a, b] = [num1.length - 1, num2.length - 1]
    while (a >= 0 || b >= 0 || carry > 0) {
        let v1 = a < 0 ? 0 : Number(num1[a])
        let v2 = b < 0 ? 0 : Number(num2[b])
        let sum = v1 + v2 + carry
        carry = sum < 10 ? 0 : 1
        result = sum % 10 + result
        a--
        b--
    }
    return result
};

function isSubsequence(s: string, t: string): boolean {
    let [a, b] = [0, 0]
    while (b < t.length) {
        if (t[b] === s[a]) a++
        b++
    }
    return a === s.length
};

function sortedSquares(nums: number[]): number[] {
    let result = []
    let [a, b] = [0, nums.length - 1]
    while (a <= b) {
        let [A, B] = [nums[a] ** 2, nums[b] ** 2]
        if (A > B) {
            a++
            result.push(A)
        } else {
            b--
            result.push(B)
        }
    }
    return result.reverse()
};

function sortColors(nums: number[]): void {
    let i = 0
    let [a, b] = [0, nums.length - 1]
    while (i <= b) {
        if (nums[i] === 0) {
            [nums[a], nums[i]] = [nums[i], nums[a]]
            a++
            i++
        } else if (nums[i] === 1) {
            i++
        } else {
            [nums[b], nums[i]] = [nums[i], nums[b]]
            b--
        }
    }
};

function moveZeroes(nums: number[]): void {
    let [a, b] = [0, 0]
    while (b < nums.length) {
        if (nums[b] !== 0) {
            [nums[a], nums[b]] = [nums[b], nums[a]]
            a++
        }
        b++
    }
};
