export default class CommentService {
  constructor(commentRepo) {
    this.commentRepo = commentRepo;
  }

  // Create comment
  async createComment(username, comment, videoID) {
    console.log("test");
    return await this.commentRepo.createComment(username, comment, videoID);
  }

  // Get comment
  async getComment(commentID) {
    return await this.commentRepo.getCommentByID(commentID);
  }

  // Get all comments
  async getAllComments() {
    return await this.commentRepo.getAllComments();
  }

  // Get comments by videoID
  async getCommentsByVideoID(videoID) {
    return await this.commentRepo.getCommentsByVideoID(videoID);
  }

  // Update comment
  async updateComment(params) {
    try {
      const comment = await this.commentRepo.getCommentByID(params.commentID);
      return await this.commentRepo.updateComment(comment, params);
    } catch (error) {
      return error;
    }
  }

  // Delete comment
  async deleteComment(commentID) {
    try {
      const comment = await this.commentRepo.getCommentByID(commentID);
      return await this.commentRepo.deleteComment(comment);
    } catch (error) {
      return error;
    }
  }
}
