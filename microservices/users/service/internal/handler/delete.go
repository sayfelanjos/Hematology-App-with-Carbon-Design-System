package handler

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"strconv"
	restdb "users/internal/controller"
)

// DeleteHandler is for deleting an existing user + DELETE
func DeleteHandler(rw http.ResponseWriter, r *http.Request) {
	log.Println("DeleteHandler Serving:", r.URL.Path, "from", r.Host)

	// Get the ID of the user to be deleted
	id, ok := mux.Vars(r)["id"]
	if !ok {
		log.Println("ID value not set!")
		rw.WriteHeader(http.StatusNotFound)
		return
	}

	var user = restdb.User{}
	err := user.FromJSON(r.Body)
	if err != nil {
		log.Println(err)
		rw.WriteHeader(http.StatusBadRequest)
		return
	}

	if !restdb.IsUserAdmin(user) {
		log.Println("User", user.Username, "is not admin!")
		rw.WriteHeader(http.StatusBadRequest)
		return
	}

	intID, err := strconv.Atoi(id)
	if err != nil {
		log.Println("id", err)
		return
	}

	t := restdb.FindUserID(intID)
	if t.Username != "" {
		log.Println("About to delete:", t)
		deleted := restdb.DeleteUser(intID)
		if deleted {
			log.Println("User deleted:", id)
			rw.WriteHeader(http.StatusOK)
			return
		} else {
			log.Println("User ID not found:", id)
			rw.WriteHeader(http.StatusNotFound)
		}
	}
	rw.WriteHeader(http.StatusNotFound)
}
