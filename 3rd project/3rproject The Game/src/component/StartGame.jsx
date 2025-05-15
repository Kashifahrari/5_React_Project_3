import React from "react";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="public/images/1st_img.png" alt="" />
      </div>
      <div className="Content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Paly Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1182px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .Content {
    position: relative;
    h1 {
      width: 528;
      height: 144;
      font-family: Poppins;
      font-weight: 700;
      font-size: 96px;
      line-height: 100%;
      letter-spacing: 0%;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  width: 220px;
  height: 44px;
  border: 1px solid black transparent;
  color: #fff;
  position: absolute;
  background-color: black;
  border-radius: 7px;
  right: 1rem;
  margin-top: 3px;
  font-weight: 700;
  transition: 2s, ease-in;
  transition: 0.4s background-color ease-in;

  &:hover {
    transition: ease-in;
    color: #000000;
    background-color: #746e6e;
    font-weight: 700;
    transform: rotate(0.5turn);
    transition: 0.2s background-color ease-in;
  }
`;

export default StartGame;
