package main

import "strconv"

func countBits(n int) []int {
	res := []int{}

	for i := 0; i <= n; i++ {
		binary := strconv.FormatInt(int64(i), 2)

		count := 0
		for _, v := range binary {
			if v == '1' {
				count++
			}
		}
		res = append(res, count)
	}

	return res
}
