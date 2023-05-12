import { IUser } from './user.interface'
import User from './user.model'

// create new user
export const createUserDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload)
  await user.save()
  return user
}
// get all users
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find()
  return users
}

// get single user
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    //get single user by id
    { id: payload },
    // get specific user by name, email etc / here 1 mean true
    { name: 1, contactNo: 1, email: 1 }
  )
  return user
}
