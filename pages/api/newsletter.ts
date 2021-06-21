import {NewsletterModel} from "../../models/newsletter";
import dbConnect from "../../utils/dbConnect";
import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {    
            
        case "POST": {
            
            try {
                await dbConnect();
                
                if (req.body.id) {
                    if (!(req.body.email)) {
                        return res.status(406);            
                    }
                    const thisObject = await NewsletterModel.findById(req.body.id);
                    if (!thisObject) return res.status(404);
                    
                    thisObject.email = req.body.email;
                    
                    await thisObject.save();
                    
                    return res.status(200).json({message: "Object updated"});                            
                } else {
                    if (!(req.body.email)) {
                        return res.status(406);            
                    }
                    
                    const newEmail = new NewsletterModel({
                        email: req.body.email,                             
                    });
                    
                    const savedEmail = await newEmail.save();
                    
                    return res.status(200).json({message: "Object created", id: savedEmail._id.toString(), email: savedEmail.email.toString()});
                }            
            } catch (e) {
                return res.status(500).json({message: e});            
            }
        }
        
        
        default:
            return res.status(405);
    }
}
