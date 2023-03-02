import { IProductRequest } from "../../interfaces/product";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { ImageProduct } from "../../entities/imageProduct.entity";

const createProductService = async (data: IProductRequest, id: string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);
  const imagesRepository = AppDataSource.getRepository(ImageProduct);

  const user = await userRepository.findOneBy({
    id: id,
  });

  const { imagesGallery } = data;

  if (user?.type_account === "Comprador") {
    throw new AppError("User is not announcement");
  }

  const imagesSave = imagesRepository.create(imagesGallery);
  await imagesRepository.save(imagesSave);

  const product = productRepository.create({
    ...data,
    user: user,
    imagesGallery: imagesSave,
  });

  await productRepository.save(product);

  return product;
};
export { createProductService };
