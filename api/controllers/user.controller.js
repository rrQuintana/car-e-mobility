const userRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const middleware = require('../utils/middleware');

userRouter.post('/', async (request, response) => {
  const body = request.body;

  if (body.password < 3) {
    return response.status(400).json({ error: 'password is too short' });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    name: body.name,
    lastName: body.lastName,
    email: body.email,
    password: passwordHash,
  });

  const savedUser = await user.save();

  response.status(200).json(savedUser);
});

userRouter.get('/', middleware.permissionChecker, async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

userRouter.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id);
  response.json(user);
});

userRouter.delete('/:id', middleware.permissionChecker, async (request, response) => {
  await User.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

userRouter.put('/:id', middleware.userExtractor, async (request, response) => {
  const body = request.body;

  const user = {
    username: body.username,
    name: body.name,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
    institution: body.institution,
    studyField: body.studyField,
    skills: body.skills || [],
    interests: body.interests || [],
    goods: body.goods || [],
    messages: body.messages || [],
    transactions: body.transactions || [],
    roles: body.roles || [],
  };

  const updatedUser = await User.findByIdAndUpdate(request.params.id, user, { new: true });
  response.json(updatedUser);
});

module.exports = userRouter;