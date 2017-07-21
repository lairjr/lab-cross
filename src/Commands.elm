module Commands exposing (..)

import Http
import Json.Decode as Decode
import Json.Decode.Pipeline exposing (decode, required)
import Json.Encode as Encode
import Msgs exposing (Msg)
import Models exposing (PlayerId, Player)
import RemoteData

alwaysExpect : a -> Http.Expect a
alwaysExpect =
     Http.expectStringResponse << always << Ok

fetchPlayers : Cmd Msg
fetchPlayers =
  Http.get fetchPlayersUrl playersDecoder
    |> RemoteData.sendRequest
    |> Cmd.map Msgs.OnFetchPlayers

fetchPlayersUrl : String
fetchPlayersUrl =
  "http://localhost:4000/players"

playersDecoder : Decode.Decoder (List Player)
playersDecoder =
  Decode.list playerDecoder

playerDecoder : Decode.Decoder Player
playerDecoder =
  decode Player
    |> required "id" Decode.string
    |> required "name" Decode.string
    |> required "level" Decode.int

savePlayerUrl : PlayerId -> String
savePlayerUrl playerId = "http://localhost:4000/players/" ++ playerId

savePlayerRequest : Player -> Http.Request Player
savePlayerRequest player =
  Http.request
    { body = playerEncoder player |> Http.jsonBody
    , expect = Http.expectJson playerDecoder
    , headers = []
    , method = "PATCH"
    , timeout = Nothing
    , url = savePlayerUrl player.id
    , withCredentials = False
    }

savePlayerCmd : Player -> Cmd Msg
savePlayerCmd player =
  savePlayerRequest player
    |> Http.send Msgs.OnPlayerSave

deletePlayerRequest : Player -> Http.Request PlayerId
deletePlayerRequest player =
  Http.request
    { method = "DELETE"
    , headers = []
    , url = savePlayerUrl player.id
    , body = Http.emptyBody
    , expect = alwaysExpect player.id
    , timeout = Nothing
    , withCredentials = False
    }

deletePlayerCmd : Player -> Cmd Msg
deletePlayerCmd player =
 deletePlayerRequest player
    |> Http.send Msgs.OnPlayerDelete

putPlayerRequest : Player -> Http.Request Player
putPlayerRequest player =
  Http.request
    { method = "POST"
    , headers = []
    , url = "http://localhost:4000/players"
    , body = playerEncoder player |> Http.jsonBody
    , expect =  Http.expectJson playerDecoder
    , timeout = Nothing
    , withCredentials = False
    }

putPlayerCmd : Player -> Cmd Msg
putPlayerCmd player =
  putPlayerRequest player
    |> Http.send Msgs.OnPlayerSave

playerEncoder : Player -> Encode.Value
playerEncoder player =
  let
    attributes =
      [ ( "id", Encode.string player.id )
      , ( "name", Encode.string player.name )
      , ( "level", Encode.int player.level )
      ]
  in
    Encode.object attributes
