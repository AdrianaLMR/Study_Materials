package main

import "fmt"

func generico(interf interface{}) {
	fmt.Println(interf)
}
func main() {
	generico("Adriana")
	generico(30)

	fmt.Println(1, 2, "String", false, float64(12345))
}
