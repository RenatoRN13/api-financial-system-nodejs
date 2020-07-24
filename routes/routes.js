const express = require('express');
const transactionRouter = express.Router();

const transactionService = require('../services/transactionService');

transactionRouter.get('/:yearMonth', async (req, res) => {
    transactionService.getByDate(req.params.yearMonth)
        .then( (balanceItems) => { 
            res.send(balanceItems) 
        })
        .catch( (err) => {
            res.end(`Error: ${err}`)
        });

});

transactionRouter.post('/', async (req, res) => {
    transactionService.create(req.body)
        .then( (balanceItem) => { 
            res.send(balanceItem) 
        })
        .catch( (err) => {
            console.log();
            res.end(`Error: ${err}`);
        })
});

transactionRouter.put('/:id', async (req, res) => {
    transactionService.update(req.params.id, req.body)
        .then( (balanceItem) => { 
            res.send({ oldBalanceItem: balanceItem, updatedInBalanceItem: req.body }) 
        })
        .catch( (err) => {
            res.end(`Error: ${err}`);
        })
});

transactionRouter.delete('/:id', async (req, res) => {
    transactionService.deleteItem(req.params.id)
        .then( (balanceItem) => { 
            res.send(balanceItem) 
        })
        .catch( (err) => {
            res.end(`Error: ${err}`);
        })
});



transactionRouter.get('/description/:description', async (req, res) => {
    transactionService.getByDescrition(req.params.description)
        .then( (balanceItems) => { 
            res.send(balanceItems) 
        })
        .catch( (err) => {
            res.end(`Error: ${err}`)
        });
});

module.exports = transactionRouter;
