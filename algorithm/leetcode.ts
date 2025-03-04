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
    let [a, b, maxArea] = [0, height.length - 1, 0]
    while (a < b) {
        let area = (b - a) * Math.min(height[a], height[b])
        maxArea = Math.max(area, maxArea)
        if (height[a] < height[b]) a++
        else b--
    }
    return maxArea
};

function removeDuplicates(nums: number[]): number {
    let [a, b] = [0, 0]
    while (b < nums.length) {
        if (nums[a - 1] !== nums[b]) {
            nums[a] = nums[b]
            a++
        }
        b++
    }
    return a
};

function removeDuplicates(nums: number[]): number {
    let [a, b] = [0, 0]
    while (b < nums.length) {
        if (nums[a - 2] !== nums[b]) {
            nums[a] = nums[b]
            a++
        }
        b++
    }
    return a
};

function addStrings(num1: string, num2: string): string {
    let [a, b, carry, result] = [num1.length - 1, num2.length - 1, 0, '']
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
    let [a, b, result] = [0, nums.length - 1, []]
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
    let [a, b, i] = [0, nums.length - 1, 0]
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

function removeElement(nums: number[], val: number): number {
    let [a, b] = [0, 0]
    while (b < nums.length) {
        if (nums[b] !== val) {
            [nums[a], nums[b]] = [nums[b], nums[a]]
            a++
        }
        b++
    }
    return a
};

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let [a, b, i] = [m - 1, n - 1, m + n - 1]
    while (i >= 0) {
        let v1 = nums1[a] ?? -Infinity
        let v2 = nums2[b] ?? -Infinity
        if (v1 < v2) {
            nums1[i] = v2
            b--
        } else {
            nums1[i] = v1
            a--
        }
        i--
    }
};

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let [a, b, count, sum] = [0, 0, 0, 0]
    while (b < arr.length) {
        sum += arr[b]
        if (b - a + 1 === k) {
            if (sum >= k * threshold) count++
            sum -= arr[a]
            a++
        }
        b++
    }
    return count
};

function lengthOfLongestSubstring(s: string): number {
    let [a, b, maxlen, set] = [0, 0, 0, new Set()]
    while (b < s.length) {
        set.add(s[b])
        while (b - a + 1 !== set.size) {
            if (s[a] !== s[b]) set.delete(s[a])
            a++
        }
        maxlen = Math.max(maxlen, b - a + 1)
        b++
    }
    return maxlen
};

function minSubArrayLen(target: number, nums: number[]): number {
    let [a, b, minlen, sum] = [0, 0, Infinity, 0]
    while (b < nums.length) {
        sum += nums[b]
        while (sum >= target) {
            minlen = Math.min(minlen, b - a + 1)
            sum -= nums[a]
            a++
        }
        b++
    }
    return minlen === Infinity ? 0 : minlen
};

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k < 2) return 0

    let [a, b, count, product] = [0, 0, 0, 1]
    while (b < nums.length) {
        product *= nums[b]
        while (product >= k) {
            product /= nums[a]
            a++
        }
        count += b - a + 1
        b++
    }
    return count
};

function findMaxAverage(nums: number[], k: number): number {
    let [a, b, maxavg, sum] = [0, 0, -Infinity, 0]
    while (b < nums.length) {
        sum += nums[b]
        if (b - a + 1 === k) {
            maxavg = Math.max(maxavg, sum / k)
            sum -= nums[a]
            a++
        }
        b++
    }
    return maxavg
};

function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let [a, b, sum, maxsum] = [0, 0, 0, 0]
    while (b < customers.length) {
        sum += grumpy[b] ? customers[b] : 0
        if (b - a + 1 === minutes) {
            maxsum = Math.max(maxsum, sum)
            sum -= grumpy[a] ? customers[a] : 0
            a++
        }
        b++
    }

    for (let i = 0; i < customers.length; i++) {
        maxsum += grumpy[i] ? 0 : customers[i]
    }
    return maxsum
};

