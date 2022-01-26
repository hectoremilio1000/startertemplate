import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";

function Administrador() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [authenticationCode, setauthenticationCode] = useState("");

  const [userLogueado, setUserLogueado] = useState(false);

  function checkUser() {
    Auth.currentAuthenticatedUser()
      .then(setUserLogueado(true))
      .catch(err => console.log(err));
  }

  const signUp = async () => {
    try {
      await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
        },
      });
      console.log("succes", { username, password, email });
    } catch (err) {
      console.log("error signin up", err);
    }
  };

  const confirSignUp = async () => {
    try {
      await Auth.confirmSignUp({
        username: username,
        authenticationCode: authenticationCode,
      });
      console.log("user successfylly signe up");
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (userLogueado) {
    return (
      <>
        Logueate por favor
        <div>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <input
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={signUp}>Sign Up</button>
        </div>
      </>
    );
  } else {
    return <div>Hola admin</div>;
  }
}

export default Administrador;
