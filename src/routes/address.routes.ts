import { Router } from "express";
import addressUpdateController from "../controllers/address/updateAddress.controller";
import verifyTokenMiddleware from './../middlewares/verifyToken.middleware';
import validatedAddressSerializer from './../serializer/validatedAddress.serializer copy';

const address = Router();

const addressRoutes = () => {
    address.patch("", verifyTokenMiddleware, validatedAddressSerializer, addressUpdateController);
  return address;
};

export { addressRoutes };
