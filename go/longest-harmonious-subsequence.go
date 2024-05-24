// https://leetcode.com/problems/longest-harmonious-subsequence/

package main

func findLHS(nums []int) int {
	result := 0
	m := make(map[int]int)

	for _, num := range nums {
		m[num]++
	}

	for k, v := range m {
		if m[k+1] != 0 {
			if v+m[k+1] > result {
				result = v + m[k+1]
			}
		}
	}

	return result
}
