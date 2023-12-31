import { getAppWriteDataSource, getAppReadDataSource } from "../dataSource"
import { User } from "../entities/user.entity"

export const allUsers = async () => {
  const AppDataSource = await getAppReadDataSource()
  const userRepository = AppDataSource.getRepository(User)
  return userRepository.find()
}

export const getLimitUsers = async (limit:number) => {
    const AppDataSource = await getAppReadDataSource()
    const users = await AppDataSource.query(
        `SELECT * FROM public.user where (age % 1000) = 800 limit ${limit}`
      );
    return users;
  }

  export const getOneUser = async () => {
    const AppDataSource = await getAppReadDataSource()
    const userRepository = AppDataSource.getRepository(User)
    return userRepository.findOne({where:{id:1}})
  }
  

export const saveUser = async () => {
  const user = new User()
  user.firstName = "Timber"
  user.lastName = "Saw"
  user.age = 25
  const AppDataSource = await getAppWriteDataSource()
  const userRepository = AppDataSource.getRepository(User)
  await userRepository.save(user)
}

export const updateUser = async (id: number) => {
  const AppDataSource = await getAppWriteDataSource()
  const userRepository = AppDataSource.getRepository(User)
  const userToUpdate = await userRepository.findOneBy({ id })
  if (!userToUpdate) {
    throw new Error("User not exists")
  }
  userToUpdate.firstName = `Nikki-${new Date().getTime()}`
  await userRepository.save(userToUpdate)
}

export const deleteUser = async (id: number) => {
  const AppDataSource = await getAppWriteDataSource()
  const userRepository = AppDataSource.getRepository(User)
  const userToDelete = await userRepository.findOneBy({ id })
  if (!userToDelete) {
    throw new Error("User not exists")
  }
  await userRepository.remove(userToDelete)
}
