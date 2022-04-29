import PageRepo from '~/repositories/PageRepo'
import ArtistRepo from '~/repositories/ArtistRepo'
import OptionsRepo from '~/repositories/OptionsRepo'
import MenuRepo from '~/repositories/MenuRepo'

export default ($axios) => ({
  page: PageRepo($axios),
  artist: ArtistRepo($axios),
  options: OptionsRepo($axios),
  menu: MenuRepo($axios),
})