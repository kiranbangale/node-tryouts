import UserActivity from '../activities/activityModel';

function save (req, res) {
    UserActivity.create({
        user: req.user,
        ip: req.ip,
        ua: req.headers['user-agent'],
        date: new Date()
    });
};

export default {save};