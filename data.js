const express = require("express");
const fetchData = require("../utils/fetchData");
const router = express.Router();

// Fetch and return raw data from NORAIAI
router.get("/", async (req, res) => {
  try {
    const data = await fetchData();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

// Fetch and process data (e.g., filter or summarize)
router.get("/processed", async (req, res) => {
  try {
    const data = await fetchData();
    const processedData = processData(data); // Custom data processing logic
    res.status(200).json({ success: true, processedData });
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).json({ success: false, message: "Failed to process data" });
  }
});

// Example data processing function
function processData(data) {
  return data.map((item) => ({
    id: item.id,
    summary: `${item.name} - ${item.description}`,
  }));
}

module.exports = router;