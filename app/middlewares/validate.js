import Joi from 'joi';

export default {

    // POST
    createReq: {
        body: {
            username: Joi.string().required(),
            email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
            password: Joi.string().required(),
            userType: Joi.string().required(),
        }
    },

    // GET-PUT-DELETE
    getReq: {
        params: {
            id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        }
    },

    // PUT
    updateReq: {
        username: Joi.string().required(),
        email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
        password: Joi.string().required(),
        userType: Joi.string().required(),
    }

};
