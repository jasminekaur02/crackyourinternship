
// User function Template for javascript

/**
 * @param {number[][]} M
 * @param {number} n
 * @returns {number}
 */
class Solution {
    // Function to find if there is a celebrity in the party or not.
    celebrity(M, n) {
        let candidate = 0;

        for (let i = 1; i < n; i++) {
            if (M[candidate][i] === 1) {
                candidate = i;
            }
        }

        for (let i = 0; i < n; i++) {
            if (i !== candidate && (M[candidate][i] === 1 || M[i][candidate] === 0)) {
                return -1;
            }
        }

        return candidate;
    }
}
