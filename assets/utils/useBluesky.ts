import axios from 'axios'
import { Actor } from './types'

import {
  BSKY_API_ROOT,
  BSKY_PROFILE_LEXICON,
  BSKY_SESSION_LEXICON,
} from '~/assets/constants/bluesky'

export default () => {
  const client = axios.create({
    baseURL: BSKY_API_ROOT,
  })

  const createSession = async (identifier: string, password: string) => {
    try {
      const { data } = await client.post(BSKY_SESSION_LEXICON, { identifier, password })
      return data
    } catch (e) {
      return null
    }
  }

  const userProfile = async (actor: string, accessToken: string): Promise<Actor|null> => {
    try {
      const { data } = await client.get(BSKY_PROFILE_LEXICON, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: { actor },
      })

      return data
    } catch (e) {
      return null
    }
  }

  return {
    createSession,
    userProfile,
  }
}