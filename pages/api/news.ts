import {NewsModel} from "../../models/news";
import dbConnect from "../../utils/dbConnect";
import {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {    
        case "GET": {
            try {    
                
                let thisObject;
                if (!(req.query.title || req.query.description || req.query.img || req.query.month || req.query.urlName)) {
                    
                    thisObject = await NewsModel.find();                      
                } else {
                    let conditions = {};

                    if (req.query.id) conditions["_id"] = req.query.id;
                    if (req.query.title) conditions["title"] = req.query.title;
                    if (req.query.description) conditions["description"] = req.query.description;
                    if (req.query.img) conditions["img"] = req.query.img;
                    if (req.query.month) conditions["month"] = req.query.month;
                    if (req.query.urlName) conditions["urlName"] = req.query.urlName;
                    
                            
                    await dbConnect();   
                }
                
                if (!thisObject || !thisObject.length) return res.status(404);
                
                return res.status(200).json({data: thisObject});
            } catch (e) {
                return res.status(500).json({message: e});                        
            }
        }
            
        case "POST": {
            const session = await getSession({ req });
            if (!session) return res.status(403);
            try {
                await dbConnect();
                
                if (req.body.id) {
                    if (!(req.body.title || req.body.description || req.body.img || req.body.month || req.body.urlName)) {
                        return res.status(406);            
                    }
                    const thisObject = await NewsModel.findById(req.body.id);
                    if (!thisObject) return res.status(404);
                    
                    thisObject.title = req.body.title;
                    thisObject.description = req.body.description;
                    thisObject.img = req.body.img;
                    thisObject.month = req.body.month;
                    thisObject.urlName = req.body.urlName;
                    
                    await thisObject.save();
                    
                    return res.status(200).json({message: "Object updated"});                            
                } else {
                    if (!(req.body.title && req.body.description && req.body.img && req.body.month && req.body.urlName)) {
                        return res.status(406);            
                    }
                    
                    const newNews = new NewsModel({
                        title: req.body.title,
                        description: req.body.description,
                        img: req.body.img,
                        month: req.body.month,
                        urlName: req.body.urlName,                             
                    });
                    
                    const savedNews = await newNews.save();
                    
                    return res.status(200).json({message: "Object created", id: savedNews._id.toString()});
                }            
            } catch (e) {
                return res.status(500).json({message: e});            
            }
        }
        
        
        default:
            return res.status(405);
    }
}
