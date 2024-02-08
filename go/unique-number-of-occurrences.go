package main

func uniqueOccurrences(arr []int) bool {
	countOccurMap := map[int]int{}
	markOccurMap := map[int]bool{}

	for _, v := range arr {
		countOccurMap[v]++
	}

	for _, v := range countOccurMap {
		markOccurMap[v] = true
	}

	return len(countOccurMap) == len(markOccurMap)
}
