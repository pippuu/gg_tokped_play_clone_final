import bodyParser from "body-parser";
import express from "express";
import { sendError, sendSuccess } from "../utils/response.js";

export default class CommentRouter {
  constructor(commentController) {
    this.router = express.Router();
    this.commentController = commentController;
  }
  
  setupRoutes() {
    this.router.use(bodyParser.json());

    // Create comment
    this.router.post('/', async (req, res) => {
      try {
        const body = req.body;
        await this.commentController.createComment(body.username, body.comment, body.videoID);
        sendSuccess(res, undefined, "Successfully created comment.");
      } catch (error) {
        sendError(res, error);
      }
    })

    // Get comment
    this.router.get('/:id', async (req, res) => {
      try {
        const commentID = req.params.id;
        const comment = await this.commentController.getComment(commentID);
        sendSuccess(res, comment);
      } catch (error) {
        sendError(res, error);
      }
    })

    // Get all comments
    this.router.get('/', async (req, res) => {
      try {
        const comments = await this.commentController.getAllComments();
        sendSuccess(res, comments);
      } catch (error) {
        sendError(res, error);
      }
    })

    // Get all comments based on videoID
    this.router.get('/video/:id', async (req, res) => {
      try {
        const videoID = req.params.id;
        const comments = await this.commentController.getCommentsByVideoID(videoID);
        sendSuccess(res, comments);
      } catch (error) {
        sendError(res, error);
      }
    })

    // Update comments
    this.router.patch('/:id', async (req, res) => {
      try {
        const commentID = req.params.id;
        const body = req.body;
        const updateCommentParams = {
          commentID: commentID,
          username: body.username,
          comment: body.comment,
          videoID: body.videoID 
        }
        await this.commentController.updateComment(updateCommentParams);
        sendSuccess(res, undefined, "Successfully updated comment.");
      } catch (error) {
        sendError(res, error);
      } 
    })

    // Delete comments
    this.router.delete('/:id', async (req, res) => {
      try {
        const productID = req.params.id;
        await this.productController.deleteProduct(productID);
        sendSuccess(res, undefined, "Successfully deleted comment.");
      } catch (error) {
        sendError(res, error);

      }
    })
  }

  getRoutes() {
    return this.router;
  }
}