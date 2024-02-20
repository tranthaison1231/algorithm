package main

func letterCombinations(digits string) []string {
	res := []string{}

	if len(digits) == 0 {
		return res
	}

	dic := make(map[byte]string)

	dic['0'] = ""
	dic['1'] = ""
	dic['2'] = "abc"
	dic['3'] = "def"
	dic['4'] = "ghi"
	dic['5'] = "jkl"
	dic['6'] = "mno"
	dic['7'] = "pqrs"
	dic['8'] = "tuv"
	dic['9'] = "wxyz"

	cur := []byte{}

	backtrackFn(digits, cur, 0, dic, &res)
	return res
}

func backtrackFn(digits string, cur []byte, start int, dic map[byte]string, res *[]string) {
	if len(cur) == len(digits) {
		*res = append(*res, string(cur))
		return
	}

	for i := start; i < len(digits); i++ {
		// add
		v, oki := dic[digits[i]]
		if oki {

			// backtrack
			for j := 0; j < len(v); j++ {
				cur = append(cur, v[j])
				backtrackFn(digits, cur, i+1, dic, res)

				// remove
				cur = cur[:len(cur)-1]
			}
		}
	}
}
