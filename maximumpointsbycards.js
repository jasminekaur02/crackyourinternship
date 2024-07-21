/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
 
    //the base cases 
    if(cardPoints.length === 0 ){
        return 0 ;
    }
    let totalPoints = 0 ;
    //two pointer approach with one pointer starting from the start and the other one starting from the end 
    for ( let i = 0 ; i < k ; i++){
        totalPoints += cardPoints[i];
    }
    let maxPoints = totalPoints ; 
    for(let i = 0 ; i < k ; i++){
        totalPoints = totalPoints - cardPoints[k-1-i] + cardPoints[cardPoints.length - 1-i] ; 
        maxPoints = Math.max(maxPoints , totalPoints);
    }
    return maxPoints ; 
};


// /**
//  * @param {number[]} cardPoints
//  * @param {number} k
//  * @return {number}
//  */
// var maxScore = function(cardPoints, k) {
//     // Base case
//     if (cardPoints.length === 0) {
//         return 0;
//     }
    
//     let totalPoints = 0;
//     // Sum of the first k points
//     for (let i = 0; i < k; i++) {
//         totalPoints += cardPoints[i];
//     }
    
//     let maxPoints = totalPoints;
//     // Sliding window to include points from the end
//     for (let i = 0; i < k; i++) {
//         totalPoints = totalPoints - cardPoints[k - 1 - i] + cardPoints[cardPoints.length - 1 - i];
//         maxPoints = Math.max(maxPoints, totalPoints);
//     }
    
//     return maxPoints;
// };
