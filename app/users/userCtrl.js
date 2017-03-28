import User from './userModel';


function load(req, res, nxt, id) {
  
  User.findById(id)
    .exec()
    .then((user) => {
      req.dbUser = user;
      return nxt();
    }, (err) => nxt(err));

}


function get(req, res) {
  return res.json(req.dbUser);
}


function create(req, res, nxt) {

  User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType
    })
    .then((savedUser) => {
      return res.json(savedUser);
    }, (err) => nxt(err));

}


function update(req, res, nxt) {

  const user = req.dbUser;
  Object.assign(user, req.body);

  user.save()
    .then((savedUser) => res.sendStatus(204),
      (err) => nxt(err));

}


function list(req, res, nxt) {

  const { limit = 50, skip = 0 } = req.query;
  User.find()
    .skip(skip)
    .limit(limit)
    .exec()
    .then((users) => res.json(users),
      (err) => nxt(err));

}


function remove(req, res, nxt) {
  const user = req.dbUser;
  user.remove()
    .then(() => res.sendStatus(204),
      (err) => nxt(err));
}


export default { load, get, create, update, list, remove };