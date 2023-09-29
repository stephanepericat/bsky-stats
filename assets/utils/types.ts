export type Actor = {
  did: string,
  handle: string,
  displayName: string,
  description: string,
  avatar: string,
  banner: string,
  followsCount: number,
  followersCount: number,
  postsCount: number,
  indexedAt: Date,
  viewer: { muted: boolean, blockedBy: boolean },
  labels: Array<string>
}

export type Credentials = {
  identifier: string,
  password: string,
}

export type UserSession = {
  did: string,
  handle: string,
  email: string,
  emailConfirmed: boolean,
  accessJwt: string,
  refreshJwt: string,
}