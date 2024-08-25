class ApiResponse {
    constructor(
        statusCode,
        data,
        message = "Sucess",
        sucess ,
    ){
        this.statusCode=statusCode,
        this.data=data,
        this.message=message
        this.sucess=statusCode
    }
}

export {ApiResponse}