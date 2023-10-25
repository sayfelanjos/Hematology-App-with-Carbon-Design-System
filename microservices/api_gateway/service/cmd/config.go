package main

type config struct {
	API apiConfig `yaml:"apiConfig"`
}

type apiConfig struct {
	Host string `yaml:"host"`
	Port int    `yaml:"port"`
}
