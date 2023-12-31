const cloudinary = require("cloudinary");

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLODUNARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.export = cloudinary;
