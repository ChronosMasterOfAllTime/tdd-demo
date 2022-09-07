package main

import "testing"

type testCase[T comparable] struct {
	Name     string
	Input    []T
	Lookup   T
	Expected bool
	WantErr  bool
}

func TestSliceContains(t *testing.T) {
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
