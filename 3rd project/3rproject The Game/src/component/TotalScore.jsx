import styled from "styled-components";

const ScoreComponent = styled.div`
  max-width: 200px;

  text-align: center;

  h1 {
    font-family: Poppins;
    font-weight: 500;
    font-size: 100px;
    line-height: 100%;
    letter-spacing: 0%;
  }
  p {
    font-family: Poppins;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

const TotalScore = ({ score }) => {
  return (
    <ScoreComponent>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreComponent>
  );
};

export default TotalScore;
