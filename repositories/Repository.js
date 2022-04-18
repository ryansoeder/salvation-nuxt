import PageRepo from '~/repositories/PageRepo'
import ArtistRepo from '~/repositories/ArtistRepo'

export default ($axios) => ({
  page: PageRepo($axios),
  artist: ArtistRepo($axios),
})