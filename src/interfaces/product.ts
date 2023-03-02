export interface IImagesGallery {
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
}

export interface IProductRequest {
  type_announcement: string;
  title: string;
  year: number;
  kilometers: number;
  price: number;
  description: string;
  type_vehicle: string;
  image: string;
  imagesGallery?: IImagesGallery;
}

export interface IProductUpdate {
  id?: string;
  type_announcement?: string;
  title?: string;
  year?: number;
  kilometers?: number;
  price?: number;
  description?: string;
  type_vehicle?: string;
  image?: string;
}

export interface IProductListAll {
  type_announcement: string;
  title: string;
  year: number;
  kilometers: number;
  price: number;
  description: string;
  type_vehicle: string;
  image: string;
  createdAt: Date;
}
