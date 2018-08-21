type Album =  {
  ART_ID: string,
  ALB_ID: string,
  ALB_TITLE: string,
  ART_NAME: string,
  ALB_PICTURE: string,
  DATE_FAVORITE?: string,
  PHYSICAL_RELEASE_DATE: string,
  __TYPE__: string
}

type User = {
  email?: string,
  password?: string,
  uid?: string
}

type AppState = {
  album: Album[],
  cart: Album[],
  auth: User | boolean | Error,
  form: any
}

type UserForm = {
  name: string,
  email: string,
  phone: string,
  address: string
}
