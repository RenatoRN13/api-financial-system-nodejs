const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

async function getByDate(yearMonth) {
    return await TransactionModel.find({yearMonth: yearMonth});  
}

async function getByDescrition(description) {
    return await TransactionModel.find({description: { $regex: description, $options: "i" }});  
}

async function create(balanceItem) {
    return await TransactionModel.create(balanceItem);
}

async function update(id, balanceItem) {
    return await TransactionModel.findByIdAndUpdate(id, balanceItem);
}

async function deleteItem(id) {
    return await TransactionModel.findByIdAndDelete(id);
}

module.exports = { getByDate, getByDescrition, create, update, deleteItem };