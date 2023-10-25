package main

import (
	"os"
)

// PORT is where the web server listens to
var PORT = ":1234"

func main() {
	arguments := os.Args
	if len(arguments) >= 2 {
		PORT = ":" + arguments[1]
	}

	//s := http.Server{
	//	Addr:         PORT,
	//	Handler:      routes.RouterMux(),
	//	ErrorLog:     nil,
	//	ReadTimeout:  5 * time.Second,
	//	WriteTimeout: 5 * time.Second,
	//	IdleTimeout:  10 * time.Second,
	//}
	//
	//go func() {
	//	log.Println("Listening to", PORT)
	//	err := s.ListenAndServe()
	//	if err != nil {
	//		log.Printf("Error starting server: %s\n", err)
	//		return
	//	}
	//}()

	//sigs := make(chan os.Signal, 1)
	//signal.Notify(sigs, os.Interrupt)
	//sig := <-sigs
	//log.Println("Quitting after signal:", sig)
	//time.Sleep(5 * time.Second)
	//err := s.Shutdown(nil)
	//if err != nil {
	//	return
	//}
}
