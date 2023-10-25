package routes

import (
	"api_gateway/internal/handler"
	"github.com/gorilla/mux"
	"net/http"
)

var rMux = mux.NewRouter()

func RouterMux() *mux.Router {
	// Define Handler Functions
	// Register GET
	getMux := rMux.Methods(http.MethodGet).Subrouter()
	getMux.HandleFunc("/", nil)

	// Register POST
	postMux := rMux.Methods(http.MethodPost).Subrouter()
	postMux.HandleFunc("/login", handler.LoginHandler)
	postMux.HandleFunc("/logout", handler.LogoutHandler)

	// Register DELETE
	deleteMux := rMux.Methods(http.MethodDelete).Subrouter()
	deleteMux.HandleFunc("/somepath", nil)

	// Register PUT
	putMux := rMux.Methods(http.MethodPut).Subrouter()
	putMux.HandleFunc("/somepath", nil)

	// Register PATCH
	patchMux := rMux.Methods(http.MethodPatch).Subrouter()
	patchMux.HandleFunc("/somepath", nil)

	return rMux
}
