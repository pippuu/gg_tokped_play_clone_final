import mongoose, { model } from "mongoose";
import { productSchema } from "./schemas/product.js";
import { videoSchema } from "./schemas/video.js";

const Product = model("Product", productSchema);
const Video = model("Video", videoSchema);

export default class ProductRepository {
  // Create product
  async createProduct(title, url, price, videoID) {
    // Cast string to objectId
    const objectID = new mongoose.Types.ObjectId(videoID);
    const video = await Video.findById(objectID);
    // Find the videoID
    if (!video) {
      throw new Error(`VideoID can't be found.`);
    }
    
    try {
      const newProduct = new Product({
        title: title,
        url: url,
        price: price,
        videoID: videoID,
      });
      return await newProduct.save();
    } catch (error) {
      return error;
    }
  }

  // Get all product
  async getAllProducts() {
    try {
      const products = await Product.find({});
      return products;
    } catch (error) {
      return error;
    }
  }

  // Get product by productID
  async getProductByID(productID) {
    try {
      const product = await Product.findById(productID);
      return product;
    } catch (error) {
      return error;
    }
  }

  // Get product by video id
  async getProductsByVideoID(videoID) {
    try {
      const products = await Product.find({ videoID: videoID });
      return products;
    } catch (error) {
      return error;
    }
  }

  // Update product
  async updateProduct(product, params) {
    try {
      if (params.title != undefined) {
        product.title = params.title;
      }
      if (params.url != undefined) {
        product.url = params.url;
      }
      if (params.price != undefined) {
        product.price = params.price;
      }
      if (params.videoID != undefined) {
        product.videoID = params.videoID;
      }
      return await product.save();
    } catch (error) {
      return error;
    }
  }

  // Delete product
  async deleteProduct(product) {
    try {
      return await product.deleteOne();
    } catch (error) {
      return error;
    }
  }
}
