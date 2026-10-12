func findDuplicate(nums []int) int {
    mp:= map[int]int{}
    res:= 0

    for _,num := range nums {
        mp[num]++
    }

    for k, v := range mp {
        if v > 1 {
            res = k
        }
    }
    return res
}
