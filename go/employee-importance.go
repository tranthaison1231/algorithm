package main

type Employee struct {
	Id           int
	Importance   int
	Subordinates []int
}

func dfs(tmp map[int]*Employee, id int) int {
	result := tmp[id].Importance
	for _, sub := range tmp[id].Subordinates {
		result += dfs(tmp, sub)
	}
	return result
}

func getImportance(employees []*Employee, id int) int {
	tmp := make(map[int]*Employee)

	for _, e := range employees {
		tmp[e.Id] = e
	}

	return dfs(tmp, id)
}
