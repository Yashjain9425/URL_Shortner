import { createShortUrlService } from "../services/short_url.service.js";
// import { generateNanoId } from "../utils/helper";
export const createShorturl = async(req,res)=>{
    const {url} = req.body;
    const shortUrl = await createShortUrlService(url);
    res.send(shortUrl);
    }