import { Types } from "mongoose";
import PostClass, { PostData } from "./PostClass";
import PostModel from "../db/models/PostModel";

export default class Post {
  public async createPost(postData: PostData): Promise<PostClass> {
    const post = new PostClass(postData);
    if (!post.validate()) {
      throw new Error("Post validation failed!");
    }
    await PostModel.create(post);

    return post;
  }

  public async findPostById(postId: Types.ObjectId) {
    const post = await PostModel.findById(postId);
    if (!post) {
      throw new Error("Invalid post id!");
    }

    return post;
  }

  public async updatePost(
    postId: Types.ObjectId,
    data: object
  ): Promise<object> {
    const post = await PostModel.findByIdAndUpdate(postId, data, { new: true });

    if (!post) {
      throw new Error("Invalid post id!");
    }

    return post;
  }

  public async deletePost(postId: Types.ObjectId): Promise<null> {
    const post = await PostModel.findByIdAndDelete(postId);
    if (!post) {
      throw new Error("Invalid post id!");
    }

    return null;
  }
}
