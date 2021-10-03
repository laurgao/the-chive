import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { NewsModel } from "../../models/news";
import dbConnect from "../../utils/dbConnect";
import { cleanForJSON } from "../../utils/utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {    
        case "GET": {
            try {    
                await dbConnect();

                const thisObject = await NewsModel.find()
                
                if (!thisObject || !thisObject.length) return res.status(404);
                
                const sortedObj = thisObject.sort((a, b) => (new Date(b.month).getTime() - new Date(a.month).getTime()));
                return res.status(200).json({data: cleanForJSON(sortedObj)});
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
        case "DELETE": {
            try {
                await dbConnect();
                if (!(req.body.id)) return res.status(406).send("ID must be provided.");

                const deletedNews = await NewsModel.findOne({_id: req.body.id});
                if (!deletedNews) return res.status(404).send("No newsletter with that ID.")

                await deletedNews.delete();
                return res.status(200).json({message: "Object deleted."});


            } catch (e) {return res.status(500).json({message: e})}
        }
        
        default:
            return res.status(405);
    }
}
