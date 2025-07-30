import express from 'express';
import { createShorturl } from '../controllers/short_url.controller';
const router = express.Router();

router.post("/",createShorturl)

export default router;
