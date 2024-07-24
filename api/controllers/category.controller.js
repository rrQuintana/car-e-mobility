const categoryRouter = require('express').Router();
const Category = require('../models/category');
const middleware = require('../utils/middleware')

//Get all categories
categoryRouter.get('/', async (request, response) => {
  const categories = await Category.find({});
  response.status(200).json(categories);
});

//Get a single category
categoryRouter.get('/:id', async (request, response) => {
  const category = await Category.findById(request.params.id);
  response.status(200).json(category);
});

//Create a new category
categoryRouter.post('/', middleware.permissionChecker, async (request, response) => {
  const body = request.body;

  const category = new Category({
    name: body.name,
    description: body.description,
    type: body.type
  });

  const savedCategory = await category.save();
  response.status(200).json(savedCategory);
});

//Update a category
categoryRouter.put('/:id', middleware.permissionChecker, async (request, response) => {
  const body = request.body;

  const category = {
    name: body.name,
    description: body.description,
    type: body.type
  };

  const updatedCategory = await Category.findByIdAndUpdate(request.params.id, category, { new: true });
  response.status(200).json(updatedCategory);
});

//Delete a category
categoryRouter.delete('/:id', middleware.permissionChecker, async (request, response) => {
  await Category.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = categoryRouter;