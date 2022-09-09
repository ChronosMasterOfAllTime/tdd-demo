package main

import "testing"

type testCase[T comparable] struct {
	Name     string
	Input    []T
	Lookup   T
	Expected bool
	WantErr  bool
}

func TestSliceContainsString(t *testing.T) {
	stringCase := testCase[string]{
		Name:     "Should find string",
		Input:    []string{"one", "two", "three"},
		Lookup:   "one",
		Expected: true,
	}

	t.Run(stringCase.Name, func(t *testing.T) {
		if SliceContains(stringCase.Input, stringCase.Lookup) != stringCase.Expected && !stringCase.WantErr {
			t.Errorf("Expected to slice to contain value but it didn't")
		}
	})
}

// func TestSliceContainsInt(t *testing.T) {
// 	stringCase := testCase[int]{
// 		Name:     "Should find string",
// 		Input:    []int{1, 2, 3},
// 		Lookup:   1,
// 		Expected: true,
// 	}

// 	t.Run(stringCase.Name, func(t *testing.T) {
// 		if SliceContains(stringCase.Input, stringCase.Lookup) != stringCase.Expected && !stringCase.WantErr {
// 			t.Errorf("Expected to slice to contain value but it didn't")
// 		}
// 	})
// }
