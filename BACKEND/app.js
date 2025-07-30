import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';

import short_urlRouter from './src/routes/short_url.route.js';
dotenv.config("./.env");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/create",short_urlRouter);
app.get("/:shortUrl", async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const urlData = await urlSchema.findOne({ short_url: shortUrl });
        if (!urlData) {
            return res.status(404).json({
                success: false,
                message: "URL not found"
            });
        }
        urlData.click += 1;
        await urlData.save();
        res.redirect(urlData.full_url);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching URL",
            error: err.message
        });
    }
})
app.listen(5000,()=>{
    connectDB();
    console.log("Server is running on port 5000");
});