// import { Button, Card } from "react-bootstrap";
// import { useState } from "react";
import SingolaUscita from "./SingolaUscita";

// const [song, setSong] = useState([]);

const NuoveUscite = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE NELLA FETCH");
      }
    })
    .then((arrayOfSongs) => {
      console.log(arrayOfSongs);
    })
    .catch((error) => {
      console.log(error, "ERRORE");
    });
  return (
    <>
      <h2>Nuove uscite &#8594;</h2>
      <SingolaUscita />
    </>
  );
};

export default NuoveUscite;
