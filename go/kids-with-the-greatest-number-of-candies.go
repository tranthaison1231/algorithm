package main

func max(arr []int) int {
	max := arr[0]
	for _, num := range arr {
		if num > max {
			max = num
		}
	}
	return max
}

func kidsWithCandies(candies []int, extraCandies int) []bool {
	res := make([]bool, len(candies))

	for i, candy := range candies {
		res[i] = candy+extraCandies >= max(candies)
	}

	return res
}
