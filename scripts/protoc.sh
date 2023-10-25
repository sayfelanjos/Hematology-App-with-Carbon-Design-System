#!/usr/bin/env bash

protoc  -I=api \
        --go_out=. \
       --go_opt=module=users \
       --go-grpc_out=. \
       --go-grpc_opt=module=users \
       api/proto/users.proto
