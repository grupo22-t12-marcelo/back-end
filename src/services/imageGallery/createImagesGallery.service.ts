import AppDataSource from "../../data-source";
import { ImageProduct } from "../../entities/imageProduct.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IImagesGallery } from "../../interfaces/product";

const createImageGallery = async (data: IImagesGallery, product_id:string, id:string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);
  const imagesRepository = AppDataSource.getRepository(ImageProduct)

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (user?.type_account === "Comprador") {
    throw new AppError("User is not announcement");
  }

  const product = await productRepository.findOneBy({
    id:product_id
  })
  
  if(!product){
    throw new AppError("Product not found",404);
  }

  const imagesGalley = new ImageProduct()
  imagesGalley.product = product;
  imagesGalley.image1 = data.image1
  imagesGalley.image2 = data.image2
  imagesGalley.image3 = data.image3
  imagesGalley.image4 = data.image4
  imagesGalley.image5 = data.image5
  imagesGalley.image6 = data.image6

  imagesRepository.create(imagesGalley)
  await imagesRepository.save(imagesGalley);

  
  const productImage = productRepository.create({
    ...data,
    user: user,
    imagesGallery: imagesGalley,
  });

  await productRepository.save(productImage);
  return productImage;
};
export { createImageGallery };

