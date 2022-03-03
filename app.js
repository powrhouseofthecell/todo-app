// import express from 'express';
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(
   'mongodb+srv://zuhaib:password123!@phase1.l27ib.mongodb.net/todoDB?retryWrites=true&w=majority'
   // {
   //    useNewUrlParser: true,
   //    useUnifiedTopology: true,
   // }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(require('./routes/index'));
app.use(require('./routes/todo'));

app.listen(PORT, () => console.log('Server started listening on port: 3000'));

// zuhaib/password123!
