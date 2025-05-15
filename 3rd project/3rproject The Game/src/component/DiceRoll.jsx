import styled from "styled-components";

const Dice_Container = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  h4 {
    margin-top: 3px;
    font-family: Poppins;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
  }
  .dice {
    cursor: pointer;
  }
`;

const DiceRoll = ({ curnumber, randomfunc }) => {
  return (
    <Dice_Container>
      <div className="dice" onClick={randomfunc}>
        <img
          src={`/images/diice_roll/dice_${curnumber}.png`}
          alt={`Dice ${curnumber}`}
        />
      </div>
      <h4>Click on Dice to roll</h4>
    </Dice_Container>
  );
};

export default DiceRoll;
