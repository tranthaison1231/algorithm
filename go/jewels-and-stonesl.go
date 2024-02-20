package main

func numJewelsInStones(J string, S string) int {
	if S == "" {
		return 0
	}
	dic := make(map[string]int)

	for _, s := range S {
		dic[string(s)]++
	}
	res := 0
	for _, j := range J {
		v, ok := dic[string(j)]
		if ok {
			res += v
		}
	}

	return res
}
