import mongoose, {Document, Model} from "mongoose";
import {NewsObj} from "../utils/types";

interface NewsDoc extends NewsObj, Document {}

const NewsSchema = new mongoose.Schema({
	title: { required: true, type: String }, 
	description: { required: true, type: String }, 
	img: { required: true, type: String }, 
	month: { required: true, type: String }, // format: "Jan 2020"
	urlName: { required: true, type: String }, 
}, {
	timestamps: true,
});

export const NewsModel = mongoose.models.news || mongoose.model<NewsDoc>("news", NewsSchema);
