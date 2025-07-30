import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
    full_url:{
        type: String,
        required: true
    },
    short_url: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    click:{
        type: Number,
        default: 0
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

}, { timestamps: true });
const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);
export default ShortUrl;