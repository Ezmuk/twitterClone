import React from "react";
import { useParams } from "react-router-dom";

export default function Profil() {
  const { username } = useParams();
  return (
    <div>
      <h1>Profile de {username}</h1>
    </div>
  );
}
