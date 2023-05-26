import React, { useEffect } from "react";
import axios from "axios";

export default function CallbackPage() {
  // useEffect(() => {}, []);
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("state");
  const code = urlParams.get("code");
  const client_secret = process.env.osu_client_secret;
  const client_id = "22337";
  console.log(urlParams);

  const tokenEndpoint = "https://osu.ppy.sh/oauth/token";

  fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      code: code,
      grant_type: "authorization_code",
    }),
    mode: "cors",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  // TODO: use userId and code to generate api and log the user data to mongodb

  return (
    <div>
      <h1>You can close this page now.</h1>
    </div>
  );
}
