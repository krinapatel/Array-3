// Time Complexity : O(n) where n is length of nums array
// Space Complexity : O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var reverse = function (nums, l, r) {
  while (l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }
};
var rotate = function (nums, k) {
  if (nums === null && nums.length === 0) return;

  let n = nums.length;
  if (k >= n) {
    k = k % n;
  }

  //reverse whole array
  reverse(nums, 0, n - 1);

  //revers first k elements
  reverse(nums, 0, k - 1);

  //reverse rest of the elements
  reverse(nums, k, n - 1);
};
