const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mahilb377:h67YDVMCrqxWdOYd@petwebsite.daiyi.mongodb.net/?retryWrites=true&w=majority&appName=PetWebsite");

const User = require('./model/userModel')

http.listen(3000, function(){
    console.log('Server is running');
});