import { IUserListProduct } from "./user";

export interface ICommentRequest {
  comment: string;
}

export interface IComment {
  id: string;
  comment: string;
  createdAt: Date;
  user: IUserListProduct;
}
