const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const auth = require('../middleware/auth');

const dataPath = path.join(__dirname, '../data/cookies.json');

const loadCookies = () => {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
};

const saveCookies = (cookies) => {
  fs.writeFileSync(dataPath, JSON.stringify(cookies, null, 2));
};
/**
 * @swagger
 * tags:
 *   name: Cookies
 *   description: Cookie management API
 */

/**
 * @swagger
 * /api/cookies:
 *   get:
 *     summary: Get all cookies
 *     tags: [Cookies]
 *     parameters:
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *         description: Number of items to skip
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items to return
 *     responses:
 *       200:
 *         description: List of cookies
 *   post:
 *     summary: Add a new cookie
 *     tags: [Cookies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *               category:
 *                 type: string
 *               likes:
 *                 type: number
 *               featured:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Cookie created
 */

/**
 * @swagger
 * /api/cookies/{id}:
 *   put:
 *     summary: Update a cookie by ID
 *     tags: [Cookies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Cookie updated
 *       404:
 *         description: Cookie not found
 *   delete:
 *     summary: Delete a cookie by ID
 *     tags: [Cookies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cookie deleted
 *       404:
 *         description: Cookie not found
 */

router.get('/', auth(['READ']), (req, res) => {
  const cookies = loadCookies();
  const { skip = 0, limit = 12 } = req.query;
  res.json(cookies.slice(parseInt(skip), parseInt(skip) + parseInt(limit)));
});

router.post('/', auth(['WRITE']), (req, res) => {
  const cookies = loadCookies();
  const newCookie = { id: Date.now(), ...req.body };
  cookies.push(newCookie);
  saveCookies(cookies);
  res.status(201).json(newCookie);
});

router.put('/:id', auth(['WRITE']), (req, res) => {
  const cookies = loadCookies();
  const idx = cookies.findIndex(c => c.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).send('Not found');
  cookies[idx] = { ...cookies[idx], ...req.body };
  saveCookies(cookies);
  res.json(cookies[idx]);
});

router.delete('/:id', auth(['WRITE']), (req, res) => {
  let cookies = loadCookies();
  const idx = cookies.findIndex(c => c.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).send('Not found');
  const deleted = cookies.splice(idx, 1);
  saveCookies(cookies);
  res.status(204).send();
});

module.exports = router;