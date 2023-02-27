import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const deleteProductService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const allProducts = await productRepository.find()
  const product = allProducts.find((product) => product.id === id)

  if(!product) {
    throw new AppError('Product not found', 404)
  }
    
  await productRepository.delete(id)

  return 'OK'
  
};
export default deleteProductService
