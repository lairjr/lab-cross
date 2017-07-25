module Msgs exposing (..)

import Http
import Models exposing (Player, PlayerId)
import Navigation exposing (Location)
import RemoteData exposing (WebData)

type Msg
    = OnFetchPlayers (WebData (List Player))
    | OnLocationChange Location
    | ChangeLevel Player Int
    | ChangeLevelNoRequest Player Int
    | ChangeNameNoRequest Player String
    | DeletePlayer Player
    | OnPlayerDelete (Result Http.Error PlayerId)
    | OnNewPlayerSave (Result Http.Error Player)
    | OnPlayerSave (Result Http.Error Player)
    | SaveNewPlayer Player
