import { Button, Card } from "react-bootstrap";
import NuoveUscite from "./NuoveUscite";
import React from "react";

const SingolaUscita = (song) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default SingolaUscita;
