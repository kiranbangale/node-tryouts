import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserActivitySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    ip: String,
    ua: String,
    date: Date
});

export default mongoose.model('UserActivity', UserActivitySchema);
