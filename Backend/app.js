const express= require("express")
const app = express()
const award = require('./routers/api/award')

app.get("/award/$title", award.getAward)
app.post('/award', award.post)
app.delete("/delete/$title", award.delete)

module.exports = app;