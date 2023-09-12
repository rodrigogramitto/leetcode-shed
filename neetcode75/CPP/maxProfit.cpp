class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int l = 0, r = 1;
        int max = 0;

       while (r < prices.size()) {
        max = std::max(max, prices[r] - prices[l]);

        if (prices[l] > prices[r]) {
          l = r;
        };
        r++;
       };
    }
};