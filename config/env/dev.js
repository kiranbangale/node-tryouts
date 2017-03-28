import dotenv from 'dotenv';
dotenv.load();

export default {
    'env': 'dev',
    'secret': 'secret',
    'database': 'mongodb://localhost/restTest', //mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
    'port': process.env.PORT || 3000
};