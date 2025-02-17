<<<<<<< HEAD
//in the array of nums there is only one element that is duplicating 
// for the optimized solution - two pointer approach 
var findDuplicate = function(nums){
    if(nums.length === 0 )
        return 0 ;
    let slow = nums[0]; 
    let fast = nums[0];
    do{
        slow = nums[slow];
        fast = nums[nums[fast]];
    }while(slow!=fast)
    slow = nums[0];
    while(slow!= 0 ){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow ;
}
=======
//in the array of nums there is only one element that is duplicating 
// for the optimized solution - two pointer approach 
var findDuplicate = function(nums){
    if(nums.length === 0 )
        return 0 ;
    let slow = nums[0]; 
    let fast = nums[0];
    do{
        slow = nums[slow];
        fast = nums[nums[fast]];
    }while(slow!=fast)
    slow = nums[0];
    while(slow!= 0 ){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow ;
}
>>>>>>> 82e194483979a8d01ba06be2cd6cf76833d6be16
console.log(findDuplicate([1,3,4,2,2]));