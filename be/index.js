// Import modules
import express from "express";
import { config } from "./src/config/config.js";
import mongoose from "mongoose";
import { InitDB } from "./src/infrastructure/db.js";
import ProductService from "./src/services/product_services.js";
import ProductRepository from "./src/repository/product_repo.js";
import ProductController from "./src/controllers/product_controller.js";
import ProductRouter from "./src/routes/product_routes.js";
import VideoRepository from "./src/repository/video_repo.js";
import VideoService from "./src/services/video_services.js";
import VideoController from "./src/controllers/video_controller.js";
import VideoRouter from "./src/routes/video_routes.js";
import CommentRepository from "./src/repository/comment_repo.js";
import CommentService from "./src/services/comment_services.js";
import CommentController from "./src/controllers/comment_controller.js";
import CommentRouter from "./src/routes/comment_routes.js";
import cors from "cors";
import http from "http";

function main() {
  // InitDB
  InitDB(config.db);

  // Create product layers (repo, service, controller)
  const productRepo = new ProductRepository();
  const productService = new ProductService(productRepo);
  const productController = new ProductController(productService);
  const productRoutes = new ProductRouter(productController);
  productRoutes.setupRoutes();

  // Create video layers (repo, service, controller)
  const videoRepo = new VideoRepository();
  const videoService = new VideoService(videoRepo);
  const videoController = new VideoController(videoService);
  const videoRoutes = new VideoRouter(videoController);
  videoRoutes.setupRoutes();

  // Create comment layers (repo, service, controller)
  const commentRepo = new CommentRepository();
  const commentService = new CommentService(commentRepo);
  const commentController = new CommentController(commentService);
  const commentRoutes = new CommentRouter(commentController);
  commentRoutes.setupRoutes();

  // Create express app
  const app = express();

  app.use(cors());

  app.get("/", (req, res) => {
    res.status(201).json({ message: "Connected to Backend!" });
  });

  app.use("/api/product", productRoutes.getRoutes());
  app.use("/api/video", videoRoutes.getRoutes());
  app.use("/api/comment", commentRoutes.getRoutes());

  const server = http.createServer(app);

  // Run server
  server.listen(config.app.port, () => {
    console.log(`App listening on port ${config.app.port}`);
  });
}

// Run the whole code
main();
