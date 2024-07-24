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
  const { name, description, user, marca, modelo, anio, version, placas, servicio, noServicio, fechaYHoraRecogida, fechaYHoraEntrega, lugarRecogida, lugarEntrega } = request.body;

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
    noServicio,
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
  const good = await Good.findById(id);

  const { name, description, user, marca, modelo, anio, version, placas, servicio, noServicio, fechaYHoraRecogida, fechaYHoraEntrega, lugarRecogida, lugarEntrega } = request.body;

  const goodToUpdate = {
    name,
    description,
    user,
    marca,
    modelo,
    anio,
    version,
    placas,
    servicio,
    noServicio,
    fechaYHoraRecogida,
    fechaYHoraEntrega,
    lugarRecogida,
    lugarEntrega
  };

  const updatedGood = await Good.findByIdAndUpdate(id, goodToUpdate, { new: true });

  response.status(200).json(updatedGood);
});

//Delete a good
goodRouter.delete('/:id', middleware.userExtractor, async (request, response) => {
  const id = request.params.id;
  const good = await Good.findById(id);

  const isAdmin = request.user.roles.includes('admin');
  const isOwner = good.user.toString() === request.user._id.toString();

  if (isAdmin || isOwner) {
    await Good.findByIdAndDelete(id);
    return response.status(204).end();
  }

  response.status(401).json({ error: 'Unauthorized' });
});

module.exports = goodRouter;