package main

import "fmt"

func inverteSinal(numero int) int {
	return numero * -1
}
func main() {
	numero := 20
	numeroInvertido := inverteSinal(numero)
	fmt.Println(numeroInvertido)
}
