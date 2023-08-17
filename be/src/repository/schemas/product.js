import { Schema } from "mongoose";

export const productSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  videoID: {
    type: Schema.Types.ObjectId,
    ref: 'Video'
  }
});