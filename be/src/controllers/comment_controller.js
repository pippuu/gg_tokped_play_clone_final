export default class CommentController {
  constructor(commentService) {
    this.commentService = commentService;
  }

  // Create comment
  async createComment(username, comment, videoID) {
      return await this.commentService.createComment(username, comment, videoID);
  }

  // Get comment
  async getComment(commentID) {
    return await this.commentService.getComment(commentID);
  }

  // Get all comments
  async getAllComments() {
    return await this.commentService.getAllComments();
  }

  // Get comments by videoID
  async getCommentsByVideoID(videoID) {
    return await this.commentService.getCommentsByVideoID(videoID);
  }

  // Update comment
  async updateComment(params) {
    return await this.commentService.updateComment(params);
  }

  // Delete comment
  async deleteComment(commentID) {  
    return await this.commentService.deleteComment(commentID);
  }
}
