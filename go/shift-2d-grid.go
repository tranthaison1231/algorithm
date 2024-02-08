package main

func shiftGrid(grid [][]int, k int) [][]int {
	var result [][]int = make([][]int, len(grid))

	row := len(grid)
	col := len(grid[0])
	total := row * col
	temp := make([]int, total)

	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			temp[(i*col+j+k)%total] = grid[i][j]
		}
	}

	for i := 0; i < row; i++ {
		result[i] = make([]int, col)
		for j := 0; j < col; j++ {
			result[i][j] = temp[i*row+j]
		}
	}

	return result
}
