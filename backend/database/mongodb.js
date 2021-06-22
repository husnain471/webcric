const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // This allows asychronous code

mongoose.connect('mongodb+srv://developer1:developer1234@cluster0.fgvz4.mongodb.net/test', {useNewUrlParser: true,  useUnifiedTopology: true})
.then(()=>console.log("Database connected"))
.catch((error) => console.log(error));

module.exports = mongoose;