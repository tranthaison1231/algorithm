package main

func isSubsequence(s string, t string) bool {
	if len(s) == 0 {
		return true
	}
	if len(t) == 0 {
		return false
	}
	first := 0
	second := 0
	for first < len(s) && second < len(t) {
		for second < len(t) && s[first] != t[second] {
			second++
		}
		if first < len(s) && second < len(t) && s[first] == t[second] {
			first++
			second++
		}
	}
	if first < len(s) && second == len(t) {
		return false
	}

	return first == len(s)
}
