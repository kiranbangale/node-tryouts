import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const types = ['admin', 'user'];

const UserSchema = new mongoose.Schema({
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, index: { unique: true }, match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
    password: { type: String, required: true, trim: true },
    userType: { enum: types } // Create another collection for storing types and use id in this schema
});

UserSchema.pre('save', function(nxt) {

    const user = this;

    if (!user.isModified('password')) {
        return nxt();
    }

    bcrypt.genSalt(10, (err, salt) => {

        if (err) return nxt(err);
        bcrypt.hash(user.password, salt, (hashErr, hash) => {
            if (hashErr) return nxt(hashErr);
            user.password = hash;
            nxt();
        });

    });

});

UserSchema.methods.comparePassword = function (toCompare, done) {

    bcrypt.compare(toCompare, this.password, (err, isMatch) => {
        if (err) done(err);
        else done(err, isMatch);
    });

};

export default mongoose.model('User', UserSchema);
