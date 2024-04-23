package main

import (
	"fmt"
)

func main() {
	for indice, letra := range "Oi" {
		fmt.Println(indice, string(letra))
	}

	usuario := map[string]string{
		"nome":      "Ana",
		"Sobrenome": "Machado",
	}

	for chave, valor := range usuario {
		fmt.Println(chave, valor)
	}
}
