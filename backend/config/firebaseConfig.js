const admin = require("firebase-admin");

const serviceAccount = require("../path-to-your-service-account-key.json"); // Update with actual path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // Update with actual Firebase project URL
});

const db = admin.firestore();

module.exports = { admin, db };
