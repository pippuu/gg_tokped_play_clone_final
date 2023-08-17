import mongoose, { model } from "mongoose";
import { commentSchema } from "./schemas/comment.js";
import { videoSchema } from "./schemas/video.js";

const Comment = model("Comment", commentSchema);
const Video = model("Video", videoSchema);

export default class CommentRepository {
  // Create comment
  async createComment(username, comment, videoID) {
    // Cast string to objectId
    const objectID = new mongoose.Types.ObjectId(videoID);
    const video = await Video.findById(objectID);
    // Find the videoID
    if (!video) {
      throw new Error(`VideoID can't be found.`);
    }

    try {
      const newComment = new Comment({
        username: username,
        comment: comment,
        videoID: videoID,
      });
      return await newComment.save();
    } catch (error) {
      return error;
    }
  }

  // Get all comments
  async getAllComments() {
    try {
      const comments = await Comment.find({});
      return comments;
    } catch (error) {
      return error;
    }
  }

  // Get comment by commentID
  async getCommentByID(commentID) {
    try {
      const comment = await Comment.findById(commentID);
      return comment;
    } catch (error) {
      return error;
    }
  }

  // Get comments by video id
  async getCommentsByVideoID(videoID) {
    try {
      const comments = await Comment.find({ videoID: videoID });
      return comments;
    } catch (error) {
      return error;
    }
  }

  // Update comment
  async updateComment(comment, params) {
    try {
      if (params.username != undefined) {
        comment.username = params.username;
      }
      if (params.comment != undefined) {
        comment.comment = params.comment;
      }
      if (params.videoID != undefined) {
        comment.videoID = params.videoID;
      }
      return await comment.save();
    } catch (error) {
      return error;
    }
  }

  // Delete comment
  async deleteComment(comment) {
    try {
      return await comment.deleteOne();
    } catch (error) {
      return error;
    }
  }
}
