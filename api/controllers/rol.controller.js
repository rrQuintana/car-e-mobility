const rolRouter = require('express').Router();
const Rol = require('../models/rol');
const middleware = require('../utils/middleware')

//Get all roles
rolRouter.get('/', middleware.permissionChecker, async (request, response) => {
  const roles = await Rol.find({});
  response.status(200).json(roles);
});

//Get a single role
rolRouter.get('/:id', middleware.permissionChecker, async (request, response) => {
  const role = await Rol.findById(request.params.id);
  response.status(200).json(role);
});

//Create a new role
rolRouter.post('/', middleware.permissionChecker, async (request, response) => {
  const body = request.body;

  const role = new Rol({
    name: body.name,
    description: body.description
  });

  const savedRole = await role.save();
  response.status(200).json(savedRole);
});

//Update a role
rolRouter.put('/:id', middleware.permissionChecker, async (request, response) => {
  const body = request.body;

  const role = {
    name: body.name,
    description: body.description
  };

  const updatedRole = await Rol.findByIdAndUpdate(request.params.id, role, { new: true });
  response.status(200).json(updatedRole);
});

//Delete a role
rolRouter.delete('/:id', middleware.permissionChecker, async (request, response) => {
  await Rol.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = rolRouter;