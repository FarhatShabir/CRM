const handle={
    saleByDate:require("./totalsalesbydate"),
    
    addSale:require("./addsale.handler"),
    updateSale:require("./updatesale.handle"),
    deleteSale:require("./deletesale.handler"),
    getSales:require("./getsales.handler"),
    getSalesByFilter:require("./getSalesByFilter.handler"),
    findSaleByVehicleNo:require("./findSaleByVehicleNo.handler"),
    getSalesByPagination:require("./getSalesByPagination.handler")
}
module.exports=handle;