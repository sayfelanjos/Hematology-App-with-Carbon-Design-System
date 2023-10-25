package routes

import (
	"github.com/go-openapi/runtime/middleware"
	"github.com/gorilla/mux"
	"net/http"
	"users/internal/handler"
)

var rMux = mux.NewRouter()

func RouterMux() *mux.Router {
	rMux.NotFoundHandler = http.HandlerFunc(handler.DefaultHandler)

	notAllowed := handler.NotAllowedHandler{}
	rMux.MethodNotAllowedHandler = notAllowed

	rMux.HandleFunc("/time", handler.TimeHandler)

	// Define Handler Functions
	// Register GET
	getMux := rMux.Methods(http.MethodGet).Subrouter()
	getMux.HandleFunc("/getall", handler.GetAllHandler)
	getMux.HandleFunc("/getid/{username}", handler.GetIDHandler)
	getMux.HandleFunc("/logged", handler.LoggedUsersHandler)
	getMux.HandleFunc("/username/{id:[0-9]+}", handler.GetUserDataHandler)

	// Register PUT
	// Update User
	putMux := rMux.Methods(http.MethodPut).Subrouter()
	putMux.HandleFunc("/update", handler.UpdateHandler)

	// Register POST
	// Add User + Login + Logout
	postMux := rMux.Methods(http.MethodPost).Subrouter()
	postMux.HandleFunc("/add", handler.AddHandler)
	postMux.HandleFunc("/login", handler.LoginHandler)
	postMux.HandleFunc("/logout", handler.LogoutHandler)

	// Register DELETE
	// Delete User
	deleteMux := rMux.Methods(http.MethodDelete).Subrouter()
	deleteMux.HandleFunc("/username/{id:[0-9]+}", handler.DeleteHandler)

	// API spec server (OpenAPI)
	opts := middleware.RedocOpts{SpecURL: "/users/api_client/openapi_spec/openapi.yaml"}
	sh := middleware.Redoc(opts, nil)
	getMux.Handle("/docs", sh)
	getMux.Handle("/users/api_client/openapi_spec/openapi.yaml", http.FileServer(http.Dir("./")))

	return rMux
}
