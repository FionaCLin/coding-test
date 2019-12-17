const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/api', (request, response) => {
  response.send("Hello from Firebase!");
 })



exports.app = functions.https.onRequest(app);
