package main

import (
	"context"
	"fmt"
	"strconv"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// Greet returns a greeting for the given name
func (a *App) Sum(input1 string, input2 string) string {
	num1, err1 := strconv.Atoi(input1)
	if err1 != nil {
		fmt.Println("Error converting input1:", err1)
		return ""
	}
	num2, err2 := strconv.Atoi(input1)
	if err2 != nil {
		fmt.Println("Error converting input1:", err1)
		return ""
	}
	c := strconv.Itoa(num1 + num2)
	return c
}
