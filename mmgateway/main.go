package main

import "github.com/gin-gonic/gin"

func GetUserWatchedIds(ctx *gin.Context) {

}

func GetUserInfo(ctx *gin.Context) {

}

func GetItemInfo(ctx *gin.Context) {

}

func GetU2IResult(ctx *gin.Context) {}

func GetI2IResult(ctx *gin.Context) {}

func main() {
	router := gin.Default()

	group := router.Group("/api")

	group.POST("/get_user_watched_ids", GetUserWatchedIds)

	group.POST("/get_user_info", GetUserInfo)

	group.POST("/get_item_info", GetItemInfo)

	group.POST("/get_u2i_result", GetU2IResult)

	group.POST("/get_i2i_result", GetI2IResult)

	router.Run(":8000")
}
