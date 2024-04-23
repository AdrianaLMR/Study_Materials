package main

import (
	"fmt"
	"os"
)

func processarArquivo(nome string) error {
	arquivo, err := os.Open(nome)
	if err != nil {
		return err
	}
	defer arquivo.Close() // O arquivo será fechado quando a função retornar

	// ... código para processar o arquivo ...

	return nil
}

func main() {
	x := 5
	defer fmt.Println(x) // Será impresso o valor de x quando o defer é encontrado, ou seja, 5
	x = 10
}

// func func1() {
// 	fmt.Println("Exec. Func1")
// }
// func func2() {
// 	fmt.Println("Exec. Func2")
// }
// func main() {
// 	fmt.Println("Text")
// 	func1()
// 	//Defer adia a func 1
// 	func2()

// 	defer fmt.Println("Terceiro") //Primeiro defer
// 	defer fmt.Println("Segundo")  //Segundo defer
// 	defer fmt.Println("Primeiro") //Terceiro defer

// }
