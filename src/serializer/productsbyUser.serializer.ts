import * as yup from "yup";
import { IProductListAll } from "../interfaces/product";
import { IUserListProduct } from "../interfaces/user";

export const productReturned: yup.SchemaOf<IProductListAll> = yup
  .object()
  .shape({
    createdAt: yup.date().required(),
    image: yup.string().required(),
    year: yup.number().positive().required(),
    price: yup.number().positive().required(),
    kilometers: yup.number().positive().required(),
    type_vehicle: yup.string().required(),
    description: yup.string().required(),
    title: yup.string().required(),
    type_announcement: yup.string().required(),
    id: yup.string().required(),
  });

export const userSchema: yup.SchemaOf<IUserListProduct> = yup.object().shape({
  products: productReturned,
  type_account: yup.string().required(),
  description: yup.string().required(),
  name: yup.string().required(),
  id: yup.string().required(),
});

export const productsbyUser = yup.array(userSchema);
