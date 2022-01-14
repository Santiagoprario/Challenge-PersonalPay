
var admin = require("firebase-admin");

var serviceAccount = require('./kiwibot-challenge-50ec6-firebase-adminsdk-oveuf-d6885b7cad.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://kiwibot-challenge-50ec6.firebaseio.com'
});


const db = admin.firestore();
const deliveries = db.collection('deliveries');
const bots = db.collection('bots');

module.exports = {
    deliveries,
    bots,
};