package main

import (
	"fmt"
	"time"
)

func main() {
	go escrever("ola mundo")
	escrever("Programando em go")
}

func escrever(text string) {
	for {
		fmt.Println(text)
		time.Sleep(time.Second)
	}
}
