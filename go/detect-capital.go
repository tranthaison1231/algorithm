package main

func detectCapitalUse(word string) bool {
	count := 0
	for _, v := range word {
		if v >= 'A' && v <= 'Z' {
			count++
		}
	}
	return count == len(word) || count == 0 || (count == 1 && word[0] >= 'A' && word[0] <= 'Z')
}
