
var moveZeroes = function(nums) {
    let left = 0;  // Pointer to keep track of the position to swap with

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            // Swap the elements at left and right pointers
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;  // Move the left pointer to the next position
        }
    }
};