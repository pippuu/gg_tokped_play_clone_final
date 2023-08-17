export default class VideoService {
  constructor(videoRepo) {
    this.videoRepo = videoRepo;
  }

  // Create video
  async createVideo(title, urlThumbnail, url, tag, owner) {
    return await this.videoRepo.createVideo(title, urlThumbnail, url, tag, owner);
  }

  // Get video
  async getVideo(videoID) {
    return await this.videoRepo.getVideoByID(videoID);
  }

  // Get all video
  async getAllVideos() {
    return await this.videoRepo.getAllVideos();
  }

  // Get all video thumbnails
  async getAllVideoThumbnails(tag) {
    if (tag === undefined) {
      return await this.videoRepo.getAllVideoThumbnails();
    }
    return await this.videoRepo.getAllVideoThumbnailsByTag(tag);
  }

  // Update video
  async updateVideo(videoID, title, urlThumbnail, url, tag, owner) {
    try {
      const video = await this.videoRepo.getVideoByID(videoID);
      return await this.videoRepo.updateVideo(video, title, urlThumbnail, url, tag, owner);
    } catch (error) {
      return error;
    }
  }

  // Delete video
  async deleteVideo(videoID) {
    try {
      const video = await this.videoRepo.getVideoByID(videoID);
      return await this.videoRepo.deleteVideo(video);
    } catch (error) {
      return error;
    }
  }
}