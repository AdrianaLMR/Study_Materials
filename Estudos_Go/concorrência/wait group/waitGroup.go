package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var waitGroup sync.WaitGroup

	waitGroup.Add(2)
	go func() {
		escrever("ola mundo")
		waitGroup.Done()
	}()
	go func() {
		escrever("Programando em go")
		waitGroup.Done()
	}()

	waitGroup.Wait()
}

func escrever(text string) {
	for i := 0; i < 5; i++ {
		fmt.Println(text)
		time.Sleep(time.Second)
	}
}
