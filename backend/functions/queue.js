const express = require("express");
const admin = require("firebase-admin");

const router = express.Router();
const db = admin.firestore();

// Add patient to queue
router.post("/enqueue", async (req, res) => {
  const { userId, doctorId } = req.body;
  try {
    const queueRef = await db.collection("queues").add({
      userId,
      doctorId,
      status: "waiting",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(201).json({ message: "Added to queue", id: queueRef.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get queue status for a doctor
router.get("/status/:doctorId", async (req, res) => {
  const { doctorId } = req.params;
  try {
    const snapshot = await db.collection("queues").where("doctorId", "==", doctorId).orderBy("createdAt").get();
    const queue = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(queue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Remove patient from queue (Mark as checked-in or completed)
router.put("/update/:queueId", async (req, res) => {
  const { queueId } = req.params;
  const { status } = req.body;
  try {
    await db.collection("queues").doc(queueId).update({ status });
    res.status(200).json({ message: "Queue status updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
