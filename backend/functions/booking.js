const express = require("express");
const admin = require("firebase-admin");

const router = express.Router();
const db = admin.firestore();

// Book an appointment
router.post("/book", async (req, res) => {
  const { userId, doctorId, date, time } = req.body;
  try {
    const appointmentRef = await db.collection("appointments").add({
      userId,
      doctorId,
      date,
      time,
      status: "pending",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(201).json({ message: "Appointment booked successfully", id: appointmentRef.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get user appointments
router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const snapshot = await db.collection("appointments").where("userId", "==", userId).get();
    const appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Cancel an appointment
router.delete("/cancel/:appointmentId", async (req, res) => {
  const { appointmentId } = req.params;
  try {
    await db.collection("appointments").doc(appointmentId).delete();
    res.status(200).json({ message: "Appointment canceled successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
