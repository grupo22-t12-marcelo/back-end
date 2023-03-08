import { IProductUpdate } from "../../interfaces/product";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";
import { ImageProduct } from "../../entities/imageProduct.entity";

const updateProductService = async (
  data: IProductUpdate,
  id: string,
  user_id: string
) => {
  const productRepository = AppDataSource.getRepository(Product);
  const imagesRepository = AppDataSource.getRepository(ImageProduct);

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

  await imagesRepository.update(product?.imagesGallery.id, {
    image1: data.imagesGallery.image1
      ? data.imagesGallery.image1
      : product.imagesGallery.image1,
    image2: data.imagesGallery.image2
      ? data.imagesGallery.image2
      : product.imagesGallery.image2,
    image3: data.imagesGallery.image3
      ? data.imagesGallery.image3
      : product.imagesGallery.image3,
    image4: data.imagesGallery.image4
      ? data.imagesGallery.image4
      : product.imagesGallery.image4,
    image5: data.imagesGallery.image5
      ? data.imagesGallery.image5
      : product.imagesGallery.image5,
    image6: data.imagesGallery.image6
      ? data.imagesGallery.image6
      : product.imagesGallery.image6,
  });
};

export { updateProductService };
