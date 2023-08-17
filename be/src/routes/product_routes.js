import bodyParser from "body-parser";
import express from "express";
import { sendError, sendSuccess } from "../utils/response.js";
import { productSchema } from "./validation/productSchema.js";

export default class ProductRouter {
  constructor(productController) {
    this.router = express.Router();
    this.productController = productController;
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
        return sendError(
          res,
          {
            type: err.name,
            message: err.message,
          },
          500
        );
      }
    };

    // Create product
    this.router.post("/", validate(productSchema), async (req, res) => {
      try {
        const body = req.body;
        await this.productController.createProduct(
          body.title,
          body.url,
          body.urlThumbnail,
          body.price,
          body.videoID
        );
        sendSuccess(res, undefined, "Succesfully created product.");
      } catch (error) {
        sendError(res);
      }
    });

    // Get product
    this.router.get("/:id", async (req, res) => {
      try {
        const productID = req.params.id;
        const product = await this.productController.getProduct(productID);
        sendSuccess(res, product);
      } catch (error) {
        sendError(res);
      }
    });

    // Get all products
    this.router.get("/", async (req, res) => {
      try {
        const products = await this.productController.getAllProducts();
        sendSuccess(res, products);
      } catch (error) {
        sendError(res);
      }
    });

    // Get all products based on videoID
    this.router.get("/video/:id", async (req, res) => {
      try {
        const videoID = req.params.id;
        const products = await this.productController.getProductsByVideoID(
          videoID
        );
        sendSuccess(res, products);
      } catch (error) {
        sendError(res);
      }
    });

    // Update product
    this.router.patch("/:id", validate(productSchema), async (req, res) => {
      try {
        const productID = req.params.id;
        const body = req.body;
        const updateProductParams = {
          productID: productID,
          title: body.title,
          url: body.url,
          urlThumbnail: body.urlThumbnail,
          price: body.price,
          videoID: body.videoID,
        };
        await this.productController.updateProduct(updateProductParams);
        sendSuccess(res, undefined, "Successfully updated product.");
      } catch (error) {
        sendError(res);
      }
    });

    // Delete product
    this.router.delete("/:id", async (req, res) => {
      try {
        const productID = req.params.id;
        await this.productController.deleteProduct(productID);
        sendSuccess(res, undefined, "Successfully deleted product.");
      } catch (error) {
        sendError(res);
      }
    });
  }

  getRoutes() {
    return this.router;
  }
}
