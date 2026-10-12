func myPow(x float64, n int) float64 {
    res := 1.0
    if n < 0 {
        x = 1 / x
        n = -n
    }

    for i := 0; i < n; i++ {
        res *= x
    }

    return res
}

