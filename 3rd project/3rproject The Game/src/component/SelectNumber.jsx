import styled from "styled-components";

const Box = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;

  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${(prop) => (prop.check ? "white" : "black")};
  background-color: ${(prop) => (prop.check ? "black" : "white")};
`;

const OuterBox = styled.div`
  display: flex;
  position: relative;
  gap: 10px;

  .error {
    position: absolute;
    color: red;
    right: 30rem;
    top: 2rem;
    white-space: nowrap;
  }
`;

const select_Number_Error_handeler = () => {};

const SelectNumber = ({
  seterror,
  error,
  selectedNumber,
  setselectedNumber,
}) => {
  const arryNumber = [1, 2, 3, 4, 5];

  const setHandaler = (val) => {
    setselectedNumber(val);
    seterror("");
  };

  return (
    <OuterBox>
      {
        <div className="error">
          <h3>{error}</h3>
        </div>
      }
      {arryNumber.map((val, i) => (
        <Box
          check={selectedNumber == val}
          key={i}
          onClick={() => setHandaler(val)}
        >
          {val}
        </Box>
      ))}
    </OuterBox>
  );
};

export default SelectNumber;
