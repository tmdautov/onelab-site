const firestoreService = require("firestore-export-import");
const serviceAccount = require("path/to/serviceAccountKey.json");

const databaseURL = "https://adilk-efc66.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("users.json");