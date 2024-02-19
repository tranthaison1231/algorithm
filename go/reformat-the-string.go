package main

import "unicode"

func reformat(s string) string {
	var result string

	var letter []string
	var digit []string

	for _, c := range s {
		if unicode.IsLetter(c) {
			letter = append(letter, string(c))
		} else {
			digit = append(digit, string(c))
		}
	}

	numOfLetter := len(letter)
	numOfDigit := len(digit)

	if numOfLetter-numOfDigit >= 2 || numOfLetter-numOfDigit <= -2 {
		return ""
	}

	var min = numOfDigit
	if numOfLetter < numOfDigit {
		min = numOfLetter
	}

	for i := 0; i < min; i++ {
		result += digit[i]
		result += letter[i]
	}

	if numOfLetter > numOfDigit {
		result = letter[min] + result
	}

	if numOfDigit > numOfLetter {
		result += digit[min]
	}

	return result
}
