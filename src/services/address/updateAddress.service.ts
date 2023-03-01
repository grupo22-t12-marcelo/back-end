import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/users.entity";
import { IAddressRequest } from "./../../interfaces/user";

const addressUpdateService = async (id, data: IAddressRequest) => {
  const userRepository = AppDataSource.getRepository(User)
  const addressRepository = AppDataSource.getRepository(Address);
  const dataAddress = await addressRepository.findOneBy({
    user: { id },
  });

  await addressRepository.update(dataAddress.id, {
    city: data.city ? data.city : dataAddress.city,
    complement: data.complement ? data.complement : dataAddress.complement,
    number: data.number ? data.number : dataAddress.number,
    road: data.road ? data.road : dataAddress.road,
    state: data.state ? data.state : dataAddress.state,
    zipCode: data.zipCode ? data.zipCode : dataAddress.zipCode,
  });

  const address = await addressRepository.findOneBy({user: { id }})
  return address
};

export default addressUpdateService;
