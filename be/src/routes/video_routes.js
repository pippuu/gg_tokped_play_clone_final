import bodyParser from "body-parser";
import express from "express";
import { sendError, sendSuccess } from "../utils/response.js";
import { videoSchema } from "./validation/videoSchema.js";

export default class VideoRouter {
  constructor(videoController) {
    this.router = express.Router();
    this.videoController = videoController;
  }

  setupRoutes() {
    this.router.use(bodyParser.json());

    const validate = (schema) => async (req, res, next) => {
      try {
        await schema.validate({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        return next();
      } catch (err) {
        return sendError(res, {
          type: err.name,
          message: err.message
        }, 500)
      }
    };

    // Get all videos
    this.router.get("/", async (req, res) => {
      try {
        const videos = await this.videoController.getAllVideos();
        sendSuccess(res, videos);
      } catch (error) {
        sendError(res);
      }
    });

    // Create video
    this.router.post("/", validate(videoSchema), async (req, res) => {
      try {
        const body = req.body;
        await this.videoController.createVideo(body.title, body.urlThumbnail, body.url, body.tag, body.owner);
        sendSuccess(res, undefined, "Video successfully created.");
      } catch (error) {
        sendError(res);
      }
    });

     // Get all video thumbnails
     this.router.get("/thumbnail", async (req, res) => {
      try {
        const tag = req.query.tag;
        const videoThumbnails = await this.videoController.getAllVideoThumbnails(tag);
        sendSuccess(res, videoThumbnails);
      } catch (error) {
        sendError(res);
      }
    });

    // Get video
    this.router.get("/:id", async (req, res) => {
      try {
        const videoID = req.params.id;
        const video = await this.videoController.getVideo(videoID);
        sendSuccess(res, video);
      } catch (error) {
        sendError(res);
      }
    });

    // Update video
    this.router.patch("/:id", validate(videoSchema), async (req, res) => {
      try {
        const videoID = req.params.id;
        const body = req.body;
        await this.videoController.updateVideo(videoID, body.title, body.urlThumbnail, body.url, body.tag, body.owner);
        sendSuccess(res, undefined, "Successfully updated video.");
      } catch (error) {
        sendError(res);
      }
    });

    // Delete video
    this.router.delete("/:id", async (req, res) => {
      try {
        const videoID = req.params.id;
        await this.videoController.deleteVideo(videoID);
        sendSuccess(res, undefined, "Successfully deleted video.");
      } catch (error) {
        sendError(res);
      }
    });
  }

  getRoutes() {
    return this.router;
  }
}
