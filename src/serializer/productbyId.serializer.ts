import * as yup from "yup";
import { IImagesGallery, IProductListAll } from "../interfaces/product";
import { IUserListProduct } from "../interfaces/user";

const userSchema: yup.SchemaOf<IUserListProduct> = yup.object().shape({
  type_account: yup.string().required(),
  description: yup.string().required(),
  name: yup.string().required(),
  id: yup.string().required(),
});

const imageGallerySchema: yup.SchemaOf<IImagesGallery> = yup.object().shape({
  image1: yup.string().required(),
  image2: yup.string().nullable(),
  image3: yup.string().nullable(),
  image4: yup.string().nullable(),
  image5: yup.string().nullable(),
  image6: yup.string().nullable(),
  id: yup.string().required(),
});

export const productIDReturned: yup.SchemaOf<IProductListAll> = yup
  .object()
  .shape({
    user: userSchema,
    imagesGallery: imageGallerySchema,
    createdAt: yup.date().required(),
    image: yup.string().required(),
    year: yup.number().positive().required(),
    price: yup.number().positive().required(),
    kilometers: yup.number().positive().required(),
    type_vehicle: yup.string().required(),
    is_published: yup.boolean().required(),
    description: yup.string().required(),
    title: yup.string().required(),
    type_announcement: yup.string().required(),
    id: yup.string().required(),
  });
