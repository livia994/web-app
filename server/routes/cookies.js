const express = require('express');
const router = express.Router();
const cookies = require('../data/cookies');
const auth = require('../middleware/auth');

let cookieList = [...cookies];

router.get('/', auth(['READ']), (req, res) => {
  const { skip = 0, limit = 12 } = req.query;
  res.json(cookieList.slice(parseInt(skip), parseInt(skip) + parseInt(limit)));
});

router.post('/', auth(['WRITE']), (req, res) => {
  const newCookie = { id: Date.now(), ...req.body };
  cookieList.push(newCookie);
  res.status(201).json(newCookie);
});

router.put('/:id', auth(['WRITE']), (req, res) => {
  const idx = cookieList.findIndex(c => c.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).send('Not found');
  cookieList[idx] = { ...cookieList[idx], ...req.body };
  res.json(cookieList[idx]);
});

router.delete('/:id', auth(['WRITE']), (req, res) => {
  cookieList = cookieList.filter(c => c.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

module.exports = router;
