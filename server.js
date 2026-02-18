const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint for image compression
app.post('/compress', upload.single('image'), async (req, res) => {
    try {
        const imageBuffer = req.file.buffer;
        const compressedImage = await sharp(imageBuffer)
            .resize(800) // Resize width to 800px and auto height
            .toFormat('jpeg', { quality: 80 })
            .toBuffer();

        res.set('Content-Type', 'image/jpeg');
        res.send(compressedImage);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong during image compression.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
