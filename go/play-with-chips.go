package main

func minCostToMoveChips(chips []int) int {
	odd := 0
	even := 0
	for _, chip := range chips {
		if chip%2 == 0 {
			even++
		} else {
			odd++
		}
	}
	if odd < even {
		return odd
	}

	return even
}
