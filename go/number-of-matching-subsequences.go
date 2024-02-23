package main

func numMatchingSubseq(s string, words []string) int {
	count := 0

	for _, word := range words {
		if isSubsequence(word, s) {
			count++
		}
	}

	return count
}
