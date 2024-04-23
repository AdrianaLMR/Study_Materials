package main

import "fmt"

func soma(numeros ...int) int {
	total := 0
	for _, numero := range numeros {
		total += numero
	}
	return total
}
func escrever(texto string, numeros ...int) {
	for _, numero := range numeros {
		fmt.Println(texto, numero)
	}
}
func main() {
	totalSoma := soma(1, 2, 3)
	fmt.Println(totalSoma)
	escrever("Ola mundo", 2, 4, 5, 6)
}
