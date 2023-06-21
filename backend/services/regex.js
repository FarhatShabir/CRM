function regex(data){
    return new RegExp("^"+data+".*","i");
}
module.exports=regex;