package postgresql

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

var (
	Hostname = "localhost"
	Port     = 5432
	Username = "postgres"
	Password = "postgres"
	Database = "auth"
)

func ConnectPostgres() (*sql.DB, error) {
	connectionString := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		Hostname, Port, Username, Password, Database)

	db, err := sql.Open("postgres", connectionString)

	if err != nil {
		return nil, err
	}

	return db, nil
}
