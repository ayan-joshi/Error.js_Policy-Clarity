const express = require("express");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use(cors());

// Use express.raw middleware to handle binary data
app.use(express.raw({ type: "application/pdf", limit: "10mb" }));

app.post("/api/sendpdf", async (req, res) => {
  try {
    // Ensure that the request contains a PDF buffer
    if (!req.body || !Buffer.isBuffer(req.body)) {
      return res
        .status(400)
        .send("Bad Request: Missing or invalid PDF file in the request");
    }

    // Prepare the file data to send in the request
    const fileData = req.body;
    const filename = "file.pdf"; // You might want to generate a unique filename

    // Save the file temporarily (optional)
    fs.writeFileSync(filename, req.body);

    // Make a request to your FastAPI server
    const response = await axios.post(
      "http://127.0.0.1:8000/uploadfile/",
      fileData,
      {
        headers: {
          "Content-Type": "application/octet-stream", // Change content type
        },
      }
    );

    // Handle the response from the FastAPI server
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
