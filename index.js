const express = require('express');
var admin = require("firebase-admin");
var serviceAccount = require("./privateKey.json");
const app = express();

var port = process.env.PORT || 3000;

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