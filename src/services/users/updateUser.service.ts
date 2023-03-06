import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/users.entity";
import { IUserUpdateRequest } from "../../interfaces/user";

const userUpdateService = async (id: string, data: IUserUpdateRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);
  const user = await userRepository.findOneBy({ id });

  const {
    name,
    email,
    password,
    cpf,
    birthdate,
    description,
    phone,
    type_account,
  } = data;

  await userRepository.update(id, {
    name: name ? name : user.name,
    email: email ? email : user.email,
    password: password ? await hash(password, 10) : user.password,
    cpf: cpf ? cpf : user.cpf,
    birthdate: birthdate ? birthdate : user.birthdate,
    description: description ? description : user.description,
    phone: phone ? phone : user.phone,
    type_account: type_account ? type_account : user.type_account,
  });

  await addressRepository.update(user.address.id, {
    city: data.address?.city ? data.address?.city : user.address.city,
    complement: data.address?.complement
      ? data.address?.complement
      : user.address.complement,
    number: data.address?.number ? data.address?.number : user.address.number,
    road: data.address?.road ? data.address?.road : user.address.road,
    state: data.address?.state ? data.address?.state : user.address.state,
    zipCode: data.address?.zipCode
      ? data.address?.zipCode
      : user.address.zipCode,
  });

  const result = await userRepository.findOneBy({ id });
  return result;
};

export default userUpdateService;
