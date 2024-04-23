package main

import "fmt"

func main() {
	usuario := map[string]map[string]string{
		"afiliação": {
			"mãe": "Adriana",
			"pai": "Paulo",
		},
		"nome": {
			"Primeiro nome": "Adriana",
			"Último nome":   "Machado",
		},
	}
	fmt.Println(usuario)
	usuario2 := map[string]map[string]string{
		"nome": {
			"Primeiro nome": "Adriana",
			"Último nome":   "Machado",
		},
		"afiliação": {
			"mãe": "Adriana",
			"pai": "Paulo",
		},
	}
	fmt.Println(usuario2["nome"])
}
