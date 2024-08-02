const goodRouter = require('express').Router();
const Good = require('../models/good');
const middleware = require('../utils/middleware');
const picturesService = require('../utils/services/pictures.service');

//Get all goods
goodRouter.get('/', async (request, response) => {
  const goods = await Good.find({});
  response.status(200).json(goods);
});

//Get a single good
goodRouter.get('/:id', async (request, response) => {
  const good = await Good.findById(request.params.id);
  response.status(200).json(good);
});

//Create a new good
goodRouter.post('/', middleware.userExtractor, async (request, response) => {
  const { name, description, user, marca, modelo, anio, version, placas, servicio, fechaYHoraRecogida, fechaYHoraEntrega, lugarRecogida, lugarEntrega } = request.body;

  let savedPictures = [];

  const good = new Good({
    name,
    description,
    user,
    marca,
    modelo,
    anio,
    version,
    placas,
    servicio,
    fechaYHoraRecogida,
    fechaYHoraEntrega,
    lugarRecogida,
    lugarEntrega,
    pictures: savedPictures.map(picture => picture._id)
  });

  const savedGood = await good.save();
  console.log(good);

  response.status(200).json(savedGood);
});


//Update a good
goodRouter.put('/:id', middleware.userExtractor, async (request, response) => {

  const id = request.params.id;

  const { name, description, estatus, user, marca, modelo, anio, version, placas, servicio, fechaYHoraRecogida, fechaYHoraEntrega, lugarRecogida, lugarEntrega } = request.body;

  const goodToUpdate = {
    name,
    description,
    user,
    marca,
    modelo,
    estatus,
    anio,
    version,
    placas,
    servicio,
    fechaYHoraRecogida,
    fechaYHoraEntrega,
    lugarRecogida,
    lugarEntrega
  };

  const updatedGood = await Good.findByIdAndUpdate(id, goodToUpdate);

  response.status(200).json(updatedGood);
});

//Delete a good
goodRouter.delete('/:id', middleware.userExtractor, async (request, response) => {
  const id = request.params.id;

  await Good.findByIdAndDelete(id);
  return response.status(204).end();
});

module.exports = goodRouter;