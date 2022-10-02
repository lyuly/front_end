class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n, left, right, res = len(s), 0, 0, 0
        window = {}
        while right < n:
            ch = s[right]
            right += 1
            if ch in window:
              window[ch] = window[ch] + 1
            else:
              window[ch] = 1

            while window[ch] > 1:
                dh = s[left]
                left += 1
                window[dh] -= 1
            
            res = max(res, right - left)
        
        return res

res = Solution().lengthOfLongestSubstring("abcabcbb")
print(res)