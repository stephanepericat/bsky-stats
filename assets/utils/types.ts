export type BskyUser = {
  did: string,
  handle: string,
  email: string,
  emailConfirmed: boolean,
  accessJwt: string,
  refreshJwt: string,
}

export type Credentials = {
  identifier: string,
  password: string,
}