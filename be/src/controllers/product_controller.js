export default class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  // Create product
  async createProduct(title, url, price, videoID) {
      return await this.productService.createProduct(title, url, price, videoID);
  }

  // Get product
  async getProduct(productID) {
    return await this.productService.getProduct(productID);
  }

  // Get all products
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  // Get products by videoID
  async getProductsByVideoID(videoID) {
    return await this.productService.getProductsByVideoID(videoID);
  }

  // Update product
  async updateProduct(params) {
    return await this.productService.updateProduct(params);
  }

  // Delete product
  async deleteProduct(productID) {  
    return await this.productService.deleteProduct(productID);
  }
}
