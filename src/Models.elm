module Models exposing (..)

import RemoteData exposing (WebData)

type alias Model =
    { newPlayer : Player
    , players : WebData (List Player)
    , route : Route
    }

initialModel : Route -> Model
initialModel route =
  { newPlayer = initNewPlayer
  , players = RemoteData.Loading
  , route = route
  }

initNewPlayer : Player
initNewPlayer =
  { id = ""
  , name = ""
  , level = 0
  }

type Route
  = NewPlayerRoute
  | PlayersRoute
  | PlayerRoute PlayerId
  | NotFoundRoute

type alias PlayerId =
  String

type alias Player =
  { id : PlayerId
  , name : String
  , level : Int
  }
