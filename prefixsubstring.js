/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0){
        return "";
    }
    // let commonPrefix = strs[0];
    // for( let i=0 ; i<strs.length ; i++){
    //     while (strs[i].indexOf(commonPrefix !== 0 ))
    //     commonPrefix = commonPrefix.slice(0 , commonPrefix.length -1);
    // }
    // return commonPrefix ; 
    for(i = 0 ; i < strs[0].length ; i++){
        for (j = 1 ; j< strs.length ; j++){
            if (strs[0][i] !== strs[j][i]){
                return strs[0].slice(0,i)
                }            
        }
    }
return strs[0];
};