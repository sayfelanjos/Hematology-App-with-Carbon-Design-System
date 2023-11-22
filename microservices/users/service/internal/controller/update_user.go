package controller

import (
	"database/sql"
	"fmt"
	"log"
	"users/gen/grpc_api"
	"users/internal/repository/postgresql"
)

// UpdateUser allows you to update user name
func UpdateUser(u grpc_api.User) bool {
	log.Println("Updating user:", u)

	db, err := postgresql.ConnectPostgres()
	if err != nil {
		fmt.Println("Cannot connect to PostgreSQL!")
		return false
	}
	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {
			log.Println(err)
		}
	}(db)

	stmt, err := db.Prepare("UPDATE clinic_pathology.users SET id=$1, =$2, admin=$3, active=$4 WHERE id = $5")
	if err != nil {
		log.Println("Adduser:", err)
		return false
	}

	res, err := stmt.Exec(u.FirstName, u.LastName, u.EmailAddress, u.PhoneNumber, u.Id)
	if err != nil {
		log.Println("UpdateUser failed:", err)
		return false
	}

	affect, err := res.RowsAffected()
	if err != nil {
		log.Println("RowsAffected() failed:", err)
		return false
	}
	log.Println("Affected:", affect)
	return true
}
