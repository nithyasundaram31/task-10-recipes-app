const app=require("./app");
const mongoose=require('mongoose')
const { MONGODB_URI } = require('./utils/config');

mongoose.connect( MONGODB_URI)
.then(()=>{
    console.log("connected to the mongodb")
})
.catch((err)=>{
    console.log(`error connecting to the mongodd:${err.message}`)
});
app.listen('3002', '127.0.0.1',()=>{
    console.log(`Server is running @ http://127.0.0.1:3002`);
    console.log(`Press Ctrl + C to stop the server`);
})