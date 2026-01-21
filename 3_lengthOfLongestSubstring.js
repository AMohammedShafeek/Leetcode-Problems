// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) {
    let set = new Set()
    let left = 0
    let right = 0
    let length = 0
    let lengthList = []
    let max = 0

    if (s !== "") {
        for (right; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left])
                left++
            }
            set.add(s[right])
            length = set.size
            lengthList.push(length)
        }
        max = Math.max(...lengthList)
        return max
    }
    return 0
};

let s = ""
console.log(lengthOfLongestSubstring(s));
