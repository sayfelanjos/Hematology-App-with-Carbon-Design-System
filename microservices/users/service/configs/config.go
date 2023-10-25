package configs

type Config struct {
	API apiConfig `yaml:"apiConfig"`
	DB  dbConfig  `yaml:"dbConfig"`
}

type apiConfig struct {
	Host string `yaml:"host"`
	Port int    `yaml:"port"`
}

type dbConfig struct {
	Driver   string `yaml:"driver"`
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	User     string `yaml:"user"`
	Password string `yaml:"password"`
	Name     string `yaml:"name"`
}
