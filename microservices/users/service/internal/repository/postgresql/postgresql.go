package postgresql

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"pathology-clinic-unicamp/users/configs"
)

func InitDB(c *configs.Config) (*sql.DB, error) {
	var connectionString = fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		c.DB.Host, c.DB.Port, c.DB.User, c.DB.Password, c.DB.Name)
	var err error
	db, err := sql.Open(c.DB.Driver, connectionString)

	if err != nil {
		return nil, err
	}

	if err != nil {
		return nil, err
	}

	if err != nil {
		return nil, err
	}

	return db, nil
}
