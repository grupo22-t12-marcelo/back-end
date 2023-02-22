export interface IProductRequest {
  type_announcement: string;
  title: string;
  year: number;
  kilometers: number;
  price: number;
  description: string;
  type_vehicle: string;
  image: string;
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
