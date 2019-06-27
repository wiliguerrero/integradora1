const mongoose = require('mongoose');

const URI = 'mongodb://localhost/BD-SCOUTS';

mongoose.connect(URI)
    .then(db=> console.log('connect'))
    .catch(err => console.error(err));
module.exports=mongoose;