function maxScore(cardPoints: number[], k: number): number {
    let arr = [...cardPoints.slice(-k), ...cardPoints.slice(0, k)]

    let [a, b, sum, maxsum] = [0, 0, 0, 0]
    while (b < arr.length) {
        sum += arr[b]
        if (b - a + 1 === k) {
            maxsum = Math.max(maxsum, sum)
            sum -= arr[a]
            a++
        }
        b++
    }
    return maxsum
};

function checkInclusion(s1: string, s2: string): boolean {
    let map = new Map()
    for (let v of s1) {
        map.set(v, (map.get(v) ?? 0) - 1)
    }

    let [a, b] = [0, 0]
    while (b < s2.length) {
        map.set(s2[b], (map.get(s2[b]) ?? 0) + 1)
        if (b - a + 1 === s1.length) {
            if ([...map.values()].every(x => x === 0)) return true
            map.set(s2[a], (map.get(s2[a]) ?? 0) - 1)
            a++
        }
        b++
    }
    return false
};

function findAnagrams(s: string, p: string): number[] {
    let map = new Map()
    for (let v of p) {
        map.set(v, (map.get(v) ?? 0) - 1)
    }

    let [a, b, result] = [0, 0, []]
    while (b < s.length) {
        map.set(s[b], (map.get(s[b]) ?? 0) + 1)
        if (b - a + 1 === p.length) {
            if ([...map.values()].every(x => x === 0)) result.push(a)
            map.set(s[a], (map.get(s[a]) ?? 0) - 1)
            a++
        }
        b++
    }
    return result
};

function findLengthOfLCIS(nums: number[]): number {
    let [a, b, maxlen] = [0, 0, 0]
    while (b < nums.length) {
        if (b - a + 1 > 1 && nums[b] <= nums[b - 1]) {
            a = b
        }
        maxlen = Math.max(maxlen, b - a + 1)
        b++
    }
    return maxlen
};

function findMaxConsecutiveOnes(nums: number[]): number {
    let [a, b, maxlen] = [0, 0, 0]
    while (b < nums.length) {
        if (nums[b] === 0) {
            a = b + 1
        }
        maxlen = Math.max(maxlen, b - a + 1)
        b++
    }
    return maxlen
};

function longestOnes(nums: number[], k: number): number {
    let [a, b, count, maxlen] = [0, 0, 0, 0]
    while (b < nums.length) {
        if (nums[b] === 0) count++
        while (count > k) {
            if (nums[a] === 0) count--
            a++
        }
        maxlen = Math.max(maxlen, b - a + 1)
        b++
    }
    return maxlen
};

function totalFruit(fruits: number[]): number {
    let [a, b, type, maxlen] = [0, 0, new Map(), 0]
    while (b < fruits.length) {
        type.set(fruits[b], (type.get(fruits[b]) ?? 0) + 1)
        while (type.size > 2) {
            type.set(fruits[a], type.get(fruits[a]) - 1)
            if (type.get(fruits[a]) === 0) type.delete(fruits[a])
            a++
        }
        maxlen = Math.max(maxlen, b - a + 1)
        b++
    }
    return maxlen
};

function search(nums: number[], target: number): number {
    let [a, b] = [0, nums.length - 1]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (nums[m] < target) a = m + 1
        else if (nums[m] > target) b = m - 1
        else return m
    }
    return -1
};

function guessNumber(n: number): number {
    let [a, b] = [1, n]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (guess(m) > 0) a = m + 1
        else if (guess(m) < 0) b = m - 1
        else return m
    }
};

function searchInsert(nums: number[], target: number): number {
    let [a, b] = [0, nums.length - 1]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (nums[m] < target) a = m + 1
        else if (nums[m] > target) b = m - 1
        else return m
    }
    return a
};

