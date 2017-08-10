'use strict';

const nodemailer = require('nodemailer');
const express = require('express');

let router = express.Router();
app.use('router');
router.post('')

function handleMail(req, res){
  let transporter = nodemailer.createTransport({
    service: 'Gmail'
  });
};
