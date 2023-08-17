export default class ProductService {
  constructor(productRepo) {
    this.productRepo = productRepo;
  }

  // Create product
  async createProduct(title, url, price, videoID) {
    return await this.productRepo.createProduct(title, url, price, videoID);
  }

  // Get product
  async getProduct(productID) {
    return await this.productRepo.getProductByID(productID);
  }

  // Get all products
  async getAllProducts() {
    return await this.productRepo.getAllProducts();
  }

  // Get product by videoID
  async getProductsByVideoID(videoID) {
    return await this.productRepo.getProductsByVideoID(videoID);
  }

  // Update product
  async updateProduct(params) {
    try {
      const product = await this.productRepo.getProductByID(params.productID);
      return await this.productRepo.updateProduct(product, params);
    } catch (error) {
      return error;
    }
  }

  // Delete product
  async deleteProduct(productID) {
    try {
      const product = await this.productRepo.getProductByID(productID);
      return await this.productRepo.deleteProduct(product);
    } catch (error) {
      return error;
    }
  }
}
