const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

// menambah data ke notifications collection
const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

// jika ada barang baru yang ditambahkan, function ini akan ter-trigger
exports.barangCreated = functions.firestore
  .document("barangs/{barangId}")
  .onCreate((doc) => {
    const barang = doc.data();
    const notification = {
      content: "Add a new barang",
      cabang: barang.cabang,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

// jika ada user baru yang ditambahkan, function ini akan ter-trigger
exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the company",
        cabang: newUser.cabang,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});
