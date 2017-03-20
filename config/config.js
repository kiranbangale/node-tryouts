const dotenv = require('dotenv');
dotenv.load();

module.exports = {
    'secret': 'ilovescotchyscotch',
    'database': 'mongodb://localhost/restTest', //mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
    'port': process.env.PORT || 3000
};