function searchRange(nums: number[], target: number): number[] {
    function search(target: number): number {
        let [a, b] = [0, nums.length - 1]
        while (a <= b) {
            let m = Math.floor((a + b) / 2)
            if (nums[m] < target) a = m + 1
            else if (nums[m] > target) b = m - 1
        }
        return a
    }

    let [a, b] = [search(target - 0.5), search(target + 0.5)]
    return a === b ? [-1, -1] : [a, b - 1]
};

function findMin(nums: number[]): number {
    let [a, b] = [0, nums.length - 1]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (nums[m] > nums.at(-1)) a = m + 1
        else b = m - 1
    }
    return nums[a]
};

function search(nums: number[], target: number): number {
    let [a, b] = [0, nums.length]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (nums[m] > nums.at(-1)) {
            if (target > nums.at(-1)) {
                if (nums[m] < target) a = m + 1
                else if (nums[m] > target) b = m - 1
                else return m
            } else {
                a = m + 1
            }
        } else {
            if (target > nums.at(-1)) {
                b = m - 1
            } else {
                if (nums[m] < target) a = m + 1
                else if (nums[m] > target) b = m - 1
                else return m
            }
        }
    }
    return -1
};

function findPeakElement(nums: number[]): number {
    let [a, b] = [0, nums.length - 2]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (nums[m] < nums[m + 1]) a = m + 1
        else b = m - 1
    }
    return a
};

function nextGreatestLetter(letters: string[], target: string): string {
    let [a, b] = [0, letters.length - 1]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (letters[m] < target) a = m + 1
        else if (letters[m] > target) b = m - 1
        else a = m + 1
    }
    return letters[a % letters.length]
};

function searchMatrix(matrix: number[][], target: number): boolean {
    let [r, c] = [matrix.length, matrix[0].length]
    let [a, b] = [0, r * c - 1]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        let [i, j] = [Math.floor(m / c), m % c]
        if (matrix[i][j] < target) a = m + 1
        else if (matrix[i][j] > target) b = m - 1
        else return true
    }
    return false
};

function searchMatrix(matrix: number[][], target: number): boolean {
    for (let row of matrix) {
        let [a, b] = [0, row.length - 1]
        while (a <= b) {
            let m = Math.floor((a + b) / 2)
            if (row[m] < target) a = m + 1
            else if (row[m] > target) b = m - 1
            else return true
        }
    }
    return false
};

function mySqrt(x: number): number {
    let [a, b] = [0, x]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (m * m < x) a = m + 1
        else if (m * m > x) b = m - 1
        else return m
    }
    return b
};

function findDuplicate(nums: number[]): number {
    let [a, b] = [1, nums.length - 1]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        let count = nums.filter(x => x <= m).length
        if (m >= count) a = m + 1
        else b = m - 1
    }
    return a
};

function isPerfectSquare(num: number): boolean {
    let [a, b] = [1, num]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (m * m < num) a = m + 1
        else if (m * m > num) b = m - 1
        else return true
    }
    return false
};

function minEatingSpeed(piles: number[], h: number): number {
    function finish(speed: number): boolean {
        let hour = 0
        for (let pile of piles) {
            hour += Math.ceil(pile / speed)
        }
        return hour <= h
    }
    
    let [a, b] = [1, Math.max(...piles)]
    while (a <= b) {
        let m = Math.floor((a + b) / 2)
        if (finish(m)) b = m - 1
        else a = m + 1
    }
    return a
};

function rotate(nums: number[], k: number): void {
    let [arr, n]= [nums.slice(), nums.length]
    for (let i = 0; i < n; i++) {
        nums[(i + k) % n] = arr[i]
    }
};

function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0 ; i--) {
        digits[i] = (digits[i] + 1) % 10
        if (digits[i] !== 0) break
    }
    if (digits[0] === 0) digits.unshift(1)
    return digits
};

function pivotIndex(nums: number[]): number {
    let sum = nums.reduce((a, b) => a + b)
    let leftsum = 0
    for (let [i, v] of nums.entries()) {
        if (leftsum * 2 === sum - v) return i
        leftsum += v
    }
    return -1
};

