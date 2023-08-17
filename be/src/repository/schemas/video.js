import { Schema } from "mongoose";

export const videoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  urlThumbnail: {
    type: String, 
    required: true
  },
  url: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
});