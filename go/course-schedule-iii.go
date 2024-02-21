package main

import (
	"container/heap"
	"sort"
)

type IntHeap []int

func (h IntHeap) Len() int { return len(h) }

func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }

func (h IntHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func scheduleCourse(courses [][]int) int {

	sort.Slice(courses, func(i, j int) bool {
		return courses[i][1] < courses[j][1]
	})
	current := 0
	maxheap := &IntHeap{}
	heap.Init(maxheap)
	for _, i := range courses {
		time := i[0]
		end := i[1]
		current += time
		heap.Push(maxheap, -time)
		if current > end {
			nt := (*maxheap)[0]
			current += nt
			heap.Pop(maxheap)
		}
	}
	return maxheap.Len()
}
