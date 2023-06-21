class CustomErrorHandler extends Error{
    constructor(status,message){
        super();
        this.status=status;
        this.message=message;
    }
    static alreadyExists(message){
        return new CustomErrorHandler(403,message);
    }
    static noChanges(message){
        return new CustomErrorHandler(304,message);
    }
    static unAuthorized(message){
        return new CustomErrorHandler(401,message);
    }
}
module.exports=CustomErrorHandler;