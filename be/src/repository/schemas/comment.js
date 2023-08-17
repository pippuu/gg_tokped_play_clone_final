import { Schema } from "mongoose";

export const commentSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  videoID: {
    type: Schema.Types.ObjectId,
    ref: 'Video'
  }
}, {
  timestamps: true
});