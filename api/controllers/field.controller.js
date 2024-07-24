const fieldRouter = require('express').Router();
const Field = require('../models/field');
const middleware = require('../utils/middleware')

//Get all fields
fieldRouter.get('/', async (request, response) => {
  const fields = await Field.find({});
  response.status(200).json(fields);
});

//Get a single field
fieldRouter.get('/:id', async (request, response) => {
  const field = await Field.findById(request.params.id);
  response.status(200).json(field);
});

//Create a new field
fieldRouter.post('/', middleware.permissionChecker, async (request, response) => {
  const body = request.body;

  const field = new Field({
    name: body.name,
    description: body.description,
    type: body.type
  });

  const savedField = await field.save();
  response.status(200).json(savedField);
});

//Update a field
fieldRouter.put('/:id', middleware.permissionChecker, async (request, response) => {
  const body = request.body;

  const field = {
    name: body.name,
    description: body.description,
    type: body.type
  };

  const updatedField = await Field.findByIdAndUpdate(request.params.id, field, { new: true });
  response.status(200).json(updatedField);
});

//Delete a field
fieldRouter.delete('/:id', middleware.permissionChecker, async (request, response) => {
  await Field.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = fieldRouter;