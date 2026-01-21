// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length !== 0 || nums2.length !== 0) {
        merged = [...nums1, ...nums2].sort((a, b) => a - b)
        let arrLength = merged.length
        if (arrLength % 2 !== 0) {
            let mid = Math.floor(arrLength / 2)

            return merged[mid]
        }
        let mid1 = Math.floor(arrLength / 2)
        let mid2 = mid1 - 1
        let mid = (merged[mid1] + merged[mid2]) / 2

        return mid
    }
    return 0
};

a = [1, 3, 7]
b = [4, 8, 2]
console.log(findMedianSortedArrays(a, b));
