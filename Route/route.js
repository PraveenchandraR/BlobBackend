const route = require("express").Router()
const data= require("../Dummydata/data")

route.get("/indiancinema", data.indiancinema);
route.get("/hollywood", data.hollywood);
route.get("/anime", data.anime);
route.get("/technology", data.technology);
route.get("/games", data.games);



module.exports = route;