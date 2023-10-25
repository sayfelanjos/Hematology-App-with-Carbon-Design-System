package controller

import (
	"api_gateway/internal/repository/postgresql"
	"api_gateway/pkg/model"
	"database/sql"
	"log"
)

func AddUserController(email, password string) (model.User, error) {
	var user model.User
	db, err := postgresql.ConnectPostgres()
	if err != nil {
		log.Println("Cannot connect to PostgreSQL!")
	}
	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {
			log.Println(err)
		}
	}(db)

	return user, nil
}
