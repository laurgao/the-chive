import mongoose, {Document, Model} from "mongoose";
import {PostObj} from "../utils/types";

const PostSchema = new mongoose.Schema({
    urlName: {type: String, required: true},
    title: {type: String, required: true},
    body: {type: String, required: true},
    tags: [{type: String, required: false}],
    date: {type: Date, required: false},
}, {
    timestamps: true,
});

export const PostModel: Model<Document<PostObj>> = mongoose.models.post || mongoose.model("post", PostSchema);