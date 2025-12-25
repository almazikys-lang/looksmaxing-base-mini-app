const express = require('express');
const path = require('path');

module.exports = (app) => {
  app.use(express.static(path.join(__dirname, '../public')));
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  app.get('/page/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
