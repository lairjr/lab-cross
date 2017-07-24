module Update exposing (..)

import Commands exposing (deletePlayerCmd, postPlayerCmd, savePlayerCmd)
import Msgs exposing (Msg(..))
import Models exposing (Model, Player, PlayerId)
import RemoteData
import Routing exposing (parseLocation)

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Msgs.OnFetchPlayers response ->
            ( { model | players = response }, Cmd.none )
        Msgs.OnLocationChange location ->
          let newRoute = parseLocation location
          in ( { model | route = newRoute }, Cmd.none )
        Msgs.ChangeLevel player howMuch ->
          let updatedPlayer = { player | level = player.level + howMuch }
          in ( model, savePlayerCmd updatedPlayer )
        Msgs.ChangeLevelNoRequest player howMuch ->
          let updatedPlayer = { player | level = player.level + howMuch }
          in ( { model | newPlayer = updatedPlayer }, Cmd.none )
        Msgs.ChangeNameNoRequest player name ->
          let updatedPlayer = { player | name = name }
          in ( { model | newPlayer = updatedPlayer }, Cmd.none )
        Msgs.DeletePlayer player ->
          ( model, deletePlayerCmd player )
        Msgs.OnPlayerDelete (Ok player) ->
          ( removePlayer model player, Cmd.none )
        Msgs.OnPlayerDelete (Err error) ->
          ( model, Cmd.none )
        Msgs.OnPlayerSave (Ok player) ->
          ( updatePlayer model player, Cmd.none )
        Msgs.OnPlayerSave (Err error) ->
          ( model, Cmd.none )
        Msgs.SaveNewPlayer player ->
          ( model, postPlayerCmd player )

updatePlayer : Model -> Player -> Model
updatePlayer model updatedPlayer =
  let
    pick currentPlayer =
      if updatedPlayer.id == currentPlayer.id then
        updatedPlayer
      else
        currentPlayer

    updatePlayerList players = List.map pick players
    updatedPlayers =
      RemoteData.map updatePlayerList model.players
  in
    { model | players = updatedPlayers }

removePlayer : Model -> PlayerId -> Model
removePlayer model removedPlayerId =
  let
    updatePlayerList players = List.filter (\p -> p.id /= removedPlayerId) players
    updatedPlayers = RemoteData.map updatePlayerList model.players
  in
    { model | players = updatedPlayers }
