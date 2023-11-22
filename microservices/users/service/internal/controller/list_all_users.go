package controller

import (
	"database/sql"
	"fmt"
	"log"
	"users/gen/grpc_api"
	"users/internal/repository/postgresql"
)

// ListAllUsers is for returning all users from the database table
func ListAllUsers() []grpc_api.User {
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

	rows, err := db.Query("SELECT * FROM clinic_pathology.users \n")
	if err != nil {
		log.Println(err)
		return []grpc_api.User{}
	}

	all := []grpc_api.User{}
	var c1 int
	var c2, c3, c4, c5 string

	for rows.Next() {
		err = rows.Scan(&c1, &c2, &c3, &c4, &c5)
		temp := grpc_api.User{c1, c2, c3, c4, c5}
		all = append(all, temp)
	}

	log.Println("All:", all)
	return all
}
