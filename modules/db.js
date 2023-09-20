const { default: mongoose } = require("mongoose");

// MongoDB Connection
// const url = 'process.env.PROD?process.env.LOCAL_DB:process.env.DB';
mongoose.connect('mongodb://127.0.0.1:27017/wapdb',{

    useUnifiedTopology: true,

    useNewUrlParser: true,

});
module.exports = mongoose