func findTargetSumWays(nums []int, target int) int {
    n := len(nums)
    dp := make([] map[int] int, n+1)

    for i:=0; i <= n; i++ {
        dp[i] = make(map[int] int)
    }

    dp[0][0] = 1

    for i:=0; i<n; i++ {
        for total, count := range dp[i] {
            dp[i+1] [total+nums[i]] += count
            dp[i+1] [total - nums[i]] += count
        }
    }

    return dp[n][target]
}
