/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const len_h = haystack.length ; 
    const len_n = needle.length ; 

    if (len_n === 0 ){
        return 0 ; 
    }

let smallestIndex = Infinity ; 
for (let i = 0 ; i <= len_h - len_n ; i++){
    if (haystack.substring(i,i+len_n)=== needle){
        smallestIndex = Math.min(smallestIndex , i);
    }
}
return smallestIndex !== Infinity ? smallestIndex : -1;
};