import { generateNanoId } from "../utils/helper.js";
import urlSchema from '../models/short_url.model.js';
export const createShortUrlService =(url) =>{
    const shortUrl = generateNanoId(7);
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortUrl
    });
    newUrl.save()
    return shortUrl;
}