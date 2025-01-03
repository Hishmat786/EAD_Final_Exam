const mongos = require("mongos")

mongos.createSchema({
    title:String, required,
    discription:String, required,
    requirement:	Number,	required,
    progress:	Number,	
})

