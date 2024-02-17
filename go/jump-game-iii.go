package main

func canReach(arr []int, start int) bool {
	visitedMap := make(map[int]bool)

	var queue []int
	queue = append(queue, start)
	visitedMap[start] = true
	currentIdx := start

	for len(queue) > 0 {
		currentIdx, queue = queue[0], queue[1:]

		if arr[currentIdx] == 0 {
			return true
		}

		visitedMap[currentIdx] = true
		fowardIdx := currentIdx + arr[currentIdx]
		backwardIdx := currentIdx - arr[currentIdx]

		if fowardIdx < len(arr) && !visitedMap[fowardIdx] {
			queue = append(queue, fowardIdx)
		}

		if backwardIdx >= 0 && !visitedMap[backwardIdx] {
			queue = append(queue, backwardIdx)
		}
	}

	return false
}
