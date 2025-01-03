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

function intersection(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let [m, n] = [nums1.length, nums2.length]

    let [a, b, result] = [0, 0, []]
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
