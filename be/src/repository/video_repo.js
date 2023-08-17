import { model } from "mongoose";
import { videoSchema } from "./schemas/video.js";

const Video = model("Video", videoSchema);

export default class VideoRepository {
  // Create video
  async createVideo(title, urlThumbnail, url, tag, owner) {
    try {
      const newVideo = new Video({
        title: title,
        urlThumbnail: urlThumbnail,
        url: url,
        tag: tag,
        owner: owner,
      });
      return await newVideo.save();
    } catch (error) {
      return error;
    }
  }

  // Get all video thumbnails
  async getAllVideoThumbnails() {
    try {
      const videoThumbnails = await Video.find({}, '_id title urlThumbnail owner tag ');
      return videoThumbnails;
    } catch (error) {
      return error;
    }
  }

   // Get all video thumbnails
   async getAllVideoThumbnailsByTag(tag) {
    try {
      console.log(tag);
      const videoThumbnails = await Video.find({ tag: tag }, '_id title urlThumbnail owner tag ');
      return videoThumbnails;
    } catch (error) {
      return error;
    }
  }

  // Get all video
  async getAllVideos() {
    try {
      const videos = await Video.find({});
      return videos;
    } catch (error) {
      return error;
    }
  }

  // Get video by videoID
  async getVideoByID(videoID) {
    try {
      const video = await Video.findById(videoID);
      return video;
    } catch (error) {
      return error;
    }
  }

  // Update video
  async updateVideo(video, title, urlThumbnail, url, tag, owner) {
    try {
      if (urlThumbnail != undefined) {
        video.title = title;
        video.urlThumbnail = urlThumbnail;
        video.url = url;
        video.tags = tag;
        video.owner = owner;
      }
      return await product.save();
    } catch (error) {
      return error;
    }
  }

  // Delete video
  async deleteVideo(video) {
    try {
      return await video.deleteOne();
    } catch (error) {
      return error;
    }
  }
}
