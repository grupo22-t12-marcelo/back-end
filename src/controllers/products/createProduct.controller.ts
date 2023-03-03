import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { createImageGallery } from "../../services/imageGallery/createImagesGallery.service";
import { createProductService } from "../../services/products/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  const data = req.body;
  const imageGallery = req.body.imagesGallery
  const id = req.user.id;
  const createdAnnouncement = await createProductService(data, id);
  const product_id = createdAnnouncement.id
  const createdAnnouncementImageGallerry = await createImageGallery(imageGallery, product_id, id)
  return res.status(201).json(instanceToInstance(createdAnnouncement));
};

export { createProductController };

