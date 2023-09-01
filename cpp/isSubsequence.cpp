class Solution {
public:
    bool isSubsequence(string s, string t) {
          int l, r;

          if (!s) {
            return true;
          };

          while (r < t.size()) {
            if (s[l] == t[r]) {
              l++
            };
            if (l == s.size()) {
              return true;
            }
            r++;
          }
          return false;
    }
};