package main

//
//import (
//	"fmt"
//	"google.golang.org/grpc"
//	"google.golang.org/grpc/reflection"
//	"log"
//	"net"
//	"os"
//	"users/gen/grpc_api"
//)
//
//var port = ":8080"
//
//func main() {
//	if len(os.Args) == 1 {
//		fmt.Println("Using default port:", port)
//	} else {
//		port = os.Args[1]
//	}
//
//	server := grpc.NewServer()
//
//	var userServer grpc_api.UsersServiceServer
//	grpc_api.RegisterUsersServiceServer(server, userServer)
//	reflection.Register(server)
//	listen, err := net.Listen("tcp", port)
//	if err != nil {
//		log.Println(err)
//		return
//	}
//	fmt.Println("Serving request...")
//	err = server.Serve(listen)
//	if err != nil {
//		log.Println(err)
//		return
//	}
//}
