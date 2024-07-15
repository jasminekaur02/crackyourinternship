//sorting of colors where red= 0 , white = 1 and blue = 2 
// approach could be (without inbuilt sort function)
//input array nums and two pointer and compare side by side if i <,>,= and sort 
//by default its ascending only 

var sortColors = function(nums) {
    let i = 0 , j ; 
    while (i < nums.length){
        j = i+1;
        while (j < nums.length){
            if (nums[i] > nums[j]){
                let temp =  nums[i];
                nums[i] = nums[ j];
                nums[j] = temp ;
            }
            j++;
        }
        i++;
    }
   };

// time complexity of this is O(nxm) which is quite high 
// trying using the compare function 

// var sortColors = function(nums){
//     let i = 0 , j ; 
//     for ()
// }