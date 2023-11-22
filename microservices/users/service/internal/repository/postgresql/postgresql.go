package postgresql

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"
)

// PostgreSQL Connection details
//
// We are using localhost as hostname because both
// the utility and PostgreSQL run on the same machine
var (
	Hostname = "localhost"
	Port     = 5432
	Username = "postgres"
	Password = "postgres"
	Database = "users"
)

// ConnectPostgres is for connect to the postgres database always that an operation is fired
func ConnectPostgres() (*sql.DB, error) {
	connectionString := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		Hostname, Port, Username, Password, Database)

	db, err := sql.Open("postgres", connectionString)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	return db, nil
}
