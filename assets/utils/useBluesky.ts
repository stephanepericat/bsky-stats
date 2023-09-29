import axios from 'axios'

import {
  BSKY_API_ROOT,
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

  return {
    createSession,
  }
}