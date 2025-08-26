// server.js
import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

// Multer setup for file upload
const storage = multer.memoryStorage(); // keep file in memory
const upload = multer({ storage });

// POST route for career form
app.post("/api/career", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, coverLetter, experience } = req.body;
    const resume = req.file;

    if (!name || !email || !phone || !coverLetter || !experience || !resume) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create transporter (using Gmail as example)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email options
    let mailOptions = {
      from: `"Career Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // HR / your email
      subject: `New Career Application from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Experience: ${experience}
        Cover Letter:
        ${coverLetter}
      `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
