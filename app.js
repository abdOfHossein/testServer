const exprees = require('express');
const path = require('path/posix');
const app = exprees();
const PORT = process.env.PORT || 3000;
const routeUser=require(path.join(__dirname,"routes","user.js"));

app.use('/',routeUser);

app.listen(PORT,()=>{
    console.log(`server is runing on port:${PORT}`);
})