package controller

import (
	"api_gateway/internal/repository/postgresql"
	"api_gateway/pkg/model"
	"database/sql"
	"log"
)

// FindUserController if for returning a user with the given email
func FindUserController(email string) model.User {
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

	rows, err := db.Query("SELECT * FROM clinic_pathology.credentials where email = $1 \n", email)
	if err != nil {
		log.Println(err)
	}

	u := model.User{}
	var c1 int
	var c2, c3 string

	for rows.Next() {
		err = rows.Scan(&c1, &c2, &c3)
		if err != nil {
			log.Println(err)
		}

		u = model.User{Id: c1, Email: c2, Password: c3}
	}
	return u
}
