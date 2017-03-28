import express from 'express';
import bodyParser from 'body-parser';
import expressValidation from 'express-validation';
import routes from '../app/routes';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// mount all routes on /api path
app.use('/api', routes);


app.use((err, req, res, nxt) => {

  res.status(err.status)
    .json({
      status: err.status,
      message: err.message
    });

});


app.use((err, req, res, nxt) => {
  
  if (err instanceof expressValidation.ValidationError) {
    res.status(err.status).json(err);
  } else {
    res.status(500)
      .json({
        status: err.status,
        message: err.message
      });
  }

});

export default app;