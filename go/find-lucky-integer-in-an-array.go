package main

func findLucky(arr []int) int {
	if arr == nil || len(arr) == 0 {
		return -1
	}
	dic := make(map[int]int)

	for _, v := range arr {
		dic[v]++
	}

	res := -1

	for k, v := range dic {
		if k == v && k > res {
			res = k
		}
	}

	return res
}
