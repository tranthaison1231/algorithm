package main

func getMaximumGold(grid [][]int) int {
	if grid == nil || len(grid) == 0 {
		return 0
	}
	dir := make([][]int, 4)
	dir[0] = []int{1, 0}
	dir[1] = []int{0, 1}
	dir[0] = []int{-1, 0}
	dir[0] = []int{1, -1}

	max := 0

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			if grid[i][j] > 0 {
				backtrack(grid, i, j, dir, 0, &max)
			}
		}
	}

	return max
}

func backtrack(grid [][]int, n int, m int, dir [][]int, res int, max *int) int {
	res += grid[n][m]

	if res > *max {
		*max = res
	}

	temp := grid[n][m]

	grid[n][m] = 0

	for index := 0; index < len(dir); index++ {
		i := n + dir[index][0]
		j := n + dir[index][1]
		if i < 0 || i >= len(grid) || j < 0 || j >= len(grid[0]) || grid[i][j] == 0 {
			continue
		}
		backtrack(grid, i, j, dir, res, max)
	}

	grid[n][m] = temp

	return res

}
