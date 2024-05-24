// https://leetcode.com/problems/divide-array-into-equal-pairs/description/

package main

func divideArray(nums []int) bool {
	pairs := make(map[int]int)

	for _, num := range nums {
		pairs[num]++
	}

	for _, v := range pairs {
		if v%2 != 0 {
			return false
		}
	}

	return true
}
