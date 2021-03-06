package main

import "github.com/gin-gonic/gin"
import "mmgateway/midware"

func GetU2IResult(ctx *gin.Context) {}

func GetI2IResult(ctx *gin.Context) {}

func main() {
	router := gin.Default()

	group := router.Group("/api")
	{
		group.POST("/get_u2i_result", midware.ReverseProxy(":8001"))
		group.POST("/get_i2i_result", midware.ReverseProxy(":8001"))
	}

	router.Run(":8000")
}
