import { IProductUpdate } from "../../interfaces/product";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const updateProductService = async (
  data: IProductUpdate,
  id: string,
  user_id: string
) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const product = products.find((product) => product.id === id);

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  await productRepository.update(product!.id, {
    type_announcement: data.type_announcement
      ? data.type_announcement
      : product.type_announcement,
    title: data.title ? data.title : product.title,
    year: data.year ? data.year : product.year,
    kilometers: data.kilometers ? data.kilometers : product.kilometers,
    price: data.price ? data.price : product.price,
    description: data.description ? data.description : product.description,
    type_vehicle: data.type_vehicle ? data.type_vehicle : product.type_vehicle,
    is_published: data.is_published ? data.is_published : product.is_published,
    image: data.image ? data.image : product.image,
  });
};

export { updateProductService };
