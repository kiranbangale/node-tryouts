import dotenv from 'dotenv';
dotenv.load();

export default {
    'secret': 'secret',
    'database': 'mongodb://localhost/restTest', //mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
    'port': process.env.PORT || 3000,
    'env': 'dev',
	'sslOptions' = {
	  'key': fs.readFileSync('key.pem'),
	  'cert': fs.readFileSync('cert.pem')
	}
};