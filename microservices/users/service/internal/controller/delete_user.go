package controller

import (
	"database/sql"
	"log"
	"users/internal/repository/postgresql"
)

// DeleteUser is for deleting a user defined by ID
func DeleteUser(ID int) bool {
	db, err := postgresql.ConnectPostgres()
	if err != nil {
		log.Println("Cannot connect to PostgreSQL!")
		return false
	}
	defer func(db *sql.DB) {
		err := db.Close()
		if err != nil {
			log.Println(err)
		}
	}(db)

	// Check is the user ID exists
	t := FindUserID(ID)
	if t.Id == 0 {
		log.Println("User", ID, "does not exist.")
		return false
	}

	stmt, err := db.Prepare("DELETE FROM clinic_pathology.users WHERE id = $1")
	if err != nil {
		log.Println("DeleteUser:", err)
		return false
	}

	_, err = stmt.Exec(ID)
	if err != nil {
		log.Println("DeleteUser:", err)
		return false
	}

	return true
}
