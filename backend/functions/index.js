const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

// Initialize Firebase Admin SDK
admin.initializeApp();

// Express app setup
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Importing routes
const authRoutes = require("./auth");
const bookingRoutes = require("./booking");
const queueRoutes = require("./queue");

// Using routes
app.use("/auth", authRoutes);
app.use("/booking", bookingRoutes);
app.use("/queue", queueRoutes);

// Default route
app.get("/", (req, res) => {
  res.status(200).send("Virtual Queue Management System API is running!");
});

// Export API
exports.api = functions.https.onRequest(app);
