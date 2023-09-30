import { getServerSession } from '#auth'
import useBluesky from '~/assets/utils/useBluesky'

export default eventHandler(async (event) => {
  const session = await getServerSession(event)
  
  if(!session || !session.user) {
    return null
  }

  const { userFollowers } = useBluesky()
  // @ts-expect-error need to find a way to extend session interface
  const { accessJwt, handle } = session.user

  const { followers } = await userFollowers(handle, accessJwt)
  return followers
})
