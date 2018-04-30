const express = require('express');
var admin = require("firebase-admin");
const cors = require('cors');
require('dotenv').config()
const app = express();


app.use(cors());

var serviceAccount = {
  "type": process.env.type,
  "project_id": process.env.project_id,
  "private_key_id": process.env.private_key_id,
  "private_key":  process.env.private_key,
  "client_email":  process.env.client_email,
  "client_id":  process.env.client_id,
  "auth_uri":  process.env.auth_uri,
  "token_uri":  process.env.token_uri,
  "auth_provider_x509_cert_url":  process.env.auth_provider_x509_cert_url,
  "client_x509_cert_url":  process.env.client_x509_cert_url
}

var port = process.env.PORT;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://map-marklet-b068f.firebaseio.com"
});

// Retrieve services
defaultAuth = admin.auth();
defaultDatabase = admin.database();

app.get('/:user', function (req, res) {
  defaultDatabase.ref().child('users').child(req.params.user).once("value", data => {
    res.setHeader('Content-Type', 'application/json');
    res.send(data.val());
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));