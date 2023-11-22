package controller

// Database: PostgreSQL
//
// Functions to support the interaction with the database

import (
	"database/sql"
	"fmt"
	"log"
	"users/gen/grpc_api"
	"users/internal/repository/postgresql"

	_ "github.com/lib/pq"
)

// InsertUser is for adding a new user to the database
func InsertUser(u grpc_api.User) bool {
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

	if IsUserValid(u) {
		log.Println("User", u.FirstName, "already exists!")
		return false
	}

	stmt, err := db.Prepare("INSERT INTO clinic_pathology.users(id, first_name, last_name, email_address, phone_number) values($1,$2,$3,$4,$5)")
	if err != nil {
		log.Println("Adduser:", err)
		return false
	}

	stmt.Exec(u.FirstName, u.LastName, u.EmailAddress, u.PhoneNumber)
	return true
}

//// ListLogged is for returning all logged users
//// This was created by mistake - the server uses
//// ReturnLoggedUsers() instead!
//func ListLogged() []grpc_api.User {
//	db, err := postgresql.ConnectPostgres()
//	if err != nil {
//		fmt.Println("Cannot connect to PostgreSQL!")
//	}
//	defer func(db *sql.DB) {
//		err := db.Close()
//		if err != nil {
//			log.Println(err)
//		}
//	}(db)
//
//	rows, err := db.Query("SELECT * FROM clinic_pathology.users WHERE active = 1\n")
//	if err != nil {
//		log.Println(err)
//		return []grpc_api.User{}
//	}
//
//	all := []grpc_api.User{}
//	var c1 int
//	var c2, c3 string
//	var c4 int64
//	var c5, c6 int
//
//	for rows.Next() {
//		_ = rows.Scan(&c1, &c2, &c3, &c4, &c5, &c6)
//		temp := grpc_api.User{c1, c2, c3, c4, c5, c6}
//		all = append(all, temp)
//	}
//
//	log.Println("All:", all)
//	return all
//}

//// FindUserUsername is for returning a user record defined by a username
//func FindUserUsername(username string) grpc_api.User {
//	db := ConnectPostgres()
//	if db == nil {
//		fmt.Println("Cannot connect to PostgreSQL!")
//		db.Close()
//		return grpc_api.User{}
//	}
//	defer db.Close()
//
//	rows, err := db.Query("SELECT * FROM clinic_pathology.users where name = $1 \n", username)
//	if err != nil {
//		log.Println("FindUserUsername Query:", err)
//		return grpc_api.User{}
//	}
//	defer rows.Close()
//
//	u := grpc_api.User{}
//	var c1 int
//	var c2, c3 string
//	var c4 int64
//	var c5, c6 int
//
//	for rows.Next() {
//		err = rows.Scan(&c1, &c2, &c3, &c4, &c5, &c6)
//		if err != nil {
//			log.Println(err)
//			return grpc_api.User{}
//		}
//		u = grpc_api.User{c1, c2, c3, c4, c5, c6}
//		log.Println("Found user:", u)
//	}
//	return u
//}

////// ReturnLoggedUsers is for returning all logged in users
////func ReturnLoggedUsers() []grpc_api.User {
////	db := ConnectPostgres()
////	if db == nil {
////		fmt.Println("Cannot connect to PostgreSQL!")
////		db.Close()
////		return []grpc_api.User{}
////	}
////	defer db.Close()
////
////	rows, err := db.Query("SELECT * FROM clinic_pathology.users WHERE active = 1 \n")
////	if err != nil {
////		log.Println(err)
////		return []grpc_api.User{}
////	}
////
////	all := []grpc_api.User{}
////	var c1 int
////	var c2, c3 string
////	var c4 int64
////	var c5, c6 int
////
////	for rows.Next() {
////		err = rows.Scan(&c1, &c2, &c3, &c4, &c5, &c6)
////		if err != nil {
////			log.Println(err)
////			return []grpc_api.User{}
////		}
////		temp := grpc_api.User{c1, c2, c3, c4, c5, c6}
////		log.Println("temp:", all)
////		all = append(all, temp)
////	}
////
////	log.Println("Logged in:", all)
////	return all
////}
//
//// IsUserAdmin determines whether a user is
//// an administrator or not
//func IsUserAdmin(u grpc_api.User) bool {
//	db := ConnectPostgres()
//	if db == nil {
//		fmt.Println("Cannot connect to PostgreSQL!")
//		db.Close()
//		return false
//	}
//	defer db.Close()
//
//	rows, err := db.Query("SELECT * FROM clinic_pathology.users WHERE name = $1", u.Username)
//	if err != nil {
//		log.Println(err)
//		return false
//	}
//
//	temp := grpc_api.User{}
//	var c1 int
//	var c2, c3 string
//	var c4 int64
//	var c5, c6 int
//
//	// If there exist multiple users with the same username,
//	// we will get the FIRST ONE only.
//	for rows.Next() {
//		err = rows.Scan(&c1, &c2, &c3, &c4, &c5, &c6)
//		if err != nil {
//			log.Println(err)
//			return false
//		}
//		temp = grpc_api.User{c1, c2, c3, c4, c5, c6}
//	}
//
//	if u.Username == temp.Username && u.Password == temp.Password && temp.Admin == 1 {
//		return true
//	}
//	return false
//}

func IsUserValid(u grpc_api.User) bool {
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

	rows, err := db.Query("SELECT * FROM clinic_pathology.users WHERE first_name = $1 \n", u.FirstName)
	if err != nil {
		log.Println(err)
		return false
	}

	temp := grpc_api.User{}
	var c1 int
	var c2, c3, c4, c5 string

	// If there exist multiple users with the same username,
	// we will get the FIRST ONE only.
	for rows.Next() {
		err = rows.Scan(&c1, &c2, &c3, &c4, &c5)
		if err != nil {
			log.Println(err)
			return false
		}
		temp = grpc_api.User{FirstName: c2, LastName: c3, EmailAddress: c4, PhoneNumber: c5}
	}

	if u.FirstName == temp.FirstName {
		return true
	}
	return false
}
