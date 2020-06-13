var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique:true
    },
    password: {
        type: String
    },    

})

module.exports = User = mongoose.model('User',userSchema);
