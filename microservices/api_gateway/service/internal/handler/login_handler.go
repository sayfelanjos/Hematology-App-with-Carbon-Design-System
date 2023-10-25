package handler

import (
	"api_gateway/internal/controller"
	"api_gateway/pkg/model"
	"bytes"
	"crypto/sha256"
	"encoding"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

const secret = "our-secret"

func LoginHandler(w http.ResponseWriter, r *http.Request) {
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

	if !ValidCredentials(u.Email, u.Password) {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	//token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
	//	"username": e,
	//	"iat":      time.Now().Unix(),
	//})

	//tokenString, err := token.SignedString(secret)
	//// Read token
	//token, err = jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
	//	// key function
	//	if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
	//		return nil, fmt.Errorf("Unexpected signing method: %v",
	//			token.Header["alg"])
	//	}
	//	return "my_secret_key", nil
	//})
	//
	//if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
	//	// Use claims for authorization if token is valid
	//	fmt.Println(claims["username"], claims["iat"])
	//} else {
	//	fmt.Println(err)
	//}
	//
	//if err != nil {
	//	http.Error(w, "failed to create a token", http.StatusInternalServerError)
	//	return
	//}
	//fmt.Fprintf(w, tokenString)
}

func ValidCredentials(email, password string) bool {
	const (
		input1 = "The tunneling gopher digs downwards, "
		input2 = "unaware of what he will find."
	)

	first := sha256.New()
	first.Write([]byte(input1))

	marshaler, ok := first.(encoding.BinaryMarshaler)
	if !ok {
		log.Fatal("first does not implement encoding.BinaryMarshaler")
	}
	state, err := marshaler.MarshalBinary()
	if err != nil {
		log.Fatal("unable to marshal hash:", err)
	}

	second := sha256.New()

	unmarshaler, ok := second.(encoding.BinaryUnmarshaler)
	if !ok {
		log.Fatal("second does not implement encoding.BinaryUnmarshaler")
	}
	if err := unmarshaler.UnmarshalBinary(state); err != nil {
		log.Fatal("unable to unmarshal hash:", err)
	}

	first.Write([]byte(input2))
	second.Write([]byte(input2))

	fmt.Printf("%x\n", first.Sum(nil))
	fmt.Println(bytes.Equal(first.Sum(nil), second.Sum(nil)))
	return false
}
