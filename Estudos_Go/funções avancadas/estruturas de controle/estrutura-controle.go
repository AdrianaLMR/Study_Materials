package main

import "fmt"

func diaSemana(numero int) string {
	var diaSemana string

	switch {
	case numero == 1:
		diaSemana = "Segunda-Feira"
	case numero == 2:
		diaSemana = "Terça-Feira"
	case numero == 3:
		diaSemana = "Quarta-Feira"
	case numero == 4:
		diaSemana = "Quinta-Feira"
	case numero == 5:
		diaSemana = "Sexta-Feira"
	case numero == 6:
		diaSemana = "Sábado"
	case numero == 7:
		diaSemana = "Domingo"
	default:
		diaSemana = "Número inválido"
	}
	return diaSemana
}
func main() {
	dia := diaSemana(3)
	fmt.Println(dia)
}
