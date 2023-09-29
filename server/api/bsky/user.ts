import { getServerSession } from '#auth'
import useBluesky from '~/assets/utils/useBluesky'
import { Actor } from '~/assets/utils/types'

export default eventHandler(async (event): Promise<Actor|null> => {
  const session = await getServerSession(event)
  
  if(!session || !session.user) {
    return null
  }

  const { userProfile } = useBluesky()
  // @ts-expect-error need to find a way to extend session interface
  const { accessJwt, handle } = session.user

  return await userProfile(handle, accessJwt)
})
