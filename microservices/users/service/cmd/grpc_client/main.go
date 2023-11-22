package grpc_client

//
//import (
//	"fmt"
//	"google.golang.org/grpc"
//	"os"
//	"users/gen/grpc_api"
//)
//
//var port string = ":8081"
//
//func main() {
//	if len(os.Args) == 1 {
//		fmt.Println("Using default port:", port)
//	} else {
//		port = os.Args[1]
//	}
//	conn, err := grpc.Dial(port, grpc.WithInsecure())
//	if err != nil {
//		fmt.Println("Dial:", err)
//		return
//	}
//
//	client := grpc_api.NewUsersServiceClient(conn)
//	r, err := client.GetAllUsers()
//	fmt.Println(r)
//
//}
