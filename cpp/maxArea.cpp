
class Solution {
public:
    int maxArea(vector<int>& height) {

      int max = 0;
      int left = 0;
      int right = height.size() - 1;

      // while left is less than right
      while (left < right) {
        int leftHeight = height[left];
        int rightHeight = height[right];
        int currentArea = std::min(leftHeight, rightHeight) * (right - left);
        // reassign max to max between current and current area
        max = std::max(max, currentArea);

      // if left heigth is smaller or equal than right height
      if (leftHeight <= rightHeight) {
        left++;
      };
      if (leftHeight > rightHeight) {
        right--;
      };
      };
      return max;
    };
};