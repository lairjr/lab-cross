module Socket exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput)
import WebSocket


-- MODEL


type alias Model =
    { input : String
    , messages : List String
    }


init : ( Model, Cmd Msg )
init =
    ( Model "" [], Cmd.none )


socketUrl : String
socketUrl =
    "ws://echo.websocket.org"



-- UPDATE


type Msg
    = Input String
    | SendToSocket
    | NewMessageReceive String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Input str ->
            ( { model | input = str }, Cmd.none )

        SendToSocket ->
            ( model, WebSocket.send socketUrl model.input )

        NewMessageReceive str ->
            ( { model | input = "", messages = str :: model.messages }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    WebSocket.listen socketUrl NewMessageReceive



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ ul [] (List.map (\i -> li [] [ text i ]) model.messages)
        , input [ onInput Input ] []
        , button [ onClick SendToSocket ] [ text "Send" ]
        ]



-- PROGRAM


main =
    Html.program
        { init = init
        , view = view
        , subscriptions = subscriptions
        , update = update
        }
