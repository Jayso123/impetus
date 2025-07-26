const express = require("express");
const router = express.Router();
const AboutUs = require("../models/AboutUs");

// Get About Us data
router.get("/", async (req, res) => {
  try {
    const aboutData = await AboutUs.findOne();
    if (!aboutData) {
      // Create default data if none exists
      const defaultData = new AboutUs({
        companyHistory: `Founded in 2024 in Vadodara, we have grown to become one of the leading manufacturers of machine tools in India. Our commitment to quality, innovation, and customer satisfaction has helped us build a strong reputation in the industry. With state-of-the-art manufacturing facilities and a team of skilled professionals, we continue to deliver excellence in every product we create. Our journey began with a vision to revolutionize the machine tools industry, and today, we stand proud as a trusted name in the sector.`,
        stats: {
          distributors: 50,
          products: 100,
          employees: 200,
          teamMembers: 25,
        },
        images: [
          "/images/company1.jpg",
          "/images/company2.jpg",
          "/images/company3.jpg",
        ],
        location: "Vadodara",
        foundedYear: 2024,
      });
      await defaultData.save();
      return res.json(defaultData);
    }
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update About Us data
router.put("/", async (req, res) => {
  try {
    const aboutData = await AboutUs.findOne();
    if (!aboutData) {
      return res.status(404).json({ message: "About Us data not found" });
    }

    Object.assign(aboutData, req.body);
    await aboutData.save();
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
