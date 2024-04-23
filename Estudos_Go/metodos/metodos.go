package main

import "fmt"

type usuario struct {
	nome  string
	idade uint8
}

func (u usuario) salvar() {
	fmt.Println("Dentro do método salvar")
}
func main() {
	usuario1 := usuario{"usuario 1:", 20}
	fmt.Println(usuario1)
	usuario1.salvar()
}
