const express = require("express");
const {
  createLead,
  getLeads,
  deleteLead,
} = require("../controllers/leadController");

const router = express.Router();

router.post("/leads", createLead);
router.get("/leads", getLeads);
router.delete("/leads/:id", deleteLead);

module.exports = router;
