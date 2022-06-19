import { ID } from "../../../types"

export type CREATE_BODY = {
  username: string
  email: string
  password: string
  usersTypesId: ID
  address: {
    zipcode: string
    street: string
    city: string
    district: string
    complement: string
  },
  jsonData: JSON
}