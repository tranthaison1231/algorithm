package main

func distributeCandies(candies []int) int {
	m := make(map[int]bool)
	for _, v := range candies {
		m[v] = true
	}
	return min(len(m), len(candies)/2)
}