function productExceptSelf(nums: number[]): number[] {
    let result = Array(nums.length).fill(1)

    let lp = 1
    for (let i = 0; i < nums.length; i++) {
        result[i] *= lp
        lp *= nums[i]
    }

    let rp = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rp
        rp *= nums[i]
    }
    return result
};

function rotate(matrix: number[][]): void {
    let n = matrix.length
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.ceil(n / 2); j++) {
            console.log(i, j)
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
            matrix[j][n - 1 - i] = tmp
        }
    }
};

function setZeroes(matrix: number[][]): void {
    let [m, n] = [matrix.length, matrix[0].length]
    let [row_flag, col_flag] = [false, false]
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) row_flag = true
    }
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) col_flag = true
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    for (let j = 0; j < n; j++) {
        if (row_flag) matrix[0][j] = 0
    }
    for (let i = 0; i < m; i++) {
        if (col_flag) matrix[i][0] = 0
    }
};

function containsDuplicate(nums: number[]): boolean {
    let set = new Set()
    for (let v of nums) {
        if (set.has(v)) return true
        set.add(v)
    }
    return false
};

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map()
    for (let [i, v] of nums.entries()) {
        if (map.has(v) && i - map.get(v) <= k) {
            return true
        } else {
            map.set(v, i)
        }
    }
    return false
};

function canConstruct(ransomNote: string, magazine: string): boolean {
    let map = new Map()
    for (let v of ransomNote) {
        if (map.has(v)) map.set(v, map.get(v) - 1)
        else map.set(v, -1)
    }
    for (let v of magazine) {
        if (map.has(v)) map.set(v, map.get(v) + 1)
    }
    return [...map.values()].every(x => x >= 0)
};

function intersection(nums1: number[], nums2: number[]): number[] {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let result = []
    for (let v of set2) {
        if (set1.has(v)) result.push(v)
    }
    return result
};

function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for (let [i, v] of nums.entries()) {
        if (map.has(target - v)) return [map.get(target - v), i]
        else map.set(v, i)
    }
};

function longestConsecutive(nums: number[]): number {
    let maxlen = 0
    let set = new Set(nums)
    for (let v of set) {
        if (set.has(v - 1)) continue
        let len = 1
        while (set.has(v + len)) len++
        maxlen = Math.max(maxlen, len)
    }
    return maxlen
};

function isHappy(n: number): boolean {
    let set = new Set()
    let num = n
    while (!set.has(num)) {
        set.add(num)
        num = Array.from(String(num)).map(x => Number(x) ** 2).reduce((a, b) => a + b)
        if (num === 1) return true
    }
    return false
};

function isAnagram(s: string, t: string): boolean {
    let map = new Map()
    for (let v of s) {
        if (map.has(v)) map.set(v, map.get(v) - 1)
        else map.set(v, -1)
    }
    for (let v of t) {
        if (map.has(v)) map.set(v, map.get(v) + 1)
        else return false
    }
    return [...map.values()].every(x => x === 0)
};

function removeDuplicates(s: string): string {
    let stack = []
    for (let v of s) {
        if (v === stack.at(-1)) stack.pop()
        else stack.push(v)
    }
    return stack.join('')
};

function isValid(s: string): boolean {
    let set = new Set(['()', '[]', '{}'])
    let stack = []
    for (let v of s) {
        if (set.has(stack.at(-1) + v)) {
            stack.pop()
        } else {
            stack.push(v)
        }
    }
    return stack.length === 0
};

function calculate(s: string): number {
    let tokens = s.replace(/ /g, '').split(/(\D)/)
    let nums = []
    let op = '+'
    for (let v of tokens) {
        if (/\D/.test(v)) {
            op = v
        } else {
            let num = Number(v)
            if (op === '+') nums.push(num)
            if (op === '-') nums.push(-num)
            if (op === '*') nums.push(nums.pop() * num)
            if (op === '/') nums.push(~~(nums.pop() / num))
        }
    }
    return nums.reduce((a, b) => a + b)
};

