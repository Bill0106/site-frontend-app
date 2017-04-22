import Game from './Game'

interface GamesState {
  items: Game[]
  item: Game
  total: number
  error: string
  status: string
}

export default GamesState
