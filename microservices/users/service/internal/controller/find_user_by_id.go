package controller

import (
	"database/sql"
	"fmt"
	"log"
	"users/gen/grpc_api"
	"users/internal/repository/postgresql"
)

// FindUserID is for returning a user record defined by ID
func FindUserID(ID int) grpc_api.User {
	db, err := postgresql.ConnectPostgres()
	if err != nil {
		fmt.Println("Cannot connect to PostgreSQL!")
	}
	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {
			log.Println(err)
		}
	}(db)

	rows, err := db.Query("SELECT * FROM clinic_pathology.users where id = $1\n", ID)
	if err != nil {
		log.Println("Query:", err)
		return grpc_api.User{}
	}
	defer func(rows *sql.Rows) {
		err := rows.Close()
		if err != nil {
			log.Println(err)
		}
	}(rows)

	u := grpc_api.User{}
	var c1 int
	var c2, c3, c4, c5 string

	for rows.Next() {
		err = rows.Scan(&c1, &c2, &c3, &c4, &c5)
		if err != nil {
			log.Println(err)
			return grpc_api.User{}
		}
		u = grpc_api.User{FirstName: c2, LastName: c2, EmailAddress: c3, PhoneNumber: c4}
		log.Println("Found user:", u)
	}
	return u
}
