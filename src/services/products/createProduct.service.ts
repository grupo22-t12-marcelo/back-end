import AppDataSource from "../../data-source";
import { ImageProduct } from "../../entities/imageProduct.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IProductRequest } from "../../interfaces/product";

const createProductService = async (data: IProductRequest, id: string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);
  const imagesRepository = AppDataSource.getRepository(ImageProduct);

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (!user) {
    throw new AppError("User not found");
  }

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
