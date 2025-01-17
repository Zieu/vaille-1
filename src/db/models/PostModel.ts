import { Schema, Document, model, SchemaTypes, Types } from "mongoose";

export interface IPost extends Document {
  title?: string;
  body: string;
  image?: string;
  comments?: Types.ObjectId[];
  likes?: number;
  author?: Types.ObjectId;
}

const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
  image: String,
  comments: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Post",
    },
  ],
  likes: {
    type: Number,
    default: 1,
  },
  author: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
});

export default model<IPost>("Post", PostSchema);
