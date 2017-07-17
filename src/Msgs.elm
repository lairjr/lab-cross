module Msgs exposing (..)

import Http
import Models exposing (Player)
import Navigation exposing (Location)
import RemoteData exposing (WebData)

type Msg
    = OnFetchPlayers (WebData (List Player))
    | OnLocationChange Location
    | ChangeLevel Player Int
    | DeletePlayer Player
    | OnPlayerDelete (Result Http.Error Player)
    | OnPlayerSave (Result Http.Error Player)
