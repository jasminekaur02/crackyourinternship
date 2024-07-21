<<<<<<< HEAD
//optimized approach
var removeDuplicates = function(nums) {
    if(nums.length === 0 ){
        return 0;
    }
    let i =0;
    for(let j=1 ; j< nums.length ; j++){
        if (nums[i]!== nums[j]){
            i++;
            nums[i]= nums[j];
        }
    }
    return i+1;
};
//bruth force solution
function removeDuplicates(nums){
    for (let i=0 ; i<nums.length ; i++){
        if(nums[i]=== nums[i+1]){
            nums.splice(i+1, i);
            i--;
        }
    }
    return nums.length ;
=======
//optimized approach
var removeDuplicates = function(nums) {
    if(nums.length === 0 ){
        return 0;
    }
    let i =0;
    for(let j=1 ; j< nums.length ; j++){
        if (nums[i]!== nums[j]){
            i++;
            nums[i]= nums[j];
        }
    }
    return i+1;
};
//bruth force solution
function removeDuplicates(nums){
    for (let i=0 ; i<nums.length ; i++){
        if(nums[i]=== nums[i+1]){
            nums.splice(i+1, i);
            i--;
        }
    }
    return nums.length ;
>>>>>>> 82e194483979a8d01ba06be2cd6cf76833d6be16
}