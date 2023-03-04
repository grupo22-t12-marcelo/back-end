import * as yup from "yup";
import { IComment } from "../interfaces/comment";
import { IUserListProduct } from "../interfaces/user";

const userSchema: yup.SchemaOf<IUserListProduct> = yup.object().shape({
  type_account: yup.string().required(),
  description: yup.string().required(),
  name: yup.string().required(),
  id: yup.string().required(),
});

export const commentSchema: yup.SchemaOf<IComment> = yup.object().shape({
  user: userSchema,
  createdAt: yup.date().required(),
  comment: yup.string().required(),
  id: yup.string().required(),
});

export const listComments = yup.array(commentSchema);
