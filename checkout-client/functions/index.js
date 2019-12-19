const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

const admin = require("firebase-admin");
admin.initializeApp();

app.use(cors());
app.get("/api", (request, response) => {
  response.send("Hello from Firebase!");
});

app.get("/api/admin_only", async(request, response) => {
  console.log(request)
  await admin
  .auth()
  .getUserByEmail(request.body.email) 
  .then(user => {
    response.send(user);
    return
  })
  .catch(err => {
    response.status(400).send(err.message);
    return 
  });
  response.send("Hello from Firebase!");
});

app.post("/api/admin_only", async (request, response) => {
  await admin
    .auth()
    .getUserByEmail(request.body.email)
    .then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      });
    })
    .then(user => {
      response.send({message: `Success! ${request.body.email} has been made an admin.`});
      return
    })
    .catch(err => {
      response.status(400).send(err.message);
      return 
    });
});


exports.app = functions.https.onRequest(app);
