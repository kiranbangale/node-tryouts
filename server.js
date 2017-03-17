const app = require('./config/app');
const dotenv = require('dotenv');
dotenv.load();

app.listen(process.env.PORT, () => {
    console.log(`Express server running on port: ${process.env.PORT}`);
});
