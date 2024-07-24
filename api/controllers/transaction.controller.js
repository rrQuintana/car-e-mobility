const transactionRouter = require('express').Router();
const Transaction = require('../models/transaction');
const User = require('../models/user');
const Good = require('../models/good');
const middleware = require('../utils/middleware')

//Get all transactions
transactionRouter.get('/', middleware.permissionChecker, async (request, response) => {
  const transactions = await Transaction.find({});
  response.status(200).json(transactions);
});

//Get a single transaction
transactionRouter.get('/:id', middleware.userExtractor, async (request, response) => {
  const transaction = await Transaction.findById(request.params.id);
  response.status(200).json(transaction);
});

//Create a new transaction
transactionRouter.post('/', async (request, response) => {
  const body = request.body;
  const good = await Good.findById(body.good);
  const buyer = await User.findById(body.buyer);
  const vendor = await User.findById(body.vendor);

  if (!good || !buyer || !vendor) {
    return response.status(400).json({ error: 'invalid id' });
  }

  const transaction = new Transaction({
    good: body.good,
    buyer: body.buyer,
    vendor: body.vendor,
    type: body.type,
    method: body.method,
    price: body.price,
    status: body.status
  });

  const savedTransaction = await transaction.save();
  response.status(200).json(savedTransaction);
});

//Update a transaction
transactionRouter.put('/:id', async (request, response) => {
  const body = request.body;

  const transaction = {
    good: body.good,
    buyer: body.buyer,
    vendor: body.vendor,
    type: body.type,
    method: body.method,
    price: body.price,
    status: body.status
  };

  const updatedTransaction = await Transaction.findByIdAndUpdate(request.params.id, transaction, { new: true });
  response.status(200).json(updatedTransaction);
});

//Delete a transaction
transactionRouter.delete('/:id', middleware.permissionChecker, async (request, response) => {
  await Transaction.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

module.exports = transactionRouter;