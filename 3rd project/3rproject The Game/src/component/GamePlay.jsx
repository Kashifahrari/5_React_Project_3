import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import styled from "styled-components";
import DiceRoll from "./DiceRoll";

import { useState } from "react";

const FllScreen = styled.div`
  .top_part {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    width: 1280px;
    height: 150px;
    margin: 36px auto;
  }

  .selectNumber {
    h3 {
      position: absolute;
      right: 8rem;
      font-weight: 700;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: 0%;
      top: 11rem;
    }
  }
`;

const GamePlay = () => {
  const [curnumber, setNumber] = useState(1);
  const [selectedNumber, setselectedNumber] = useState();
  const [score, setscore] = useState(0);
  const [error, seterror] = useState("");

  const randomfunc = () => {
    if (!selectedNumber) {
      seterror("You have not selected any number");
      return;
    }
    const num = Math.floor(Math.random() * 6) + 1;
    setNumber(num);

    if (num == selectedNumber) {
      setscore((pre) => pre + num);
    } else {
      setscore((pre) => (pre > 0 ? pre - 1 : 0));
    }

    setselectedNumber(undefined);
  };

  const reset_to_Start = () => {
    setNumber(1);
    setselectedNumber(undefined);
    setscore(0);
    seterror("");
  };

  return (
    <FllScreen>
      <div className="top_part">
        <TotalScore score={score} />
        <SelectNumber
          seterror={seterror}
          error={error}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>
      <div className="selectNumber">
        <h3>Select a Number</h3>
      </div>
      <div>
        <DiceRoll curnumber={curnumber} randomfunc={randomfunc} />
      </div>

      <Button onClick={reset_to_Start}>Reset</Button>
    </FllScreen>
  );
};

export default GamePlay;

const Button = styled.button`
  width: 220px;
  height: 44px;
  border: 1px solid black transparent;
  color: #fff;
  position: absolute;
  background-color: black;
  border-radius: 7px;
  position: absolute;
  left: 41rem;
  margin-top: 3px;
  font-weight: 700;
  font-size: 18px;
  transition: 2s, ease-in;
  transition: 0.4s all ease-in;

  &:hover {
    transition: ease-in;
    color: #000000;
    background-color: #746e6e;
    font-weight: 700;
    transform: rotate(0.5turn);
    font-size: 18px;
    color: #fff;
    transition: 0.2s background-color ease-in;
  }
`;
