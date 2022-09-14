package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println(SliceContains(os.Args, os.Args[0]))
}

// IndexOf gets the index of an element (comparables only)
func IndexOf[T comparable](elems []T, lookup T) int {
	for i, s := range elems {
		if lookup == s {
			return i
		}
	}
	return -1
}

// SliceContains checks whether or not an element exists (comparables only)
func SliceContains[T comparable](elems []T, lookup T) bool {
	return IndexOf(elems, lookup) > -1
}