function evalRPN(tokens: string[]): number {
    let nums = []
    for (let v of tokens) {
        if (/\d+/.test(v)) {
            nums.push(Number(v))
        } else {
            let [a, b] = nums.splice(-2)
            if (v === '+') nums.push(a + b)
            if (v === '-') nums.push(a - b)
            if (v === '*') nums.push(a * b)
            if (v === '/') nums.push(~~(a / b))
        }
    }
    return nums[0]
};

function decodeString(s: string): string {
    let tokens = s.split(/(\d+|\W)/).filter(x => x)
    let stack = []
    for (let v of tokens) {
        if (v === ']') {
            let i = stack.lastIndexOf('[')
            let [num, , ...str] = stack.splice(i - 1)
            stack.push(str.join('').repeat(num))
        } else {
            stack.push(v)
        }
    }
    return stack.join('')
};

function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let stack = []
    let i = 0
    for (let v of pushed) {
        stack.push(v)
        while (stack.length && stack.at(-1) === popped[i]) {
            stack.pop()
            i++
        }
    }
    return stack.length === 0
};

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let map = new Map()
    let stack = []
    for (let v of nums2) {
        while (stack.length && v > stack.at(-1)) {
            let num = stack.pop()
            map.set(num, v)
        }
        stack.push(v)
    }
    return nums1.map(x => map.get(x) ?? -1)
};

function dailyTemperatures(temperatures: number[]): number[] {
    let result = Array.from(temperatures, () => 0)
    let stack = []
    for (let [i, v] of temperatures.entries()) {
        while (stack.length && v > temperatures[stack.at(-1)]) {
            let j = stack.pop()
            result[j] = i - j
        }
        stack.push(i)
    }
    return result
};

// Bubble Sort
function sortArray(nums: number[]): number[] {
    let n = nums.length
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
    return nums
};

// Selection Sort
function sortArray(nums: number[]): number[] {
    let n = nums.length
    for (let i = 0; i < n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]]
    }
    return nums
};

// Insertion Sort
function sortArray(nums: number[]): number[] {
    let n = nums.length
    for (let i = 1; i < n; i++) {
        let base = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > base) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = base
    }
    return nums
};

// Quick Sort
function sortArray(nums: number[]): number[] {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    function partition(a, b) {
        // swap(a, a + Math.round(Math.random() * (b - a)))
        let pivot = a
        let index = a + 1
        for (let i = index; i <= b; i++) {
            if (nums[i] < nums[pivot]) {
                swap(i, index)
                index++
            }
        }
        swap(a, index - 1)
        return index - 1
    }

    function sort(a, b) {
        if (a >= b) return
        let pivot = partition(a, b)
        sort(a, pivot - 1)
        sort(pivot + 1, b)
    }

    sort(0, nums.length - 1)
    return nums
};

// Merge Sort
function sortArray(nums: number[]): number[] {
    function merge(l, m, r) {
        let tmp = []
        let [a, b] = [l ,m + 1]
        while (a <= m || b <= r) {
            let v1 = a <= m ? nums[a] : Infinity
            let v2 = b <= r ? nums[b] : Infinity
            if (v1 <= v2) {
                tmp.push(v1)
                a++
            } else {
                tmp.push(v2)
                b++
            }
        }
        for (let i = l; i <= r; i++) {
            nums[i] = tmp[i - l]
        }
    }

    function sort(l, r) {
        if (l === r) return
        let m = Math.floor((l + r) / 2)
        sort(l, m)
        sort(m + 1, r)
        merge(l, m, r)
    }

    sort(0, nums.length - 1)
    return nums
};

// Bucket Sort
function sortArray(nums: number[]): number[] {
    const size = 5
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    const count = Math.ceil((max - min) / size) + 1
    const buckets = Array.from({ length: count }, () => [])
    
    for (const num of nums) {
        const i = Math.floor((num - min) / size)
        buckets[i].push(num)
    }

    return buckets.flatMap(x => x.sort((a, b) => a - b))
};
