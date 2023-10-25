package main

import (
	"api_gateway/internal/routes"
	"fmt"
	"gopkg.in/yaml.v3"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"
)

func main() {
	// Get configuration from yaml file
	file, err := os.Open("./configs/base.yaml")
	if err != nil {
		log.Println(err)
	}
	var cfg config
	if err := yaml.NewDecoder(file).Decode(&cfg); err != nil {
		log.Println(err)
	}

	host := cfg.API.Host
	port := cfg.API.Port

	// Start Server
	server := &http.Server{
		Addr:         host + ":" + strconv.Itoa(port),
		Handler:      routes.RouterMux(),
		ErrorLog:     nil,
		WriteTimeout: 5 * time.Second,
		ReadTimeout:  5 * time.Second,
		IdleTimeout:  10 * time.Second,
	}
	fmt.Printf("Listening on %s:%d \n", host, port)
	log.Fatal(server.ListenAndServe())
}
