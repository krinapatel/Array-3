// Time Complexity : O(n) where n is length of height
// Space Complexity : O(1)

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let result = 0;
    let l = 0, r = height.length-1;
    let lw = 0, rw = 0;
    while(l<=r) {
        //which side to process
        if(lw <= rw) {
            if(height[l] < lw) {
                result += (lw - height[l]) * 1;
            } else {
                lw = height[l]
            }
            l++;
        } else {
            if(height[r] < rw) {
                result += (rw - height[r]) * 1;
            } else {
                rw = height[r];
            }
            r--;
        }
    }
    return result;
};