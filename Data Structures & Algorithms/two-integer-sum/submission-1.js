class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (var i=0; i<=nums.length; i++){
            for(var j=1; j<=nums.length; j++) {
                if (i !=j ){
                    var sum = nums[i]+nums[j]
                    if (sum === target){
                        return [i,j]
                    }
                }


            }
        }
    }
}
