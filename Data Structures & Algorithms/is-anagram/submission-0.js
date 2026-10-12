class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const ssort = s.split("").sort().join("");
        const tsort = t.split("").sort().join("");

        if (ssort === tsort) {
            return true
        } 

        return false
    }
}
