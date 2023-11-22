package routes

import (
	"github.com/go-openapi/runtime/middleware"
	"github.com/gorilla/mux"
	"net/http"
	http2 "users/internal/handler/http"
)

var rMux = mux.NewRouter()

func RouterMux() *mux.Router {
	rMux.NotFoundHandler = http.HandlerFunc(http2.DefaultHandler)

	notAllowed := http2.NotAllowedHandler{}
	rMux.MethodNotAllowedHandler = notAllowed

	rMux.HandleFunc("/time", http2.TimeHandler)

	// Define Handler Functions
	// Register GET
	getMux := rMux.Methods(http.MethodGet).Subrouter()
	getMux.HandleFunc("/getall", http2.GetAllHandler)
	getMux.HandleFunc("/getid/{username}", http2.GetIDHandler)
	getMux.HandleFunc("/logged", http2.LoggedUsersHandler)
	getMux.HandleFunc("/username/{id:[0-9]+}", http2.GetUserDataHandler)

	// Register PUT
	// Update User
	putMux := rMux.Methods(http.MethodPut).Subrouter()
	putMux.HandleFunc("/update", http2.UpdateHandler)

	// Register POST
	// Add User + Login + Logout
	postMux := rMux.Methods(http.MethodPost).Subrouter()
	postMux.HandleFunc("/add", http2.AddHandler)
	postMux.HandleFunc("/login", http2.LoginHandler)
	postMux.HandleFunc("/logout", http2.LogoutHandler)

	// Register DELETE
	// Delete User
	deleteMux := rMux.Methods(http.MethodDelete).Subrouter()
	deleteMux.HandleFunc("/username/{id:[0-9]+}", http2.DeleteHandler)

	// API spec server (OpenAPI)
	opts := middleware.RedocOpts{SpecURL: "/users/api_client/openapi_spec/openapi.yaml"}
	sh := middleware.Redoc(opts, nil)
	getMux.Handle("/docs", sh)
	getMux.Handle("/users/api_client/openapi_spec/openapi.yaml", http.FileServer(http.Dir("./")))

	return rMux
}
