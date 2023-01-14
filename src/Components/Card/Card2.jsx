import React from 'react'
import Input from "../Input/InputMaskString";
import { useEffect, useState } from "react";
function Card2() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const getValueUsername = (e) => {
    setUsername(e.target.value);
    setUser({ username: e.target.value, password: password });
  };
  const [user, setUser] = useState({
    username: username,
    password: password,
  });
  return (
    <div>
       <Input
          label="User Name"
          val1={username}
          setVal1={getValueUsername}
        />
    </div>
  )
}

export default Card2
