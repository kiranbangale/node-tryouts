import dotenv from 'dotenv';
dotenv.load();

export default {
    'env': 'dev',
    'jwtSecret': 'my-api-secret',
    'jwtDuration': '2 hours',
    'database': 'mongodb://localhost/restTest', //mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
    'port': process.env.PORT || 3000
};
