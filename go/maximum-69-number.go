package main

import "strconv"

func maximum69Number(num int) int {
	result := 0
	temp := strconv.Itoa(num)
	var bs []byte = []byte(temp)

	for i := 0; i < len(bs); i++ {
		if bs[i] == '6' {
			bs[i] = '9'
			break
		}
	}

	result, _ = strconv.Atoi(string(bs))

	return result
}
