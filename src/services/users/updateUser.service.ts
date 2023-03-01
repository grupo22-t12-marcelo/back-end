import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUserUpdateRequest } from "../../interfaces/user";

const userUpdateService = async (id, data: IUserUpdateRequest) => {
  const userRepository = AppDataSource.getRepository(User);
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

  const result = await userRepository.findOneBy({ id });
  return result;
};

export default userUpdateService;
