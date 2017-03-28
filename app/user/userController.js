import express from 'express';
import validate from 'express-validation';
import validationRules from '../middlewares/validate';
import bodyParser from 'body-parser';
import User from './user';

const route = express.Router();

route.use(bodyParser.urlencoded({ extended: true }));

route.post('/', validate(validationRules.createReq), (req, res) => {

    // User.create({
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password,
    //     userType: req.body.userType
    // })
    // .then((user) => {
    //     res.json(user);
    // }, (err) => nxt(err);


    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType
    }, (err, user) => {
        if (err) {
            return res.status(500).send("There was a problem adding the information to the database.");
        }
        res.status(200).send(user);
    });

});

route.get('/', (req, res) => {

    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).send("There was a problem finding the users.");
        }
        res.status(200).send(users);
    });

});

route.get('/:id', (req, res) => {

    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send("There was a problem finding the user.");
        }
        if(!user) {
            return res.status(404).send("User not found.");
        }
        res.status(200).send(user);
    });

});

route.delete('/:id', (req, res) => {

    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send("There was a problem deleting the user.");
        }
        res.status(200).send(`User ${user.name} was deleted.`);
    });

});

route.put('/:id', validate(validationRules.createReq), (req, res) => {

    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
        if (err) {
            res.status(500).send("There was a problem updating the user.");
        }
        res.status(200).send(user);
    });

});

/** Load task when API with id route parameter is hit */
route.param('id', validate(validationRules.getReq));

module.exports = route;
