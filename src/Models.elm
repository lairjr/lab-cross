module Models exposing (..)

import RemoteData exposing (WebData)

type alias Model =
    { newPlayer : Player
    , players : WebData (List Player)
    , route : Route
    }

initialModel : Route -> Model
initialModel route =
  { newPlayer = { id = "", name = "", level = 0 }
  , players = RemoteData.Loading
  , route = route
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
