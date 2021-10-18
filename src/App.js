import './CSS/App.css';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './components/AuthSpotify';
import SpotifyWebApi from "spotify-web-api-js"
import Start from './components/Start';
import { useDataLayerValue } from "./components/DataLayer"
const spotify = new SpotifyWebApi();
function App() {

  const [token, setToken] = useState(null)
  const [user, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('0Vx5HY1Z7jRjxFGN1quVNi').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
    console.log("I have a Token 👉", token);
  }, []);
  console.log('🧑', user);
  console.log(' 👽 ', token);
  return (
    <div className="App">{token ? (
      <Start spotify={spotify} />
    ) : (
      <Login />
    )
    }
    </div>
  );
}

export default App;
