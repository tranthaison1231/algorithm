package main

func revertseList(head *ListNode) *ListNode {
	current := head

	var prev *ListNode = nil

	for current != nil {
		next := current.Next
		current.Next = prev
		prev = current
		current = next
	}
	return prev
}
