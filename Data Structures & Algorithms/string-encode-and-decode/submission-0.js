class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var res = "";

        if (strs.length == 0) {
            return res;
        }

        for (var str of strs) {
            var size = str.length;

            res = res + size + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var i = 0;
        var res = [];

        while (i < str.length) {
            let j=i
            while(str[j] !== "#"){
                j++
            }
            let len = parseInt(str.substring(i,j))
            i=j+1
            j=i+len
            res.push(str.substring(i,j))
            i=j
        }

        return res
    }
}
