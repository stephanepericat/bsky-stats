import { NuxtAuthHandler } from '#auth'
import { Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Credentials } from '~/assets/utils/types'
import useBluesky from '~/assets/utils/useBluesky'

const { createSession } = useBluesky()

let userInfo: User

export default NuxtAuthHandler({
  callbacks: {
    session({ session }): Session {
      return { ...session, user: userInfo || null }
    },

    async signIn({ user }): Promise<boolean> {
      if(!user || !user.hasOwnProperty('accessJwt')) {
        return false
      } else {
        userInfo = user
        return true
      }
    }
  },

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Bluesky',
      credentials: {
        identifier: { label: 'Username', type:'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Credentials) {
        const { identifier, password } = credentials
        return await createSession(identifier, password)
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,
})
