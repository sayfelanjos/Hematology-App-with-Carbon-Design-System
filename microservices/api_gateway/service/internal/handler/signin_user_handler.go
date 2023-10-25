package handler

import (
	"api_gateway/internal/controller"
	"api_gateway/pkg/model"
	"encoding/json"
	"io"
	"log"
	"net/http"
)

func SignInUserHandler(w http.ResponseWriter, r *http.Request) {
	var user model.User
	d, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Error:", http.StatusBadRequest)
		return
	}
	err = json.Unmarshal(d, &user)
	if err != nil {
		log.Println(err)
		http.Error(w, "Error:", http.StatusBadRequest)
		return
	}

	u := controller.FindUserController(user.Email)

	if (u == model.User{}) {
		http.Error(w, "Email in use", http.StatusBadRequest)
		return
	}

	_, err = controller.AddUserController(user.Email, user.Password)
	if err != nil {

	}

}
