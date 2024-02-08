package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSubtree(s *TreeNode, t *TreeNode) bool {
	if s == nil {
		return false
	}
	if isEqual(s, t) {
		return true
	}
	return isSubtree(s.Left, t) || isSubtree(s.Right, t)
}
