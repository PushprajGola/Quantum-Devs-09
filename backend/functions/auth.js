const express = require("express");
const admin = require("firebase-admin");

const router = express.Router();
const firebaseAuth = admin.auth();

// User Signup
router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userRecord = await firebaseAuth.createUser({
      email,
      password,
      displayName: name,
    });
    res.status(201).json({ message: "User created successfully", user: userRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// User Login (Token-based authentication assumed)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Firebase Authentication doesn't provide direct login; 
    // Clients should authenticate via Firebase SDK.
    res.status(200).json({ message: "Use Firebase Client SDK for login" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Password Reset
router.post("/reset-password", async (req, res) => {
  const { email } = req.body;
  try {
    await firebaseAuth.generatePasswordResetLink(email);
    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
