export default class VideoController {
  constructor(videoService) {
    this.videoService = videoService;
  }

   // Create video
   async createVideo(title, urlThumbnail, url, tag, owner) {
    return await this.videoService.createVideo(title, urlThumbnail, url, tag, owner);
  }

  // Get video
  async getVideo(videoID) {
    return await this.videoService.getVideo(videoID);
  }

  // Get all video
  async getAllVideos() {
    return await this.videoService.getAllVideos();
  }

  // Get all video thumbnails
  async getAllVideoThumbnails(tag) {
    return await this.videoService.getAllVideoThumbnails(tag);
  }


  // Update video
  async updateVideo(videoID, title, urlThumbnail, url, tag, owner) {
    return await this.videoService.updateVideo(videoID, title, urlThumbnail, url, tag, owner);
  }

  // Delete video
  async deleteVideo(videoID) {
    return await this.videoService.deleteVideo(videoID);
  }
}